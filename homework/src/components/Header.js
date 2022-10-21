import React, { memo } from 'react';

function Header({ data, increment, }) {

  console.log("<Header /> Component Rendered");

  //memo

  const Button = memo(({ classes, text }) => {
    console.log("<Button/> Component Rendered");
    return (
      <button
        className={classes}
        onClick={increment}
      >
        {text}
      </button>
    );
  });

  return (
    <div>
      <span className='me-3'>Use Memo</span>
      <div className='mt-2'>
        {/* <span className='me-3'>Use Callback - {data.name} - {data.number}</span> */}
      </div>
      <Button classes="btn btn-outline-success" text="Increment" />
    </div>
  );
}


export default React.memo(Header);