// "use client";

// import { useEffect, useRef } from "react";

// export default function CanvasBackground({ className = "" }) {
//   const canvasRef = useRef(null);
//   const mouse = useRef({ x: -1000, y: -1000 });
//   const animationOffset = useRef(0);
//   const direction = useRef(1);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     let width = (canvas.width = window.innerWidth);
//     let height = (canvas.height = window.innerHeight);
//     const center = { x: width / 2, y: height / 2 };

//     const spiralPoints = 40;
//     const baseRadius = 16;
//     const growth = 1.12;
//     const overlap = 8;
//     const circles = [];

//     let angle = 0;
//     let lastX = center.x;
//     let lastY = center.y;
//     let lastRadius = baseRadius;

//     for (let i = 0; i < spiralPoints; i++) {
//       const radius = baseRadius * Math.pow(growth, i);
//       const distance = lastRadius + radius - overlap;
//       angle += 0.4;
//       const x = lastX + Math.cos(angle) * distance;
//       const y = lastY + Math.sin(angle) * distance;

//       circles.push({ x, y, r: radius });

//       lastX = x;
//       lastY = y;
//       lastRadius = radius;
//     }

//     function draw() {
//       ctx.clearRect(0, 0, width, height);

//       ctx.save();
//       ctx.strokeStyle = "rgba(255,255,255,0.1)";
//       ctx.fillStyle = "rgba(255,255,255,0.3)";
//       ctx.lineWidth = 1;

//       for (let i = 0; i < circles.length; i++) {
//         const c = circles[i];

//         // Draw circle
//         ctx.beginPath();
//         ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
//         ctx.stroke();

//         // Line from center to circle center
//         ctx.beginPath();
//         ctx.moveTo(center.x, center.y);
//         ctx.lineTo(c.x, c.y);
//         ctx.stroke();

//         // Dot animation from center to edge of circle only within the circle
//         const dx = c.x - center.x;
//         const dy = c.y - center.y;
//         const len = Math.sqrt(dx * dx + dy * dy);
//         const normX = dx / len;
//         const normY = dy / len;

//         // Animate dot only along radius within the circle
//         const offset = (Math.sin(animationOffset.current + i * 0.5) * 0.5 + 0.5) * c.r;
//         const dotX = c.x - normX * offset;
//         const dotY = c.y - normY * offset;

//         ctx.beginPath();
//         ctx.arc(dotX, dotY, 2.5, 0, Math.PI * 2);
//         ctx.fill();
//       }

//       ctx.restore();

//       animationOffset.current += 0.02 * direction.current;
//       requestAnimationFrame(draw);
//     }

//     function handleMouseMove(e) {
//       mouse.current.x = e.clientX;
//       mouse.current.y = e.clientY;
//     }

//     function handleResize() {
//       width = canvas.width = window.innerWidth;
//       height = canvas.height = window.innerHeight;
//     }

//     window.addEventListener("mousemove", handleMouseMove);
//     window.addEventListener("resize", handleResize);

//     draw();

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return <canvas ref={canvasRef} className={`fixed inset-0 w-full h-full ${className}`} />;
// }




// "use client";

// import { useEffect, useRef } from "react";

// export default function CanvasBackground({ className = "" }) {
//   const canvasRef = useRef(null);
//   const mouse = useRef({ x: -1000, y: -1000 });
//   const animationOffset = useRef(0);
//   const direction = useRef(1);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     let width = (canvas.width = window.innerWidth);
//     let height = (canvas.height = window.innerHeight);
//     const center = { x: width / 2, y: height / 2 };

//     const spiralPoints = 40;
//     const baseRadius = 16;
//     const growth = 1.12;
//     const overlap = 8;
//     const circles = [];

//     let angle = 0;
//     let lastX = center.x;
//     let lastY = center.y;
//     let lastRadius = baseRadius;

//     for (let i = 0; i < spiralPoints; i++) {
//       const radius = baseRadius * Math.pow(growth, i);
//       const distance = lastRadius + radius - overlap;
//       angle += 0.4;
//       const x = lastX + Math.cos(angle) * distance;
//       const y = lastY + Math.sin(angle) * distance;

//       circles.push({ x, y, r: radius });

//       lastX = x;
//       lastY = y;
//       lastRadius = radius;
//     }

//     function draw() {
//       ctx.clearRect(0, 0, width, height);

//       ctx.save();
//       ctx.strokeStyle = "rgba(255,255,255,0.1)";
//       ctx.fillStyle = "rgba(255,255,255,0.3)";
//       ctx.lineWidth = 1;

//       for (let i = 0; i < circles.length; i++) {
//         const c = circles[i];

//         // Draw circle
//         ctx.beginPath();
//         ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
//         ctx.stroke();

//         // Line from center to circle center
//         ctx.beginPath();
//         ctx.moveTo(center.x, center.y);
//         ctx.lineTo(c.x, c.y);
//         ctx.stroke();

//         // Dot animation from center to edge of circle only within the circle
//         const dx = c.x - center.x;
//         const dy = c.y - center.y;
//         const len = Math.sqrt(dx * dx + dy * dy);
//         const normX = dx / len;
//         const normY = dy / len;

//         // Animate dot only along radius within the circle
//         const offset = (Math.sin(animationOffset.current + i * 0.5) * 0.5 + 0.5) * c.r;
//         const dotX = c.x - normX * offset;
//         const dotY = c.y - normY * offset;

//         ctx.beginPath();
//         ctx.arc(dotX, dotY, 2.5, 0, Math.PI * 2);
//         ctx.fill();
//       }

//       ctx.restore();

//       animationOffset.current += 0.02 * direction.current;
//       requestAnimationFrame(draw);
//     }

//     function handleMouseMove(e) {
//       mouse.current.x = e.clientX;
//       mouse.current.y = e.clientY;
//     }

//     function handleResize() {
//       width = canvas.width = window.innerWidth;
//       height = canvas.height = window.innerHeight;
//     }

//     window.addEventListener("mousemove", handleMouseMove);
//     window.addEventListener("resize", handleResize);

//     draw();

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return <canvas ref={canvasRef} className={` inset-0 w-full h-full ${className}`} />;
// }





// "use client";

// import { useEffect, useRef } from "react";

// export default function CanvasBackground({ className = "" }) {
//   const canvasRef = useRef(null);
//   const mouse = useRef({ x: -1000, y: -1000 });
//   const animationOffset = useRef(0);
//   const direction = useRef(1);
//   const uiElementsRef = useRef([]);

//   const handleMouseMove = (e) => {
//     const rect = canvasRef.current.getBoundingClientRect();
//     mouse.current.x = e.clientX - rect.left;
//     mouse.current.y = e.clientY - rect.top;
//   };

//   const handleResize = () => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
//   };

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     let width = (canvas.width = window.innerWidth);
//     let height = (canvas.height = window.innerHeight);
//     const center = { x: width / 2, y: height / 2 };

//     const spiralPoints = 40;
//     const baseRadius = 16;
//     const growth = 1.12;
//     const overlap = 8;
//     const circles = [];

//     let angle = 0;
//     let lastX = center.x;
//     let lastY = center.y;
//     let lastRadius = baseRadius;

//     uiElementsRef.current = [...Array(6)].map((_, i) => ({
//       id: i,
//       type: i % 3 === 0 ? "button" : i % 3 === 1 ? "slider" : "dropdown",
//       baseX: Math.random() * width,
//       baseY: Math.random() * height,
//       w: 120 + Math.random() * 40,
//       h: 30,
//       offset: Math.random() * 100,
//     }));

//     for (let i = 0; i < spiralPoints; i++) {
//       const radius = baseRadius * Math.pow(growth, i);
//       const distance = lastRadius + radius - overlap;
//       angle += 0.4;
//       const x = lastX + Math.cos(angle) * distance;
//       const y = lastY + Math.sin(angle) * distance;

//       circles.push({ x, y, r: radius });

//       lastX = x;
//       lastY = y;
//       lastRadius = radius;
//     }

//     function draw() {
//       ctx.clearRect(0, 0, width, height);

//       ctx.save();

//       const sway = Math.sin(animationOffset.current * 0.5) * 0.1;
//       ctx.translate(center.x, center.y);
//       ctx.rotate(sway);
//       ctx.translate(-center.x, -center.y);

//       ctx.fillStyle = "rgba(255,255,255,0.3)";
//       ctx.lineWidth = 1;

//       const neonColors = ["#39FF14", "#00FFFF", "#FF00FF", "#FFFF00", "#FF5F1F"];

//       for (let i = 0; i < circles.length; i++) {
//         const c = circles[i];

//         const mx = mouse.current.x;
//         const my = mouse.current.y;
//         const dx = c.x - center.x;
//         const dy = c.y - center.y;
//         const len = Math.sqrt(dx * dx + dy * dy);
//         const normX = dx / len;
//         const normY = dy / len;

//         const swayAmplitude = 10;
//         const swaySpeed = 0.5;
//         const swayOffset = Math.sin(animationOffset.current * swaySpeed + i * 0.3) * swayAmplitude;
//         const swayX = normY * swayOffset;
//         const swayY = -normX * swayOffset;

//         const cx = c.x + swayX;
//         const cy = c.y + swayY;

//         ctx.strokeStyle = "rgba(255,255,255,0.1)";
//         ctx.beginPath();
//         ctx.arc(cx, cy, c.r, 0, Math.PI * 2);
//         ctx.stroke();

//         const t = Math.max(0, Math.min(1, ((mx - center.x) * (cx - center.x) + (my - center.y) * (cy - center.y)) / (len * len)));
//         const px = center.x + t * (cx - center.x);
//         const py = center.y + t * (cy - center.y);
//         const dist = Math.hypot(mx - px, my - py);

//         const colorIndex = Math.floor((animationOffset.current + i) % neonColors.length);
//         ctx.strokeStyle = dist < 20 ? neonColors[colorIndex] : "rgba(255,255,255,0.1)";

//         ctx.beginPath();
//         ctx.moveTo(center.x, center.y);
//         ctx.lineTo(cx, cy);
//         ctx.stroke();

//         const offset = (Math.sin(animationOffset.current + i * 0.5) * 0.5 + 0.5) * c.r;
//         const dotX = cx - normX * offset;
//         const dotY = cy - normY * offset;

//         ctx.beginPath();
//         ctx.arc(dotX, dotY, 2.5, 0, Math.PI * 2);
//         ctx.fillStyle = "rgba(255,255,255,0.3)";
//         ctx.fill();
//       }

//       ctx.restore();

//       // UI Fragments
//       ctx.save();
//       for (let i = 0; i < uiElementsRef.current.length; i++) {
//         const el = uiElementsRef.current[i];
//         const sway = Math.sin(animationOffset.current * 0.0015 + el.offset) * 4;
//         const x = el.baseX + sway;
//         const y = el.baseY + sway;

//         const isHovered =
//           mouse.current.x > x &&
//           mouse.current.x < x + el.w &&
//           mouse.current.y > y &&
//           mouse.current.y < y + el.h;

//         ctx.fillStyle = isHovered ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.03)";
//         ctx.strokeStyle = isHovered ? "rgba(255, 255, 255, 0.2)" : "rgba(255, 255, 255, 0.1)";
//         ctx.lineWidth = 1;

//         ctx.beginPath();
//         ctx.roundRect(x, y, el.w, el.h, 6);
//         ctx.fill();
//         ctx.stroke();

//         ctx.font = "12px sans-serif";
//         ctx.fillStyle = "rgba(255,255,255,0.4)";
//         ctx.textAlign = "center";
//         ctx.textBaseline = "middle";
//         ctx.fillText(el.type.toUpperCase(), x + el.w / 2, y + el.h / 2);
//       }
//       ctx.restore();

//       animationOffset.current += 0.02 * direction.current;
//       requestAnimationFrame(draw);
//     }

//     window.addEventListener("mousemove", handleMouseMove);
//     window.addEventListener("resize", handleResize);
//     draw();

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       className={` inset-0 w-full h-full   ${className}`}
//     />
//   );
// }



"use client";

import { useEffect, useRef } from "react";

export default function CanvasBackground({ className = "" }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -1000, y: -1000 });
  const animationOffset = useRef(0);
  const direction = useRef(1);
  const uiElementsRef = useRef<
    ({ id: number; type: string; baseX: number; baseY: number; w: number; h: number; offset: number } | 
     { id: string; type: string; baseX: number; baseY: number; w: number; h: number; offset: number })[]
  >([]);

  const handleMouseMove = (e: MouseEvent) => {
    if (!canvasRef.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    mouse.current.x = e.clientX - rect.left;
    mouse.current.y = e.clientY - rect.top;
  };

  const handleResize = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = (canvas.width = window.innerWidth);
    const height = (canvas.height = window.innerHeight);
    const center = { x: width / 2, y: height / 2 };

    const spiralPoints = 40;
    const baseRadius = 16;
    const growth = 1.12;
    const overlap = 8;
    const circles: { x: number; y: number; r: number }[] = [];

    let angle = 0;
    let lastX = center.x;
    let lastY = center.y;
    let lastRadius = baseRadius;

    const usedPositions: { x: number; y: number }[] = [];
function getNonOverlappingPosition(w: number, h: number) {
  let tries = 0;
  let x: number, y: number, isOverlapping: boolean;
  do {
    x = Math.random() * width;
    y = Math.random() * height;
    isOverlapping = usedPositions.some(pos => Math.abs(pos.x - x) < w && Math.abs(pos.y - y) < h);
    tries++;
  } while (isOverlapping && tries < 100);
  usedPositions.push({ x, y });
  return { x, y };
}

uiElementsRef.current = [
  ...Array(6).fill(null).map((_, i) => {
    const { x, y } = getNonOverlappingPosition(100, 26);
    return {
      id: i,
      type: i % 3 === 0 ? "button" : i % 3 === 1 ? "slider" : "dropdown",
      baseX: x,
      baseY: y,
      w: 100,
      h: 26,
      offset: Math.random() * 100,
    };
  }),
  ...[
    { id: "wireframe", type: "wireframe", w: 160, h: 120 },
    { id: "dropdown-mock", type: "dropdown-mock", w: 100, h: 30 },
    { id: "checkbox", type: "checkbox", w: 20, h: 20 },
    { id: "radio", type: "radio", w: 20, h: 20 },
    { id: "tooltip", type: "tooltip", w: 80, h: 24 },
    { id: "toggle-1", type: "toggle", w: 60, h: 24 },
    { id: "toggle-2", type: "toggle", w: 60, h: 24 },
    { id: "toggle-3", type: "toggle", w: 60, h: 24 },
    { id: "progress", type: "progress", w: 100, h: 12 },
    { id: "search", type: "search", w: 120, h: 26 },
    { id: "nav-tab", type: "nav-tab", w: 90, h: 28 },
  ].map(item => {
    const { x, y } = getNonOverlappingPosition(item.w, item.h);
    return {
      ...item,
      baseX: x,
      baseY: y,
      offset: Math.random() * 100,
    };
  })
];

    for (let i = 0; i < spiralPoints; i++) {
      const radius = baseRadius * Math.pow(growth, i);
      const distance = lastRadius + radius - overlap;
      angle += 0.4;
      const x = lastX + Math.cos(angle) * distance;
      const y = lastY + Math.sin(angle) * distance;

      circles.push({ x, y, r: radius });

      lastX = x;
      lastY = y;
      lastRadius = radius;
    }

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      ctx.save();

      const sway = Math.sin(animationOffset.current * 0.5) * 0.1;
      ctx.translate(center.x, center.y);
      ctx.rotate(sway);
      ctx.translate(-center.x, -center.y);

      ctx.fillStyle = "rgba(255,255,255,0.3)";
      ctx.lineWidth = 1;

      const neonColors = ["#39FF14", "#00FFFF", "#FF00FF", "#FFFF00", "#FF5F1F"];

      for (let i = 0; i < circles.length; i++) {
        const c = circles[i];

        const mx = mouse.current.x;
        const my = mouse.current.y;
        const dx = c.x - center.x;
        const dy = c.y - center.y;
        const len = Math.sqrt(dx * dx + dy * dy);
        const normX = dx / len;
        const normY = dy / len;

        const swayAmplitude = 10;
        const swaySpeed = 0.5;
        const swayOffset = Math.sin(animationOffset.current * swaySpeed + i * 0.3) * swayAmplitude;
        const swayX = normY * swayOffset;
        const swayY = -normX * swayOffset;

        const cx = c.x + swayX;
        const cy = c.y + swayY;

        ctx.strokeStyle = "rgba(255, 255, 255, 0.57)";
        ctx.beginPath();
        ctx.arc(cx, cy, c.r, 0, Math.PI * 2);
        ctx.stroke();

        const t = Math.max(0, Math.min(1, ((mx - center.x) * (cx - center.x) + (my - center.y) * (cy - center.y)) / (len * len)));
        const px = center.x + t * (cx - center.x);
        const py = center.y + t * (cy - center.y);
        const dist = Math.hypot(mx - px, my - py);

        const colorIndex = Math.floor((animationOffset.current + i) % neonColors.length);
        ctx.strokeStyle = dist < 20 ? neonColors[colorIndex] : "rgba(255,255,255,0.1)";

        ctx.beginPath();
        ctx.moveTo(center.x, center.y);
        ctx.lineTo(cx, cy);
        ctx.stroke();

        const offset = (Math.sin(animationOffset.current + i * 0.5) * 0.5 + 0.5) * c.r;
        const dotX = cx - normX * offset;
        const dotY = cy - normY * offset;

        ctx.beginPath();
        ctx.arc(dotX, dotY, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.3)";
        ctx.fill();
      }

      ctx.restore();

      // UI Fragments
      ctx.save();
      for (let i = 0; i < uiElementsRef.current.length; i++) {
        const el = uiElementsRef.current[i];
        const sway = Math.sin(animationOffset.current * 0.0015 + el.offset) * 4;
        const x = el.baseX + sway;
        const y = el.baseY + sway;

        const isHovered =
          mouse.current.x > x &&
          mouse.current.x < x + el.w &&
          mouse.current.y > y &&
          mouse.current.y < y + el.h;

        ctx.fillStyle = isHovered ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.03)";
        ctx.strokeStyle = isHovered ? "rgba(255, 255, 255, 0.2)" : "rgba(255, 255, 255, 0.1)";
        ctx.lineWidth = 1;

        ctx.beginPath();
        ctx.roundRect(x, y, el.w, el.h, 6);
        ctx.fill();
        ctx.stroke();

        ctx.font = "12px sans-serif";
        ctx.fillStyle = "rgba(255,255,255,0.4)";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        if (el.type === "wireframe") {
          ctx.strokeStyle = "rgba(255,255,255,0.15)";
          ctx.strokeRect(x + 10, y + 10, el.w - 20, 20); // header
          ctx.strokeRect(x + 10, y + 40, el.w - 20, 20); // content line 1
          ctx.strokeRect(x + 10, y + 65, el.w - 20, 20); // content line 2
        } else if (el.type === "dropdown-mock") {
          ctx.strokeStyle = "rgba(255,255,255,0.15)";
          ctx.beginPath();
          ctx.moveTo(x + el.w - 14, y + el.h / 2 - 4);
          ctx.lineTo(x + el.w - 8, y + el.h / 2);
          ctx.lineTo(x + el.w - 14, y + el.h / 2 + 4);
          ctx.stroke();
          if (isHovered) {
            for (let j = 1; j <= 3; j++) {
              ctx.strokeRect(x, y + el.h * j, el.w, el.h);
            }
          }
        } else if (el.type === "checkbox") {
          ctx.strokeStyle = "rgba(255,255,255,0.15)";
          ctx.strokeRect(x + 2, y + 2, el.w - 4, el.h - 4);
        } else if (el.type === "radio") {
          ctx.beginPath();
          ctx.arc(x + el.w / 2, y + el.h / 2, el.w / 2 - 2, 0, Math.PI * 2);
          ctx.strokeStyle = "rgba(255,255,255,0.15)";
          ctx.stroke();
        } else if (el.type === "tooltip") {
          ctx.beginPath();
          ctx.fillStyle = "rgba(255,255,255,0.05)";
          ctx.fillRect(x, y, el.w, el.h);
          ctx.strokeStyle = "rgba(255,255,255,0.15)";
          ctx.strokeRect(x, y, el.w, el.h);
        } else if (el.type === "toggle") {
          ctx.fillStyle = "rgba(255,255,255,0.04)";
          ctx.fillRect(x, y, el.w, el.h);
          ctx.beginPath();
          const circleX = isHovered ? x + el.w - el.h / 2 : x + el.h / 2;
          ctx.arc(circleX, y + el.h / 2, el.h / 2 - 3, 0, Math.PI * 2);
          ctx.fillStyle = isHovered ? "rgba(0,255,150,0.8)" : "rgba(255,255,255,0.2)";
          ctx.fill();
        } else if (el.type === "progress") {
          ctx.fillStyle = "rgba(255,255,255,0.05)";
          ctx.fillRect(x, y, el.w, el.h);
          ctx.fillStyle = "rgba(255,255,255,0.2)";
          const progress = isHovered ? (Math.sin(animationOffset.current * 0.1 + el.offset) * 0.5 + 0.5) : 0.4;
          ctx.fillRect(x, y, el.w * progress, el.h);
        } else if (el.type === "search") {
          ctx.strokeRect(x, y, el.w, el.h);
          ctx.font = "10px sans-serif";
          ctx.fillStyle = "rgba(255,255,255,0.3)";
          ctx.fillText("Search...", x + 8, y + el.h / 1.7);
        } else if (el.type === "nav-tab") {
          ctx.fillStyle = "rgba(255,255,255,0.04)";
          ctx.fillRect(x, y, el.w, el.h);
          ctx.strokeStyle = "rgba(255,255,255,0.1)";
          ctx.strokeRect(x, y, el.w, el.h);
        } else if (el.type === "slider") {
          ctx.strokeStyle = "rgba(255,255,255,0.15)";
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(x + 10, y + el.h / 2);
          ctx.lineTo(x + el.w - 10, y + el.h / 2);
          ctx.stroke();

          const sliderPercent = isHovered ? (Math.sin(animationOffset.current * 0.05 + el.offset) * 0.5 + 0.5) : 0.5;
          const handleX = x + 10 + (el.w - 20) * sliderPercent;

          ctx.beginPath();
          ctx.arc(handleX, y + el.h / 2, 5, 0, Math.PI * 2);
          ctx.fillStyle = isHovered ? "rgba(0,255,200,0.8)" : "rgba(255,255,255,0.4)";
          ctx.fill();
        } else {
          ctx.fillText(el.type.toUpperCase(), x + el.w / 2, y + el.h / 2);
        }
      }
      ctx.restore();

      animationOffset.current += 0.02 * direction.current;
      requestAnimationFrame(draw);
    }

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);
    draw();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={` inset-0 w-full h-full  z-10 ${className}`}
    />
  );
}
