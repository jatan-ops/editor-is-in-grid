import ReactEditorInstance from "./ReactEditorInstance"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { v4 as uuidv4 } from 'uuid';

export default function CustomBlockComponent() {

  const cells = [uuidv4(),uuidv4()]

  return (
    <Container fluid>
      <Row>
        <Col md={6}>
          <ReactEditorInstance holder={cells[0]} />
        </Col>
        <Col md={6}>
          <ReactEditorInstance holder={cells[1]} />
        </Col>
      </Row>
    </Container>
  )
}