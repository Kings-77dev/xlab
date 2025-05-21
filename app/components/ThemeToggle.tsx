// // components/ThemeToggle.tsx
// 'use client';
// import { useState, useEffect } from 'react';

// export default function ThemeToggle() {
//   const [isLight, setIsLight] = useState(false);

//   useEffect(() => {
//     // Start dark (no .light), unless saved as light:
//     const saved = localStorage.getItem('theme') === 'light';
//     setIsLight(saved);
//     document.documentElement.classList.toggle('light', saved);
//   }, []);

//   const toggle = () => {
//     const next = !isLight;
//     setIsLight(next);
//     document.documentElement.classList.toggle('light', next);
//     localStorage.setItem('theme', next ? 'light' : 'dark');
//   };

//   return (
//     <button onClick={toggle} className="px-3 py-1 rounded bg-surface text-foreground">
//       {isLight ? 'Dark Mode' : 'Light Mode'}
//     </button>
//   );
// }