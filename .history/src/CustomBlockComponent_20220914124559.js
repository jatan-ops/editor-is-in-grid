import ReactEditorInstance from "./ReactEditorInstance"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useRef, useState } from "react";
import ReactDOM, {createPortal} from "react-dom";

import root from 'react-shadow';

export default function CustomBlockComponent({holderIds}) {
  
  const [innerHolderIds, setInnerHolderIds] = useState(holderIds ? holderIds : [uuidv4(),uuidv4()])  

  return ( 
    <root.div className="quote">
      <Container>
        <Row>
          <Col md={6}>
            <div id={innerHolderIds[0]} />
            <ReactEditorInstance holder={innerHolderIds[0]} />
          </Col>
          <Col md={6} >
            <div id={innerHolderIds[1]} />
            <ReactEditorInstance holder={innerHolderIds[1]} />
          </Col>
        </Row>
      </Container>
    </root.div>
  )
}
