import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [
  {
    name: 'About',
    href: '#about'
  },
  {
    name: 'Technologies',
    href: '#technologies'
  },
  {
    name: 'Projects',
    href: '#projects'
  },
  {
    name: 'Contact',
    href: '#contact'
  }];

  return (
    <motion.nav
      initial={{
        y: -100,
        opacity: 0
      }}
      animate={{
        y: 0,
        opacity: 1
      }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-md border-b border-muted py-4' : 'bg-transparent py-6'}`}>
      
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a
          href="#"
          className="font-mono text-accent font-medium text-sm tracking-tighter hover:opacity-80 transition-opacity">
          
          OO.
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
          <a
            key={link.name}
            href={link.href}
            className="text-sm font-mono text-muted-text hover:text-accent transition-colors duration-300">
            
              {link.name}
            </a>
          )}
        </div>
        {/* Mobile menu button could go here, keeping it simple for now */}
        <a
          href="#contact"
          className="md:hidden text-sm font-mono text-accent border border-accent/30 px-3 py-1.5 rounded hover:bg-accent/10 transition-colors">
          
          Say Hi
        </a>
      </div>
    </motion.nav>);

}