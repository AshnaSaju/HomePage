import React, { useState } from 'react'
import ModalContext from './ModalContext'


const ModalStates = (props) => {
  const [openView, setOpenView] = useState(false)
  const openViewModal = ()=>{
        setOpenView(true)
    }

    const closeViewModal = ()=>{
        setOpenView(false)
    }

    const [openPeople, setOpenPeople] = useState(false)
    const openPeopleModal = ()=>{
          setOpenPeople(true)
      }
  
      const closePeopleModal = ()=>{
          setOpenPeople(false)
      }
  return (
    <ModalContext.Provider value={{openView,openViewModal,closeViewModal,openPeople,openPeopleModal,closePeopleModal}}>
        {props.children}
    </ModalContext.Provider>
  )
}

export default ModalStates