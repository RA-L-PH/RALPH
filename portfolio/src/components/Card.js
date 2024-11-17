import React from 'react';

const Card = ({ title, content }) => (
  <div className="p-6 bg-light dark:bg-dark shadow-neomorphic rounded-xl">
    <h2 className="text-xl font-bold">{title}</h2>
    <p>{content}</p>
  </div>
);

export default Card;
