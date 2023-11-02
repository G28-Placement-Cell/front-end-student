import React, { useState } from 'react';

const ColumnLayout = () => {
  const [flexStyle, setFlexStyle] = useState('100%'); // Initial style is full-width

  // Function to handle button clicks and update the flex style
  const handleButtonClick = (style) => {
    setFlexStyle(style);
  };

  return (
    <div>
      <button onClick={() => handleButtonClick('50%')}>2</button>
      
      <div className="col-md-6 px-1">
        {Array.from({ length: 4 }).map((_, index) => (
          <div className="form-group" style={{ flex: flexStyle }} key={index}>
            {/* Your content for each column goes here */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColumnLayout;
