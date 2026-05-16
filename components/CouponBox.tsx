"use client";

import { useState } from "react";
import { Copy, CheckCircle2 } from "lucide-react";

export default function CouponBox() {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("NATURE2026");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 p-8 rounded-[2rem] border border-amber-200/50 shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 -m-6 w-24 h-24 bg-amber-300/30 rounded-full blur-2xl"></div>
            <h4 className="font-display font-bold text-stone-900 text-xl mb-2">🎁 Unlock 10% Off</h4>
            <p className="text-stone-600 text-sm mb-6 leading-relaxed">
                Planning a getaway? Use this secret reader’s code on your next direct booking.
            </p>
            <div
                onClick={handleCopy}
                className="flex items-center justify-between bg-white px-4 py-3 rounded-xl border border-dashed border-amber-300 cursor-pointer hover:bg-amber-50 transition-colors"
            >
                <span className="font-mono font-bold text-amber-700 tracking-wider">NATURE2026</span>
                {copied ? <CheckCircle2 className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5 text-stone-400" />}
            </div>
        </div>
    );
}
