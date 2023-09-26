import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardComp (props){

    
    return(
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.image_url} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>Description</Card.Text>
          <Button variant="primary" >Go somewhere</Button>
        </Card.Body>
      </Card>

    )
}
export default CardComp;