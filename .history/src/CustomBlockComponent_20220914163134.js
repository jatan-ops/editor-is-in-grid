import ReactEditorInstance from "./ReactEditorInstance"
import EditorJS from '@editorjs/editorjs';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useRef, useState } from "react";
import ReactDOM, {createPortal} from "react-dom";

import ReactShadowRoot from 'react-shadow-root';
import root from "react-shadow/styled-components";
import styles from './styles'

export default function CustomBlockComponent({holderIds}) {
  
  const [innerHolderIds, setInnerHolderIds] = useState(holderIds ? holderIds : [uuidv4(),uuidv4()]) 
  const [holderReady1, setHolderReady1] = useState(false)
  const [holderReady2, setHolderReady2] = useState(false)

  useEffect(() => {
    const interval1 = setInterval(() => {
      if(!!document.getElementById('parent-shadow1').shadowRoot.children[1]) {
        clearInterval(interval1)
        setHolderReady(true)
      }
    },100)
    const interval2 = setInterval(() => {
      if(!!document.getElementById('parent-shadow2').shadowRoot.children[1]) {
        clearInterval(interval2)
        setHolderReady1(true)
      }
    },100)
  },[])

  return ( 
    <Container>
      <Row>
        <Col md={6}>
          <div id='parent-shadow1'>
            <ReactShadowRoot>
              <style>{styles}</style>    
              <div/> 
              {
                holderReady1 &&
                <ReactEditorInstance holder={document.getElementById('parent-shadow1').shadowRoot.children[1]} />
              } 
            </ReactShadowRoot>      
          </div>
        </Col>
        <Col md={6}>
          <div id='parent-shadow2'>
            <ReactShadowRoot>
              <style>{styles}</style>                  
              <div/> 
              {
                holderReady2 &&
                <ReactEditorInstance holder={document.getElementById('parent-shadow2').shadowRoot.children[1]} />
              } 
            </ReactShadowRoot>   
          </div>
        </Col>
      </Row>
    </Container>
  )
}
