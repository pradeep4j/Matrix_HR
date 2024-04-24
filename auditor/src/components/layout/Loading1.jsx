import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

function Loading() {
  return (
    <div style={{ width: '100px', margin: 'auto', display: 'block' }}>
      <ClipLoader color="#52bfd9" size={40}/>
    </div>
  );
};
export default Loading;