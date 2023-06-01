import React from 'react'

const Title = ({text}) => {
  return (
    <>
  <div className="container">
    <h1 className='text-center mt-3'>{!text ? "write name in the input box" : text}</h1>
    
  </div>
    </>
  )
}

export default Title
