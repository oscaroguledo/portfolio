import React, { Children } from 'react';
import { motion } from 'framer-motion';
const techCategories = [
{
  title: 'Languages',
  skills: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C#', 'C', 'SQL', 'x86-64 Assembly']
},
{
  title: 'Frontend',
  skills: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'React Router', 'Recharts']
},
{
  title: 'Backend',
  skills: ['FastAPI', 'Spring Boot', 'Node.js', 'Express.js', 'Django']
},
{
  title: 'Databases & Caching',
  skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'SQLite']
},
{
  title: 'Data & ORM',
  skills: ['SQLAlchemy', 'Alembic', 'Hibernate / JPA', 'Flyway', 'Mongoose']
},
{
  title: 'Messaging & Streaming',
  skills: ['Apache Kafka', 'Celery', 'Redis Streams']
},
{
  title: 'DevOps',
  skills: ['Docker', 'Docker Compose', 'GitHub Actions', 'Gradle', 'Git', 'CI/CD']
},
{
  title: 'Observability',
  skills: ['Prometheus', 'Grafana', 'OpenTelemetry', 'Jaeger']
},
{
  title: 'Testing',
  skills: ['pytest', 'Vitest', 'Playwright', 'JUnit 5', 'Testcontainers']
},
{
  title: 'Cloud Services',
  skills: ['AWS', 'Heroku', 'DigitalOcean', 'PythonAnywhere']
},
{
  title: 'Data & ML',
  skills: ['pandas', 'NumPy']
},
{
  title: 'Desktop & GUI',
  skills: ['PyQt6', 'Qt', 'WinForms']
},
{
  title: 'Other Tools',
  skills: ['Figma', 'Jupyter Notebook', 'OpenCV', 'TensorFlow']
}];

export function Technologies() {
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };
  return (
    <section
      id="technologies"
      className="py-24 md:py-32 bg-surface/30 border-y border-muted">
      
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
          className="mb-16">
          
          <div className="flex items-center gap-4 mb-8">
            <span className="font-mono text-accent text-sm">02.</span>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
              Technologies
            </h2>
            <div className="h-[1px] flex-grow bg-muted ml-4 max-w-xs"></div>
          </div>
          <p className="text-muted-text text-lg max-w-2xl">
            Here's a comprehensive list of the technologies, frameworks, and
            tools I have experience working with to bring ideas to life.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: '-100px'
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          
          {techCategories.map((category, idx) =>
          <motion.div key={idx} variants={itemVariants} className="space-y-6">
              <h3 className="font-mono text-text text-lg border-b border-muted pb-2 inline-block">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIdx) =>
              <div
                key={skillIdx}
                className="px-4 py-2 bg-background border border-muted rounded-full font-mono text-sm text-muted-text hover:text-accent hover:border-accent/50 transition-colors duration-300 cursor-default">
                
                    {skill}
                  </div>
              )}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>);

}