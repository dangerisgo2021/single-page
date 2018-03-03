import React from 'react';

const countMap = {};

export const renderCounter = (WrappedComponent) => (props) => {

  if (countMap[WrappedComponent.name]) {
    countMap[WrappedComponent.name]++;
  } else {
    countMap[WrappedComponent.name] = 1;
  }

  console.log('countMap', countMap);

  return (
    <WrappedComponent { ...props } />
  );

};
