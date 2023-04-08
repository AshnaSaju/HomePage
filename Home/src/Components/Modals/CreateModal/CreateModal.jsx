import React, { useContext } from 'react'
import ModalContext from '../../../Context/ModalContext'
import "./createmodal.css"

const CreateModal = () => {
    const context = useContext(ModalContext)
    const { createModal, closeCreateModal } = context

    return (
        <>
            {createModal && <div className='CreateModal'>
                <div className="box">
                    <div className="header">
                        <div className="heading"><b>Create New Post</b></div>
                        <i style={{ cursor: "pointer", color: "red" }} className='bx bx-x-circle bx-sm' onClick={() => { closeCreateModal() }}></i>
                    </div>


                    <div className="body">
                        <i style={{ fontSize: "7em" }} class='bx bx-images'></i>
                        <p style={{ margin: "2%" }}>Upload Your Images Here</p>
                        <input type="file" id="file" className='btn' />
                        <label for="file">
                            Select from Computer
                        </label>
                    </div>
                </div>
            </div>

            }
        </>
    )
}

export default CreateModal