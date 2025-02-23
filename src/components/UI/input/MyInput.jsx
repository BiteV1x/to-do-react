import React from 'react'

const MyInput =  React.forwardRef((props, ref) => {
  return (
    <input   className="input br-2 border-black  w-full h-full  bg-white   " ref={ref} {...props}/>
  )
})

export default MyInput