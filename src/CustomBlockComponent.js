import ReactEditorInstance from "./ReactEditorInstance"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useRef, useState } from "react";

export default function CustomBlockComponent({holderIds}) {
  
  const [innerHolderIds, setInnerHolderIds] = useState(holderIds ? holderIds : [])
  const blockDiv = useRef(null)
  blockDiv.current = uuidv4()

  useEffect(() => {
    if(innerHolderIds !== null) {

    }
  },[innerHolderIds])

  const cells = [uuidv4(),uuidv4()]

  return (
    <>
      <div id={blockDiv.current} />
      <Container fluid>
        <Row>
          <Col md={6}>
            <div id={cells[0]} />
            <ReactEditorInstance holder={cells[0]} />          
          </Col>
          <Col md={6}>
            <div id={cells[1]} />
            <ReactEditorInstance holder={cells[1]} />
          </Col>
        </Row>
      </Container>
    </>
  )
}

// Make this headless - Rather than rendering editors inside the block, we render below block
// ---
// this block will save -> holder id's and will render -> empty div with unique id
// on initial load -> initialize state with empty array or array of holder id's (if rendering previously added blocks)
// when state !== null -> find empty div, travel upto ce-block, below it add div sibling -> inside sibling, 
// w/ReactDOM.render, render above container component