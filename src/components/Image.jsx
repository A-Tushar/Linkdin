import React from 'react'

const Image = ({src, alt, classname}) => {
  return (
    <img src={src} alt={alt} className={classname} />
  )
}

export default Image