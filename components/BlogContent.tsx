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

    // Fix 3: Target FAQ Section spacing (Numbered format)
    // Identify headings containing "FAQ" and standardize spacing for following siblings
    const headings = blogBody.querySelectorAll('h2, h3, h4');
    headings.forEach((heading) => {
      if (heading.textContent?.toUpperCase().includes('FAQ')) {
        let sibling = heading.nextElementSibling;
        let isFirstQuestion = true;
        
        while (sibling && !['H2', 'H3', 'H4'].includes(sibling.tagName)) {
          const text = sibling.textContent?.trim() || '';
          
          // Remove empty ghost paragraphs
          if (sibling.tagName === 'P' && text === '') {
            const toRemove = sibling;
            sibling = sibling.nextElementSibling;
            toRemove.remove();
            continue;
          }

          if (sibling.tagName === 'P') {
            const isQuestion = /^\d+\./.test(text);
            
            if (isQuestion) {
              // Standardize Question Spacing
              (sibling as HTMLElement).style.marginTop = isFirstQuestion ? '1.5rem' : '2.5rem';
              (sibling as HTMLElement).style.marginBottom = '0.5rem';
              (sibling as HTMLElement).style.fontWeight = '700';
              (sibling as HTMLElement).style.color = '#1c1917'; // Stone 900
              isFirstQuestion = false;
            } else {
              // Standardize Answer Spacing
              (sibling as HTMLElement).style.marginTop = '0';
              (sibling as HTMLElement).style.marginBottom = '1rem';
            }
            
            // Ensure no indentation (flush-left)
            (sibling as HTMLElement).style.paddingLeft = '0';
          }
          
          sibling = sibling.nextElementSibling;
        }
      }
    });

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
