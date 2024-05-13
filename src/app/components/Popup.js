'use client'
import React, { useEffect } from 'react'
import Icon_close from './icons/Icon_close'
import { twMerge } from 'tailwind-merge'

//IMPORTANT
// const [setpopup, setsetpopup] = useState(null) ---> Must be present in the parent component

// Then import it like:
// data={{ setpopup, bgNotClickable:true }}

// STYLING
// mainContainer        Example: mainContainer={{ text-primary }}
// modalContainer       Example: modalContainer={{ text-primary }}
// contentContainer     Example: contentContainer={{ text-primary }}

const Popup = ({ children, ...props }) => {
  const setBodyStyle = () => {
    document.body.style.overflow = 'hidden'
    document.body.style.marginRight = '15px'
  }
  const unsetBodyStyle = () => {
    document.body.style.overflow = ''
    document.body.style.marginRight = ''
  }

  useEffect(() => {
    setBodyStyle()
  }, [])

  const bgClose = (e) => {
    e.stopPropagation()
    if (!props.data?.bgNotClickable) {
      unsetBodyStyle()
      props.data?.setpopup(false)
    }
  }
  const handleClose = (e) => {
    e.stopPropagation()
    unsetBodyStyle()
    props.data?.setpopup(false)
  }
  const handleContentClick = (e) => {
    e.stopPropagation()
  }
  return (
    <div
      className={twMerge(
        'flex fixed py-4 md:py-10 px-2 top-0 w-full h-screen max-h-screen bg-neutral-500 bg-opacity-25 backdrop-blur-sm overflow-y-auto z-50',
        props?.data?.mainContainer
      )}
      onClick={bgClose}
    >
      <div
        onClick={handleContentClick}
        className={twMerge(
          'flex my-auto relative min-h-20 w-full max-w-[552px] h-fit bg-white mx-auto rounded-md overflow-hidden shadow-xl',
          props?.data?.modalContainer
        )}
      >
        <Icon_close
          onClick={handleClose}
          className={'absolute z-50 top-3 right-3 box-content'}
        />
        <div className={twMerge('flex w-full', props?.data?.contentContainer)}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Popup
