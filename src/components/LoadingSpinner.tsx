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
  const speed = 50; // Scramble speed in ms
  const revealDirection = 'center'; // Mimics Example 3 from the demo

  useEffect(() => {
    // Start scrambling immediately
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

    // Stop scrambling after 1.5 seconds
    const scrambleTimer = setTimeout(() => {
      setIsScrambling(false);
      setDisplayText(originalText);
      setRevealedIndices(new Set(originalText.split('').map((_, i) => i))); // Reveal all
    }, 1500);

    // Start fade-out after 2 seconds (1.5s scrambling + 0.5s final text)
    const transitionTimer = setTimeout(() => {
      setTransitionOut(true);
    }, 1000);

    // Remove spinner after 2.5 seconds (2s + 0.5s fade-out)
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
          <span
            style={{ color: '#ffffff' }}
            className={isScrambling ? 'text-muted-foreground' : 'text-primary'}
            aria-hidden="true"
          >
            {displayText.split('').map((char, index) => (
              <span
                key={`${char}-${index}`}
                className={revealedIndices.has(index) ? 'text-primary' : 'text-muted-foreground'}
              >
                {char}
              </span>
            ))}
          </span>
          <span
            style={{
              position: 'absolute',
              width: '1px',
              height: '1px',
              padding: 0,
              margin: '-1px',
              overflow: 'hidden',
              clip: 'rect(0,0,0,0)',
              border: 0,
            }}
          >
            {originalText}
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;