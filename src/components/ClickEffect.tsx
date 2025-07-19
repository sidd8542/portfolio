import { useEffect } from 'react';

export const ClickEffect = () => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      // Create ripple effect at click position
      const ripple = document.createElement('div');
      ripple.style.position = 'fixed';
      ripple.style.left = e.clientX - 10 + 'px';
      ripple.style.top = e.clientY - 10 + 'px';
      ripple.style.width = '20px';
      ripple.style.height = '20px';
      ripple.style.borderRadius = '50%';
      ripple.style.background = 'hsl(var(--primary) / 0.5)';
      ripple.style.pointerEvents = 'none';
      ripple.style.transform = 'scale(0)';
      ripple.style.animation = 'clickRipple 0.6s ease-out';
      ripple.style.zIndex = '9999';
      
      document.body.appendChild(ripple);
      
      setTimeout(() => {
        document.body.removeChild(ripple);
      }, 600);
    };

    // Add click effect styles
    const style = document.createElement('style');
    style.textContent = `
      @keyframes clickRipple {
        to {
          transform: scale(4);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);

    document.addEventListener('click', handleClick);
    
    return () => {
      document.removeEventListener('click', handleClick);
      document.head.removeChild(style);
    };
  }, []);

  return null;
};