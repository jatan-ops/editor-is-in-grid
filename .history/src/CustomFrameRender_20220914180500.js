import ReactEditorInstance from "./ReactEditorInstance"
import EditorJS from '@editorjs/editorjs';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useRef, useState } from "react";
import ReactDOM, {createPortal} from "react-dom";

import Frame from 'react-frame-component';

export default function CustomFrameRender({holderIds}) {
  
  const [innerHolderIds, setInnerHolderIds] = useState(holderIds ? holderIds : [uuidv4(),uuidv4()]) 
  const [holderReady1, setHolderReady1] = useState(false)
  const [holderReady2, setHolderReady2] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      if(!!document.getElementById('my-frame').contentWindow.document.getElementById('mountHere')) {
        clearInterval(interval)
        setHolderReady1(true)
      }
    },100)
  },[])

  return ( 
    <Frame
      id='my-frame'
      initialContent='<!DOCTYPE html><html><head></head><body><div id="mountHere"></div></body></html>'
      mountTarget='#mountHere'
    >
      Hello
      {/* {
        holderReady1 &&
        <ReactEditorInstance holder={document.getElementById('my-frame').contentWindow.document.getElementById('mountHere')} />
      } */}
    </Frame>
  )
}
