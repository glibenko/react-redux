import React from 'react';
import PlainRedux from './PlainRedux';
import ThunkRedux  from './ThunkRedux';

export default function App() {
  const container = {
    display: 'flex',
    justifyContent: 'center',
  };
  const containerBlock = {
    height: '400px',
    width: '210px',
    textAlign: 'center',
  };
  const name = {
    fontSize: '18px',
    fontWeigh: 'bold',
  };
  const btn = {
    padding: '20px',
    color: 'blue',
    cursor: 'pointer',
  };


  return (
    <div style={container}>
      <PlainRedux
        containerBlock={containerBlock}
        name={name}
        btn={btn}
      />
      <ThunkRedux
        containerBlock={containerBlock}
        name={name}
        btn={btn}
      />
    </div>
  );
}
