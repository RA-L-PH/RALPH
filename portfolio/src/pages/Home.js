import React from 'react';
import Card from '../components/Card';
import ProjectShowcase from '../components/ProjectShowcase';

const Home = () => (
  <main className="p-4">
    <section className="text-center my-8">
      <h1 className="text-4xl font-bold">Hello, I'm Firebase Alchemist</h1>
      <p className="text-xl text-gray-600">Frontend Mad Scientist & Full-Stack-Free Rebel</p>
    </section>
    <div className="text-center py-10">
    <h2 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h2>
    <p className="text-lg">
      I'm a Frontend Mad Scientist and Full-Stack-Free Rebel. Explore my work and skills!
    </p>
  </div>
    <section className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <Card title="About Me" content="Learn more about my journey as a developer." />
      <Card title="Skills" content="Discover the tools and technologies I use." />
      <Card title="Projects" content="Check out some of my featured work." />
    </section>
    <ProjectShowcase />
  </main>
);

export default Home;
