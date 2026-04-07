'use client';

import { useEffect, useRef } from 'react';

interface BlogContentProps {
  html: string;
  className?: string;
}

/**
 * BlogContent Component
 * Corrects word concatenation and FAQ layout issues directly in the DOM
 * This is a "nuclear" fix for hydration mismatches and malformed source HTML.
 */
export default function BlogContent({ html, className = '' }: BlogContentProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // 1. Definitively fix word concatenation (e.g., "word<strong>Another")
    // We iterate through all elements that might be concatenated
    const blogBody = containerRef.current;
    
    // Fix 1: Spacing around bold elements
    const boldElements = blogBody.querySelectorAll('strong, b');
    boldElements.forEach((el) => {
      // Check previous sibling for missing space: "word<strong>"
      const prev = el.previousSibling;
      if (prev && prev.nodeType === Node.TEXT_NODE) {
        const text = prev.textContent || '';
        if (text.length > 0 && !/\s$/.test(text) && !/[>]$/.test(text)) {
          prev.textContent = text + ' ';
        }
      }
      
      // Check next sibling for missing space: "</strong>word"
      const next = el.nextSibling;
      if (next && next.nodeType === Node.TEXT_NODE) {
        const text = next.textContent || '';
        if (text.length > 0 && !/^\s/.test(text) && !/^[<]/.test(text)) {
          // If it looks like an FAQ answer (starts immediately after a question)
          const isFaq = el.textContent?.includes('?') || /\d+\./.test(el.textContent || '');
          if (isFaq) {
            // Force it to a new line by wrapping the text in a div or adding a break
            const br = document.createElement('br');
            const br2 = document.createElement('br');
            next.parentNode?.insertBefore(br, next);
            next.parentNode?.insertBefore(br2, next);
          } else {
            next.textContent = ' ' + text;
          }
        }
      }
    });

    // Fix 2: Repair specific punctuation concatenation (e.g., "Thrissur.Next")
    const walker = document.createTreeWalker(blogBody, NodeFilter.SHOW_TEXT);
    let node;
    while (node = walker.nextNode()) {
      if (node.textContent) {
        node.textContent = node.textContent.replace(/([.?!])([A-Z])/g, '$1 $2');
      }
    }

  }, [html]); // Re-run if HTML changes

  return (
    <div 
      ref={containerRef}
      className={`blog-content-container ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
