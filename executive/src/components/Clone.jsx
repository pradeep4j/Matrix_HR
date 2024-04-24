import React, { useState } from 'react';

const CloneElementButton = () => {
  const [elements, setElements] = useState([<div key={1}>Original Element</div>]);

  const handleCloneClick = () => {
    const newElements = [...elements, <div key={elements.length + 1}>Cloned Element</div>];
    setElements(newElements);
  };

  return (
    <div>
      <button onClick={handleCloneClick}>Clone Element</button>
      {elements}
    </div>
  );
};

export default CloneElementButton;
