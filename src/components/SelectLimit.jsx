import React from 'react';

export default function SelectLimit({ onLimitChange }) {
  return (
    <div>
      <select
        onChange={(e) => onLimitChange(Number(e.target.value))}
        className='p-3 px-10  border-2'
      >
        <option value="10">10</option>
        <option value="30">30</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
    </div>
  );
}
