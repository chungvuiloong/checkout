import React from 'react';

interface HProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const H: React.FC<HProps> = ({ level, children, className, style }) => {
  const Tag = `h${level}` as const;

  return React.createElement(
    Tag,
    { className, style },
    children
  ) as React.ReactElement;
};

export default H;
