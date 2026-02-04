import React from 'react';

interface HProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
}

const H: React.FC<HProps> = ({ level, children, className }) => {
  const Tag = `h${level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  return <Tag className={className}>{children}</Tag>;
};

export default H;
