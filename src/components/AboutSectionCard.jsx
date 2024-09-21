import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <Card className="mx-auto my-2 p-2" style={{ width:"auto", maxWidth:"900px"}}>
      <div className="row no-gutters">
        <div className="col-4">
          <Card.Img 
            variant="top" 
            src="../../public/images/Image.png" 
            className="img-fluid"
          />
        </div>
        <div className="col-8">
          <Card.Body> 
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="secondary">Go somewhere</Button>
          </Card.Body>
        </div>
      </div>
    </Card>
  );
}

export default BasicExample;
