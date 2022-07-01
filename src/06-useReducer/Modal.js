import React from 'react'

const Modal = ({ modelContent, closeModal }) => {
  React.useEffect(() => {
    setTimeout(() => {
      closeModal();
    }, 3000);
  });
  return (
    <>
      <div className='modal'>
        {modelContent}
      </div>

    </>
  )
}

export default Modal