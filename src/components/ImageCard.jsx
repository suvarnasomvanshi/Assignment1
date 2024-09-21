import Card from 'react-bootstrap/Card';

function ImageCard() {
  return (
    <div className='p-2'>
    <Card style={{ width: '240px' }}>
      <Card.Img variant="top" src="../../public/images/Image.png" 
      style={{height:"120px"}}  />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  );
}

export default ImageCard;