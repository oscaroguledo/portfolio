import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ArrowUpRight, Globe } from 'lucide-react';
export function Contact() {
  const links = [
  {
    name: 'Email',
    href: 'mailto:oscarchiagoziem@gmail.com',
    icon: <Mail size={20} />,
    value: 'oscarchiagoziem@gmail.com'
  },
  {
    name: 'GitHub',
    href: 'https://github.com/oscaroguledo',
    icon: <Github size={20} />,
    value: 'oscaroguledo'
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/oscar-oguledo-341bb2206',
    icon: <Linkedin size={20} />,
    value: 'Oscar Oguledo'
  },
  {
    name: 'Portfolio',
    href: 'https://portfolio.oscarchiagoziem.workers.dev',
    icon: <Globe size={20} />,
    value: 'portfolio.oscarchiagoziem.workers.dev'
  }];

  return (
    <section
      id="contact"
      className="pt-24 pb-12 md:pt-32 md:pb-12 border-t border-muted bg-surface/30">
      
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true,
            margin: '-100px'
          }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1]
          }}
          className="mb-24">
          
          <div className="flex items-center gap-4 mb-12">
            <span className="font-mono text-accent text-sm">04.</span>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
              Get In Touch
            </h2>
            <div className="h-[1px] flex-grow bg-muted ml-4 max-w-xs"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-4xl md:text-6xl font-medium tracking-tight mb-6 text-balance">
                Let's build something together.
              </h3>
              <p className="text-muted-text text-lg max-w-md">
                Feel free to reach out to me through any of these platforms. I'm
                always open to discussing new projects, creative ideas, or
                opportunities to be part of your visions.
              </p>
            </div>

            <div className="flex flex-col gap-6 justify-center">
              {links.map((link, idx) =>
              <a
                key={idx}
                href={link.href}
                target={link.name !== 'Email' ? '_blank' : undefined}
                rel={
                link.name !== 'Email' ? 'noopener noreferrer' : undefined
                }
                className="group flex items-center justify-between p-6 border border-muted rounded-xl bg-background hover:border-accent/50 transition-colors duration-300">
                
                  <div className="flex items-center gap-4">
                    <div className="text-muted-text group-hover:text-accent transition-colors duration-300">
                      {link.icon}
                    </div>
                    <div>
                      <div className="font-mono text-sm text-muted-text mb-1">
                        {link.name}
                      </div>
                      <div className="text-text font-medium group-hover:text-accent transition-colors duration-300">
                        {link.value}
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight
                  size={20}
                  className="text-muted-text opacity-0 -translate-x-4 translate-y-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                
                </a>
              )}
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-muted/50 font-mono text-sm text-muted-text">
          <p>
            © {new Date().getFullYear()} Oscar Oguledo. All rights reserved.
          </p>
          <p className="mt-2 md:mt-0">
            Designed & Built with <span className="text-accent">React</span> &{' '}
            <span className="text-accent">Tailwind</span>
          </p>
        </div>
      </div>
    </section>);

}