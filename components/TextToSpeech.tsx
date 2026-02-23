"use client";

import React, { useState, useEffect } from "react";
import { Play, Pause, Square, Volume2 } from "lucide-react";

interface TextToSpeechProps {
    htmlContent: string;
}

export default function TextToSpeech({ htmlContent }: TextToSpeechProps) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [isSupported, setIsSupported] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined" && "speechSynthesis" in window) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setIsSupported(true);
        }

        // Cleanup on unmount
        return () => {
            if ("speechSynthesis" in window) {
                window.speechSynthesis.cancel();
            }
        };
    }, []);

    // Workaround for Chrome's 15-second speech synthesis bug
    // Uses a keep-alive interval to silently pause and resume
    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isPlaying && !isPaused) {
            interval = setInterval(() => {
                if (window.speechSynthesis.speaking && !window.speechSynthesis.paused) {
                    window.speechSynthesis.pause();
                    window.speechSynthesis.resume();
                }
            }, 10000);
        }
        return () => {
            if (interval) clearInterval(interval);
        };
    }, [isPlaying, isPaused]);

    const handlePlay = () => {
        if (!isSupported) return;

        if (isPaused) {
            window.speechSynthesis.resume();
            setIsPaused(false);
            setIsPlaying(true);
        } else {
            // Cancel any unexpected ongoing speech
            window.speechSynthesis.cancel();

            // Extract pure text from HTML safely
            const tempDiv = document.createElement("div");
            tempDiv.innerHTML = htmlContent;

            // Clean up extra whitespace and newlines for better reading flow
            const text = (tempDiv.textContent || tempDiv.innerText || "")
                .replace(/\s+/g, ' ')
                .trim();

            if (!text) return;

            // browsers often fail silently on very long text strings.
            // A robust solution is to break the text into sentences.
            const senteces = text.match(/[^.!?]+[.!?]+/g) || [text];

            const voices = window.speechSynthesis.getVoices();

            // Array of known, good quality english male voices across OS/Browsers
            const preferredMaleVoices = [
                "Google UK English Male",
                "Microsoft Guy Online (Natural)",
                "Microsoft Christopher Online (Natural)",
                "Microsoft Ryan Online (Natural)",
                "Microsoft David",
                "Microsoft Mark",
                "Daniel",
                "Alex"
            ];

            let selectedVoice = null;

            // 1. Try to find a preferred male voice
            for (const preferred of preferredMaleVoices) {
                const match = voices.find(v => v.lang.startsWith("en") && v.name.includes(preferred));
                if (match) {
                    selectedVoice = match;
                    break;
                }
            }

            // 2. Fallback check for any english voice that says "Male" or "Boy" in the name
            if (!selectedVoice) {
                selectedVoice = voices.find(v => v.lang.startsWith("en") && (v.name.toLowerCase().includes("male") || v.name.toLowerCase().includes("boy")));
            }

            // 3. Fallback to any english voice
            if (!selectedVoice) {
                selectedVoice = voices.find(v => v.lang.startsWith("en"));
            }

            // Chain the sentences together
            const speakSentence = (index: number) => {
                if (index >= senteces.length) {
                    setIsPlaying(false);
                    setIsPaused(false);
                    return;
                }

                const utterance = new SpeechSynthesisUtterance(senteces[index]);
                utterance.rate = 0.85; // slightly slower
                utterance.pitch = 0.9; // slightly lower pitch
                utterance.volume = 1;  // ensure volume is maxed

                if (selectedVoice) {
                    utterance.voice = selectedVoice;
                }

                utterance.onend = () => {
                    // recursively speak the next sentence when this one finishes
                    speakSentence(index + 1);
                };

                utterance.onerror = (e) => {
                    if (e.error !== 'interrupted' && e.error !== 'canceled') {
                        console.error("Text to speech error on chunk:", e);
                    }
                    setIsPlaying(false);
                    setIsPaused(false);
                };

                window.speechSynthesis.speak(utterance);
            };

            // Start speaking from the first sentence
            try {
                speakSentence(0);
                setIsPlaying(true);
                setIsPaused(false);
            } catch (err) {
                console.error("Failed to start speech synthesis:", err);
                setIsPlaying(false);
            }
        }
    };

    const handlePause = () => {
        if (!isSupported) return;
        window.speechSynthesis.pause();
        setIsPaused(true);
        setIsPlaying(false);
    };

    const handleStop = () => {
        if (!isSupported) return;
        window.speechSynthesis.cancel();
        setIsPlaying(false);
        setIsPaused(false);
    };

    if (!isSupported) return null;

    return (
        <div className="flex items-center gap-3 bg-white/50 backdrop-blur-md border border-stone-200 px-1.5 py-1.5 rounded-full w-fit shadow-sm">
            <div className="pl-3 pr-2 flex items-center gap-2 text-stone-600">
                <Volume2 className={`w-4 h-4 ${isPlaying ? 'text-primary animate-pulse' : ''}`} />
                <span className="text-sm font-semibold tracking-wide uppercase text-stone-500">Listen</span>
            </div>

            <div className="flex items-center gap-1.5 border-l border-stone-200 pl-3 pr-1">
                {!isPlaying ? (
                    <button
                        onClick={handlePlay}
                        className="w-10 h-10 flex items-center justify-center bg-stone-900 text-white rounded-full hover:bg-stone-800 transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-stone-900"
                        aria-label="Play audio"
                    >
                        <Play className="w-4 h-4 ml-0.5" />
                    </button>
                ) : (
                    <button
                        onClick={handlePause}
                        className="w-10 h-10 flex items-center justify-center bg-amber-500 text-white rounded-full shadow-sm hover:scale-105 transition-transform animate-in zoom-in focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
                        aria-label="Pause audio"
                    >
                        <Pause className="w-4 h-4" />
                    </button>
                )}

                {(isPlaying || isPaused) && (
                    <button
                        onClick={handleStop}
                        className="w-10 h-10 flex items-center justify-center bg-stone-200 text-stone-700 rounded-full hover:bg-stone-300 transition-colors animate-in zoom-in focus:ring-2 focus:ring-offset-2 focus:ring-stone-200"
                        aria-label="Stop audio"
                    >
                        <Square className="w-3.5 h-3.5" />
                    </button>
                )}
            </div>
        </div>
    );
}
