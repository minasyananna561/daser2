import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Mmodal } from './modal';

export let Page10=()=> {
  const [show, setShow] = useState(false);
  const [fullscreen, setFullscreen] = useState(true);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  return (
    <>
      <div style={{marginTop:"200px"}}>
      <Button variant="" onClick={() => handleShow(true)}>
        <img src="https://www.shutterstock.com/image-photo/red-car-260nw-197514563.jpg"/>
      </Button>
<div style={{width:"700px",height:"600px"}}>
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton >
          <Modal.Title>car rendering</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div style={{display:"flex"}}>
<div>
<img src="https://img.freepik.com/free-vector/red-sports-car-black-background-vector_53876-67367.jpg?size=626&ext=jpg"/>
</div>
<div style={{padding:"50px 100px"}}>The year 1886 is regarded as the birth year of the car, when German inventor Carl Benz patented his Benz Patent-Motorwagen.[3][4][5] Cars became widely available during the 20th century. One of the first cars affordable by the masses was the 1908 Model T, an American car manufactured by the Ford Motor Company. Cars were rapidly adopted in the US, where they replaced animal-drawn carriages and carts.[citation needed] In Europe and other parts of the world, demand for automobiles did not increase until after World War II.[6] The car is considered an essential part of the developed economy.

</div>
</div>
        </Modal.Body>
      </Modal>

</div>

      <Mmodal/>
    </div>
    </>
  );
}

