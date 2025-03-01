import React from 'react';

interface ExampleComponentProps {
  label: string;
}

const ExampleComponent: React.FC<ExampleComponentProps> = ({ label }) => {
  return <button>{label}</button>;
};

export default ExampleComponent;