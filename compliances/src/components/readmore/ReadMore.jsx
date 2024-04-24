import React, { useState } from 'react';

const ReadMore = ({text}) => {
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {setIsReadMore(!isReadMore)};

  return (
    <>
      {isReadMore ? text.slice(0, 250): text }
      {text.length > 250 &&
        <span onClick={toggleReadMore}>
          {isReadMore ? <b>...Read More</b> : <b> ...Show Less</b>}
        </span>
      }
    </>
  )
}

export default ReadMore;