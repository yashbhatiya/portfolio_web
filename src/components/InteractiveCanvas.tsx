
import { useCallback, useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  dx: number;
  dy: number;
  radius: number;
  color: string;
}

const InteractiveCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, radius: 100 });
  const animationFrameRef = useRef<number>(0);

  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Initialize particles
    const particles: Particle[] = [];
    const particleCount = Math.min(window.innerWidth * 0.1, 100); // Responsive particle count

    const colors = [
      'rgba(255, 0, 0, 0.6)',   // Red
      'rgba(0, 255, 0, 0.6)',   // Green
      'rgba(0, 0, 255, 0.6)',   // Blue
      'rgba(255, 255, 0, 0.6)', // Yellow
    ];

    for (let i = 0; i < particleCount; i++) {
      const radius = Math.random() * 2 + 1;
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const dx = (Math.random() - 0.5) * 0.5;
      const dy = (Math.random() - 0.5) * 0.5;
      const color = colors[Math.floor(Math.random() * colors.length)]; // Select random color from array

      particles.push({ x, y, dx, dy, radius, color });
    }

    particlesRef.current = particles;
  }, []);

  const animateCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particlesRef.current.forEach((particle) => {
      // Draw particle
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      ctx.fillStyle = particle.color;
      ctx.fill();

      // Update position
      particle.x += particle.dx;
      particle.y += particle.dy;

      // Boundary check
      if (particle.x > canvas.width || particle.x < 0) {
        particle.dx = -particle.dx;
      }

      if (particle.y > canvas.height || particle.y < 0) {
        particle.dy = -particle.dy;
      }

      // Mouse interaction
      const dx = particle.x - mouseRef.current.x;
      const dy = particle.y - mouseRef.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < mouseRef.current.radius) {
        const angle = Math.atan2(dy, dx);
        const pushFactor = (mouseRef.current.radius - distance) / mouseRef.current.radius;

        particle.x += Math.cos(angle) * pushFactor;
        particle.y += Math.sin(angle) * pushFactor;
      }

      // Connect nearby particles
      particlesRef.current.forEach((otherParticle) => {
        const dx = particle.x - otherParticle.x;
        const dy = particle.y - otherParticle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(33, 33, 33, ${0.1 * (1 - distance / 100)})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(otherParticle.x, otherParticle.y);
          ctx.stroke();
        }
      });
    });

    animationFrameRef.current = requestAnimationFrame(animateCanvas);
  }, []);

  useEffect(() => {
    initCanvas();
    animateCanvas();

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY,
        radius: 100
      };
    };

    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
      initCanvas();
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameRef.current);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, [animateCanvas, initCanvas]);

  return <canvas ref={canvasRef} className="canvas-container"></canvas>;
};

export default InteractiveCanvas;
