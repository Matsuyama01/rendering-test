"use client"

import { ChangeEventHandler, useState } from 'react';

export default function Parent() {
  const [text, setText] = useState('');

  const handleChage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div>
      <p>親コンポーネントです</p>
      <input type='text' onChange={handleChage} value={text} />
    </div>
  );
}
