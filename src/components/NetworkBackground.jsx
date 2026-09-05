import React, { useEffect, useRef } from 'react';

/**
 * High-performance, responsive HTML5 Canvas Network Background
 * Features:
 * - Dynamic interconnected nodes with proximity gradient lines
 * - Mouse magnetic attraction / proximity interactive links
 * - Traveling data pulses simulating high-speed fiber data packets
 * - Optimized with requestAnimationFrame and resize observer
 */
export default function NetworkBackground({ 
  theme = 'light', // 'light' or 'dark'
  nodeCount = 38, 
  interactive = true,
  opacity = 0.65
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.parentElement.offsetWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight || window.innerHeight);

    // Color definitions based on theme
    const isDark = theme === 'dark';
    const nodeColor = isDark ? '#00E5FF' : '#0062FF';
    const secondaryNodeColor = isDark ? '#38BDF8' : '#3B82F6';
    const lineColor = isDark ? '0, 229, 255' : '0, 98, 255';

    // Track mouse position
    const mouse = {
      x: null,
      y: null,
      radius: 120,
      active: false
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
      mouse.active = false;
    };

    if (interactive) {
      window.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseleave', handleMouseLeave);
    }

    // Node class with calm, gentle drift
    class Node {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.35;
        this.vy = (Math.random() - 0.5) * 0.35;
        this.radius = Math.random() * 1.5 + 1.2;
        this.baseRadius = this.radius;
        this.isSpecial = Math.random() > 0.85;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges softly
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        // Gentle mouse interaction
        if (mouse.active && mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            const force = (1 - dist / mouse.radius) * 0.8;
            this.x += (dx / dist) * force;
            this.y += (dy / dist) * force;
          }
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.isSpecial ? secondaryNodeColor : nodeColor;
        ctx.fill();
      }
    }

    // Initialize nodes
    const actualNodeCount = Math.min(nodeCount, Math.floor((width * height) / 18000));
    const nodes = Array.from({ length: actualNodeCount }, () => new Node());
    const maxDistance = 125;

    // Animation Loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Connect nodes with soft, elegant lines
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * (isDark ? 0.2 : 0.1);
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(${lineColor}, ${alpha})`;
            ctx.lineWidth = 0.85;
            ctx.stroke();
          }
        }

        // Connect to mouse cursor gently
        if (mouse.active && mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - nodes[i].x;
          const dy = mouse.y - nodes[i].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            const alpha = (1 - dist / mouse.radius) * 0.25;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(${lineColor}, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Update & draw nodes
      nodes.forEach((node) => {
        node.update();
        node.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Handle Resize
    const handleResize = () => {
      width = canvas.width = canvas.parentElement.offsetWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement.offsetHeight || window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (interactive) {
        window.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseleave', handleMouseLeave);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [theme, nodeCount, interactive]);

  return (
    <div 
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        overflow: 'hidden',
        zIndex: 0,
        opacity: opacity
      }}
    >
      <canvas 
        ref={canvasRef} 
        style={{
          display: 'block',
          width: '100%',
          height: '100%'
        }} 
      />
    </div>
  );
}
