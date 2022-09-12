import * as React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { v4 as uuidv4 } from 'uuid';

import GridLayout from "react-grid-layout";

import ReactEditorInstance from "./ReactEditorInstance";

export default function Demo() {

  const cells = [uuidv4(),uuidv4(),uuidv4(),uuidv4()]

  return (
    <Container fluid>
      <Row>
        {
          cells.map((id,i) => {
            return <Col md={3}>
            <ReactEditorInstance holder={id} />
          </Col> 
          })
        }
      </Row>
    </Container>
  );
}

// tried making this work but did not work - https://www.npmjs.com/package/react-grid-layout