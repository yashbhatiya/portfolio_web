
import React, { useEffect, useRef } from 'react';

interface SplitTextProps {
  children: string;
  className?: string;
}

const SplitText: React.FC<SplitTextProps> = ({ children, className = '' }) => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current) return;
    
    const words = textRef.current.innerText.split(' ');
    let html = '';

    words.forEach((word) => {
      html += `<span class="word">`;
      
      // Split each word into characters
      for (let i = 0; i < word.length; i++) {
        html += `<span class="char" style="--char-index:${i}">${word[i]}</span>`;
      }
      
      html += `</span> `;
    });

    textRef.current.innerHTML = html;
  }, [children]);

  return <div ref={textRef} className={className}>{children}</div>;
};

export default SplitText;
