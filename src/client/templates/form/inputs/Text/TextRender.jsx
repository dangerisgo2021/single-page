import * as React from 'react';

export const TextRender = ({ value, handleChange, placeholder, type = 'text' }) => (
  <input
    type={type}
    value={value}
    onChange={
      e => {
        e.preventDefault();
        handleChange(e.target.value);
      }
    }
    placeholder={placeholder}
  />
);
