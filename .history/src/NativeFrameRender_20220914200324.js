import ReactEditorInstance from "./ReactEditorInstance"
import EditorJS from '@editorjs/editorjs';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useRef, useState } from "react";
import ReactDOM, {createPortal} from "react-dom";

import Frame from 'react-frame-component';

export default function NativeFrameRender({holderIds}) {
  
  const [innerHolderIds, setInnerHolderIds] = useState(holderIds ? holderIds : [uuidv4(),uuidv4()]) 
  const [iframeBody, setIframeBody] = useState(null)
  const [holderReady1, setHolderReady1] = useState(false)

  const el = document.getElementById('my-frame').contentWindow.document.querySelector('#mountHere')

  function handleLoad(e) {
    setIframeBody(e.target.contentDocument.body)
    const interval = setInterval(() => {
      if(!!el) {
        clearInterval(interval)
        setHolderReady1(true)        
      }
    },100)
  }

  // useEffect(() => {
  //   if(holderReady1) {
      
  //   }
  // },[holderReady1]) 

  return ( 
    <iframe 
      id='my-frame' 
      srcDoc={`<!DOCTYPE html><html><head></head><body><div id="mountHere"></div></body></html>`} 
      onLoad={handleLoad}
    >
      {
        holderReady1 &&
        createPortal(<ReactEditorInstance holder={el} />,el)
      }
    </iframe>
  )
}
