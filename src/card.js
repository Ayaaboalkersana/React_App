import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import  Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

function CardComp (props){
    const [show, setShow] = useState(false);
    function handelshow(){
        setShow(!show)

    }
    
    return(
        <>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.image_url} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Button variant="primary" onClick={handelshow}>Show Description</Button>
        </Card.Body>
      </Card>
       <Modal show={show} onHide={handelshow}>
       <Modal.Header closeButton>
         <Modal.Title>{props.title}</Modal.Title>
       </Modal.Header>
       <Modal.Body>{props.description}</Modal.Body>
       <Modal.Footer>
         <Button variant="secondary" onClick={handelshow}>
           Close
         </Button>
       </Modal.Footer>
     </Modal>
     </>

    )
}
export default CardComp;