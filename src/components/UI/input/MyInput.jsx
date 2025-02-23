import React from 'react'

const MyInput =  React.forwardRef((props, ref) => {
  return (
    <input   className="input input-bordered input-secondary w-full h-full  " ref={ref} {...props}/>
  )
})

export default MyInput