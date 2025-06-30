import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import './LoadingSpinner.css';

const LoadingSpinner: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [transitionOut, setTransitionOut] = useState(false);
  const [displayText, setDisplayText] = useState('YASH BHATIYA');
  const [revealedIndices, setRevealedIndices] = useState(new Set<number>());
  const [isScrambling, setIsScrambling] = useState(true);

  const originalText = 'YASH BHATIYA';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*';
  const speed = 50;
  const revealDirection = 'center';

  useEffect(() => {
    let interval: NodeJS.Timeout;
    const availableChars = characters.split('');

    const getNextIndex = (revealedSet: Set<number>) => {
      const textLength = originalText.length;
      if (revealDirection === 'center') {
        const middle = Math.floor(textLength / 2);
        const offset = Math.floor(revealedSet.size / 2);
        const nextIndex = revealedSet.size % 2 === 0 ? middle + offset : middle - offset - 1;
        if (nextIndex >= 0 && nextIndex < textLength && !revealedSet.has(nextIndex)) {
          return nextIndex;
        }
        for (let i = 0; i < textLength; i++) {
          if (!revealedSet.has(i)) return i;
        }
        return 0;
      }
      return revealedSet.size;
    };

    const shuffleText = (currentRevealed: Set<number>) => {
      return originalText
        .split('')
        .map((char, i) => {
          if (char === ' ') return ' ';
          if (currentRevealed.has(i)) return originalText[i];
          return availableChars[Math.floor(Math.random() * availableChars.length)];
        })
        .join('');
    };

    if (isScrambling) {
      interval = setInterval(() => {
        setRevealedIndices((prevRevealed) => {
          if (prevRevealed.size < originalText.length) {
            const nextIndex = getNextIndex(prevRevealed);
            const newRevealed = new Set(prevRevealed);
            newRevealed.add(nextIndex);
            setDisplayText(shuffleText(newRevealed));
            return newRevealed;
          } else {
            clearInterval(interval);
            setIsScrambling(false);
            setDisplayText(originalText);
            return prevRevealed;
          }
        });
      }, speed);
    }

    const scrambleTimer = setTimeout(() => {
      setIsScrambling(false);
      setDisplayText(originalText);
      setRevealedIndices(new Set(originalText.split('').map((_, i) => i)));
    }, 1500);

    const transitionTimer = setTimeout(() => {
      setTransitionOut(true);
    }, 2000);

    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => {
      clearInterval(interval);
      clearTimeout(scrambleTimer);
      clearTimeout(transitionTimer);
      clearTimeout(loadingTimer);
    };
  }, [isScrambling]);

  if (!isLoading) return null;

  return (
    <div
      className={cn(
        'fixed inset-0 flex items-center justify-center z-50 bg-background transition-opacity duration-500',
        transitionOut ? 'loading-screen-exit' : 'loading-screen',
        isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none',
      )}
    >
      <div className="relative">
        <div className="text-4xl md:text-6xl font-bold text-center">
          <span aria-hidden="true">
            {displayText.split('').map((char, index) => (
              <span
                key={`${char}-${index}`}
                className={cn(
                  'transition-colors duration-300',
                  revealedIndices.has(index) ? 'text-gray-400' : 'text-white'
                )}
              >
                {char}
              </span>
            ))}
          </span>
          <span className="sr-only">{originalText}</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;