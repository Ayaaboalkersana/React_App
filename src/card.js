import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import  Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

function CardComp (props){
    const [show, setShow] = useState(false);
    function handelshow(){
        setShow(!show)}

    
    function saveToLocalStorage(){
      if(localStorage.getItem("Favorites")){
      let arr = JSON.parse(localStorage.getItem("Favorites"))
      arr.push(props)
      let stringData = JSON.stringify(arr)
      localStorage.setItem("Favorites",stringData)}
      else{
        let arr = []
        arr.push(props)
        let stringData = JSON.stringify(arr)
        localStorage.setItem("Favorites",stringData)} 

      } 
    
    
    return(
        <>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.image_url} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Button variant="primary" onClick={handelshow}>Show Description</Button>
          {props.showFavorites? <Button variant="primary" onClick={saveToLocalStorage} >Add To Favorites</Button>
          : <Button variant="primary" onClick={saveToLocalStorage} style={{display:"none"}}>Add To Favorites</Button>
          }
          {props.showRemove? <Button variant="primary" onClick={props.RemoveFromFavorites}>Remove</Button>
          : <Button variant="primary" onClick={props.RemoveFromFavorites} style={{display:"none"}}>Remove</Button> }

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