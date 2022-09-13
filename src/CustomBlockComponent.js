import ReactEditorInstance from "./ReactEditorInstance"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useRef, useState } from "react";
import ReactDOM, {createPortal} from "react-dom";

import ReactShadowRoot from 'react-shadow-root';
import root from "react-shadow/styled-components";

export default function CustomBlockComponent({holderIds}) {
  
  const [innerHolderIds, setInnerHolderIds] = useState(holderIds ? holderIds : [uuidv4(),uuidv4()])  
  const blockDiv = useRef(uuidv4())

  const [iframeBody1, setIframeBody1] = useState(null)
  const [iframeBody2, setIframeBody2] = useState(null)

  const handleLoad1 = e => {
    setIframeBody1(e.target.contentDocument.body)
  }

  const handleLoad2 = e => {
    setIframeBody2(e.target.contentDocument.body)
  }

  return ( 
    <>
      <Container md={12}> 
        <Row>
          <iframe
            srcDoc={`<!DOCTYPE html>`}
            onLoad={handleLoad1}
          >
            {iframeBody1 && createPortal(<ReactEditorInstance holder={innerHolderIds[0]} />, iframeBody1)}
          </iframe>          
        
          <iframe
            srcDoc={`<!DOCTYPE html>`}
            onLoad={handleLoad2}
          >
            {iframeBody2 && createPortal(<ReactEditorInstance holder={innerHolderIds[1]} />, iframeBody2)}
          </iframe>          
        </Row>
      </Container>
    </>
  )
}
