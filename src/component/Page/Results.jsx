import React from 'react';
import { Link } from 'react-router-dom';

const Results = () => {
  // Mock results for demonstration
  const results = [
    { id: 1, flight: 'Flight A', price: '$100' },
    { id: 2, flight: 'Flight B', price: '$200' },
  ];

  return (
    <div>
      <h2>Search Results</h2>
      <ul>
        {results.map((result) => (
          <li key={result.id}>
            {result.flight} - {result.price}
            <Link to={`/booking/${result.id}`}>Book</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Results;
