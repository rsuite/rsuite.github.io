import React from 'react';

export const DirectionContext = React.createContext({
  direction: localStorage.getItem('direction') || 'ltr'
});
