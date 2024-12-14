import { useState, useEffect } from 'react';

export default function useNightMode() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme;
  });

  useEffect(() => {
    localStorage.setItem('theme', theme ? 'light' : 'dark');
    const root = document.getElementById('root');

    root.style.backgroundColor = theme ? '#f9f9f9' : '#1e1e1e';
    root.setAttribute('data-theme', theme ? 'light' : 'dark');
  }, [theme]);




  const toggleTheme = () => {
    setTheme((prevTheme) => !prevTheme);
  };

  return { theme, toggleTheme, setTheme };
}
