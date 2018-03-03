import * as React from 'react';

export const TextareaRender = ({ value, handleChange, placeholder, rows, cols, maxLength }) => (
  <textarea
    value={value}
    rows={rows}
    cols={cols}
    maxLength={maxLength}
    onChange={
      e => {
        e.preventDefault();
        handleChange(e.target.value);
      }
    }
    placeholder={placeholder}
  />
);
