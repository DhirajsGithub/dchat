import React from 'react'


const ModalOverlay = (props) => {
  return (
    <div style={{zIndex:`${props.zIndex}`, opacity: `${props.opacity}`}} >{props.children}</div>
  )
}

export default ModalOverlay