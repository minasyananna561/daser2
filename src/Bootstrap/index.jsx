import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';

export let Bootstrap = () => {
  const [show, setShow] = useState(false);
const [color, setColor] = useState(false);
  const [text,setText]=useState(false)
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
  

  let name1=<h3 className="text-danger">hello Armenia</h3>
  let name2=<h3 className="text-primary">by Armenia</h3>
  return (
    <div className="m-5">
      <>
    
      <p className="text-break fs-1 ">{text ? name1: name2} </p>
        <Button
          as="a"
          variant={color ? "danger" : "primary"}
          onClick={() => {
            setColor(!color);
            setText(!text)
          }}
        >
         {color ? "danger" : "primary"}
        </Button>
       
      </>



      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>




    </div>
  );
};
