import React from 'react';
import '../../../style/App.css';

const MyButton = ({ children, ...props }) => {
  return (
    <button className="btn btn-warning px-4 py-2 text-sm w-auto" {...props}>
      {children}
    </button>
  );
}
export default MyButton;