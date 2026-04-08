'use client';

import { useEffect, useRef, ReactNode } from 'react';

interface BlogContentProps {
  html?: string;
  children?: ReactNode;
  className?: string;
}

/**
 * BlogContent Component
 * Corrects word concatenation and FAQ layout issues directly in the DOM.
 * Works with both raw HTML strings and React children (like PortableText).
 */
export default function BlogContent({ html, children, className = '' }: BlogContentProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const blogBody = containerRef.current;
    
    // Fix 1: Spacing around bold elements and links
    // We target strong, b, and a tags which are commonly concatenated
    const inlineElements = blogBody.querySelectorAll('strong, b, a');
    inlineElements.forEach((el) => {
      // Check previous sibling for missing space: "word<strong>"
      const prev = el.previousSibling;
      if (prev && prev.nodeType === Node.TEXT_NODE) {
        const text = prev.textContent || '';
        // If the text doesn't end in a space, and the element doesn't start with one
        if (text.length > 0 && !/\s$/.test(text) && !/[>]$/.test(text)) {
           // Don't add space if it's punctuation like ( or "
           if (!/[( "]$/.test(text)) {
             prev.textContent = text + ' ';
           }
        }
      }
      
      // Check next sibling for missing space: "</strong>word"
      const next = el.nextSibling;
      if (next && next.nodeType === Node.TEXT_NODE) {
        const text = next.textContent || '';
        if (text.length > 0 && !/^\s/.test(text) && !/^[<]/.test(text)) {
          // Don't add space if it's punctuation like , . ) ! ?
          if (!/^[.,)!? ]/.test(text)) {
            // Special Case: FAQ repair from legacy migrations
            const isFaq = el.textContent?.includes('?') || /\d+\./.test(el.textContent || '');
            if (isFaq && el.tagName !== 'A') {
              const br = document.createElement('br');
              const br2 = document.createElement('br');
              next.parentNode?.insertBefore(br, next);
              next.parentNode?.insertBefore(br2, next);
            } else {
              next.textContent = ' ' + text;
            }
          }
        }
      }
    });

    // Fix 2: Repair specific punctuation concatenation (e.g., "Thrissur.Next")
    const walker = document.createTreeWalker(blogBody, NodeFilter.SHOW_TEXT);
    let node;
    while (node = walker.nextNode()) {
      if (node.textContent) {
        // Fix "Sentence.Next" without space
        node.textContent = node.textContent.replace(/([.?!])([A-Z])/g, '$1 $2');
      }
    }

  }, [html, children]); // Re-run if content changes

  if (html) {
    return (
      <div 
        ref={containerRef}
        className={className}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
