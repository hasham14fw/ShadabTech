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
  nodeCount = 65, 
  interactive = true,
  opacity = 0.85
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
    const secondaryNodeColor = isDark ? '#38BDF8' : '#00C2FF';
    const lineColor = isDark ? '0, 229, 255' : '0, 98, 255';
    const packetColor = '#00F0FF';

    // Track mouse position
    const mouse = {
      x: null,
      y: null,
      radius: 160,
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

    // Node class
    class Node {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.75;
        this.vy = (Math.random() - 0.5) * 0.75;
        this.radius = Math.random() * 2.5 + 1.5;
        this.baseRadius = this.radius;
        this.isSpecial = Math.random() > 0.8;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges with soft pad
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        // Mouse interaction
        if (mouse.active && mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            const force = (1 - dist / mouse.radius) * 1.5;
            this.x += (dx / dist) * force;
            this.y += (dy / dist) * force;
            this.radius = this.baseRadius + (1 - dist / mouse.radius) * 2;
          } else {
            this.radius = this.baseRadius;
          }
        } else {
          this.radius = this.baseRadius;
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.isSpecial ? secondaryNodeColor : nodeColor;
        ctx.shadowBlur = this.isSpecial ? 8 : 4;
        ctx.shadowColor = isDark ? '#00E5FF' : 'rgba(0, 98, 255, 0.4)';
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      }
    }

    // Traveling packet simulation
    class Packet {
      constructor(nodeA, nodeB) {
        this.nodeA = nodeA;
        this.nodeB = nodeB;
        this.progress = 0;
        this.speed = Math.random() * 0.015 + 0.008;
        this.completed = false;
      }

      update() {
        this.progress += this.speed;
        if (this.progress >= 1) {
          this.completed = true;
        }
      }

      draw() {
        const currentX = this.nodeA.x + (this.nodeB.x - this.nodeA.x) * this.progress;
        const currentY = this.nodeA.y + (this.nodeB.y - this.nodeA.y) * this.progress;

        ctx.beginPath();
        ctx.arc(currentX, currentY, 2.2, 0, Math.PI * 2);
        ctx.fillStyle = packetColor;
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#00F0FF';
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    // Initialize nodes
    const actualNodeCount = Math.min(nodeCount, Math.floor((width * height) / 14000));
    const nodes = Array.from({ length: actualNodeCount }, () => new Node());
    const packets = [];
    const maxDistance = 140;

    // Animation Loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Connect nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * (isDark ? 0.35 : 0.22);
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(${lineColor}, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();

            // Spawn data packets occasionally on strong connections
            if (Math.random() < 0.0007 && packets.length < 8) {
              packets.push(new Packet(nodes[i], nodes[j]));
            }
          }
        }

        // Connect to mouse cursor
        if (mouse.active && mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - nodes[i].x;
          const dy = mouse.y - nodes[i].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            const alpha = (1 - dist / mouse.radius) * 0.5;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = isDark ? `rgba(0, 229, 255, ${alpha})` : `rgba(0, 98, 255, ${alpha})`;
            ctx.lineWidth = 1.2;
            ctx.stroke();
          }
        }
      }

      // Update & draw packets
      for (let k = packets.length - 1; k >= 0; k--) {
        const p = packets[k];
        p.update();
        p.draw();
        if (p.completed) {
          packets.splice(k, 1);
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
