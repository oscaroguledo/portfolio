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
                I'm a software engineer and an M.Eng. Software Engineering
                Practice (Co-op) candidate at Carleton University in Ottawa. For
                roughly two and a half years I worked as a Backend Software
                Engineer at Dowell Research UK, building modular, scalable
                services with Python (FastAPI, Django, DRF) and delivering
                full-stack solutions with React and Node.js over RESTful APIs.
              </p>
              <p>
                My focus is production-grade backend systems: microservice
                architectures, PostgreSQL, MySQL, MongoDB, and Redis with caching
                and query tuning, Kafka and Redis Streams for event processing,
                and containerized deployments on AWS, Heroku, and DigitalOcean
                through Docker and CI/CD pipelines. I put a lot of weight on
                testing and verification — PyTest, load testing for concurrency
                correctness, and formal verification with SPIN — and on
                observability with Prometheus, Grafana, OpenTelemetry, and
                Jaeger.
              </p>
              <p>
                Building on an academic grounding in data analytics and software
                systems design, I've more recently been working on machine
                learning — tree-based models in scikit-learn and R / tidymodels
                with proper cross-validation, leakage-safe preprocessing, and
                honest evaluation. I work well in Agile teams, care about clear
                documentation and clean pull requests, and approach every problem
                with curiosity and a commitment to quality.
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
                      'Backend Software Engineer'
                    </span>
                    ,{'\n'} <span className="text-accent">passions</span>: [
                    {'\n'}{' '}
                    <span className="text-green-400/80">
                      'Reliable backend systems'
                    </span>
                    ,{'\n'}{' '}
                    <span className="text-green-400/80">
                      'Testing & verification'
                    </span>
                    ,{'\n'}{' '}
                    <span className="text-green-400/80">'Continuous learning'</span>
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