import React from 'react';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';
export function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
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
            className="lg:col-span-5">
            
            <div className="flex items-center gap-4 mb-8">
              <span className="font-mono text-accent text-sm">01.</span>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
                About Me
              </h2>
              <div className="h-[1px] flex-grow bg-muted ml-4"></div>
            </div>

            <div className="space-y-6 text-muted-text text-lg leading-relaxed">
              <p>
                I'm a full-stack developer who works across web applications,
                event-driven backend systems, and applied machine learning. I
                build with FastAPI, Spring Boot, and React/TypeScript, and I care
                most about software that stays correct under load and remains
                maintainable long after it ships.
              </p>
              <p>
                A lot of my recent work has been on distributed backends:
                services connected by Kafka event pipelines, PostgreSQL and Redis
                for durable and fast-path storage, atomic reservation logic for
                high-concurrency workloads, and full observability with
                Prometheus, Grafana, and OpenTelemetry. Alongside that I've
                spent time closer to the metal, from x86-64 assembly and C to
                public-key cryptography and networking tools.
              </p>
              <p>
                More recently I've been focused on data science and machine
                learning, building tree-based models in scikit-learn and R /
                tidymodels with proper cross-validation, leakage-safe
                preprocessing, and honest evaluation. Whether it's a seamless
                interface, a robust data model, or a model pipeline, I approach
                each problem with curiosity and a commitment to quality.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 30
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true,
              margin: '-100px'
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="lg:col-span-7 relative">
            
            {/* Decorative Code Block */}
            <div className="bg-surface border border-muted rounded-lg overflow-hidden shadow-2xl">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-muted bg-background/50">
                <div className="w-3 h-3 rounded-full bg-muted-text/30"></div>
                <div className="w-3 h-3 rounded-full bg-muted-text/30"></div>
                <div className="w-3 h-3 rounded-full bg-muted-text/30"></div>
                <div className="ml-4 flex items-center gap-2 text-muted-text font-mono text-xs">
                  <Terminal size={14} />
                  <span>developer.ts</span>
                </div>
              </div>
              <div className="p-6 font-mono text-sm md:text-base overflow-x-auto">
                <pre className="text-muted-text">
                  <code>
                    <span className="text-accent">const</span>{' '}
                    <span className="text-text">developer</span> = {'{'}
                    {'\n'} <span className="text-accent">name</span>:{' '}
                    <span className="text-green-400/80">'Oscar Oguledo'</span>,
                    {'\n'} <span className="text-accent">role</span>:{' '}
                    <span className="text-green-400/80">
                      'Full Stack Developer'
                    </span>
                    ,{'\n'} <span className="text-accent">passions</span>: [
                    {'\n'}{' '}
                    <span className="text-green-400/80">
                      'Building innovative apps'
                    </span>
                    ,{'\n'}{' '}
                    <span className="text-green-400/80">
                      'Continuous learning'
                    </span>
                    ,{'\n'}{' '}
                    <span className="text-green-400/80">'Collaboration'</span>
                    {'\n'} ],
                    {'\n'} <span className="text-accent">solveProblem</span>: (
                    <span className="text-text">challenge</span>){' '}
                    <span className="text-accent">=&gt;</span> {'{'}
                    {'\n'} <span className="text-accent">return</span>{' '}
                    <span className="text-text">challenge</span>.
                    <span className="text-blue-400/80">analyze</span>()
                    {'\n'} .<span className="text-blue-400/80">architect</span>
                    ()
                    {'\n'} .<span className="text-blue-400/80">implement</span>
                    ();
                    {'\n'} {'}'}
                    {'\n'}
                    {'}'};
                  </code>
                </pre>
              </div>
            </div>

            {/* Decorative accents */}
            <div className="absolute -z-10 -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-accent/20"></div>
            <div className="absolute -z-10 -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-accent/20"></div>
          </motion.div>
        </div>
      </div>
    </section>);

}