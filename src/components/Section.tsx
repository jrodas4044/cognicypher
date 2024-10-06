import React from "react";

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <section className="mb-16">
      <h2 className="mb-6 font-semibold text-3xl text-primary">{title}</h2>
      {children}
    </section>
  );
};

export default Section;
