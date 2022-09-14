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

export default function CustomBlockComponent({holderIds}) {
  
  const [innerHolderIds, setInnerHolderIds] = useState(holderIds ? holderIds : [uuidv4(),uuidv4()]) 
  const [holderReady, setHolderReady] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      const editor = new EditorJS({
        holder: document.getElementById('parent-shadow').shadowRoot.children[2]
      });    
      console.log(document.getElementById('parent-shadow').shadowRoot.children[2])
    },1000)
  },[])

  const style = `
  .my-button {
    background-color: red;
    color: black
  }`;

  return ( 
    <div id='parent-shadow'>
      <ReactShadowRoot>
        <style>{style}</style>    
        <button className="my-button">Click Me</button>
        <div id='container' />  
        {/* {
          holderReady &&
          <>    
            <ReactEditorInstance holder='my-holder' />
          </>
        } */}
      </ReactShadowRoot>      
    </div>
  )
}
