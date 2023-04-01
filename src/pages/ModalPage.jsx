import { useState } from 'react'
import Modal from "../components/Modal"
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false)

  const handleClick = () => {
    setShowModal(!showModal)
  }

  const handleClose = () => {
    setShowModal(false)
  }

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>I Accept</Button>
    </div>
  )

  const modal = ( 
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  )

  return (
    <div className='relative'>
        <Button
        onClick={handleClick}
         primary
        >
        Open Modal
        </Button>
        { showModal && modal }
        <p>
        Here is an important agreement for you to acceptHere is an important agreement for you to acceptHere is an important agreement for you to acceptHere 
        </p>
        <p>
        Here is an important agreement for you to acceptHere is an important agreement for you to acceptHere is an important agreement for you to acceptHere 
        </p>
        <p>
        Here is an important agreement for you to acceptHere is an important agreement for you to acceptHere is an important agreement for you to acceptHere 
        </p>
        <p>
        Here is an important agreement for you to acceptHere is an important agreement for you to acceptHere is an important agreement for you to acceptHere 
        </p>
        <p>
        Here is an important agreement for you to acceptHere is an important agreement for you to acceptHere is an important agreement for you to acceptHere 
        </p>
        <p>
        Here is an important agreement for you to acceptHere is an important agreement for you to acceptHere is an important agreement for you to acceptHere 
        </p>
        <p>
        Here is an important agreement for you to acceptHere is an important agreement for you to acceptHere is an important agreement for you to acceptHere 
        </p>
        <p>
        Here is an important agreement for you to acceptHere is an important agreement for you to acceptHere is an important agreement for you to acceptHere 
        </p>
        <p>
        Here is an important agreement for you to acceptHere is an important agreement for you to acceptHere is an important agreement for you to acceptHere 
        </p>
        <p>
        Here is an important agreement for you to acceptHere is an important agreement for you to acceptHere is an important agreement for you to acceptHere 
        </p>
        <p>
        Here is an important agreement for you to acceptHere is an important agreement for you to acceptHere is an important agreement for you to acceptHere 
        </p>
        <p>
        Here is an important agreement for you to acceptHere is an important agreement for you to acceptHere is an important agreement for you to acceptHere 
        </p>
        <p>
        Here is an important agreement for you to acceptHere is an important agreement for you to acceptHere is an important agreement for you to acceptHere 
        </p>
        <p>
        Here is an important agreement for you to acceptHere is an important agreement for you to acceptHere is an important agreement for you to acceptHere 
        </p>
    </div>
  )
}

export default ModalPage;