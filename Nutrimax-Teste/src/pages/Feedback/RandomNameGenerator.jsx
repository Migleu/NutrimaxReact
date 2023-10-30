import React, { useState } from 'react';

const RandomNameGenerator = () => {
  const [randomName, setRandomName] = useState('');

  const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eva', 'Frank'];
  const surnames = ['Smith', 'Johnson', 'Brown', 'Davis', 'Wilson', 'Lee'];

  const generateRandomName = () => {
    const randomFirstName = names[Math.floor(Math.random() * names.length)];
    const randomLastName = surnames[Math.floor(Math.random() * surnames.length)];

    setRandomName(`${randomFirstName} ${randomLastName}`);
  };
};

export default RandomNameGenerator;
