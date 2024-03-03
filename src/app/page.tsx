'use client';

import React, { useState } from 'react';

const Child_1 = React.memo(() => {
  return (
    <>
      <p>子コンポーネントです</p>
    </>
  );
});

export default function Parent() {
  const [text, setText] = useState('');

  const handleChage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div>
      <p>親コンポーネントです</p>
      <input type='text' onChange={handleChage} value={text} />
      <Child_1 />
    </div>
  );
}
