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

  const style = `
  .codex-editor {
    background-color: red;
    color: black
  }`;

  return ( 
    <>
      <div id={innerHolderIds[0]}> 
        <ReactShadowRoot>
          <style>{style}</style>    
          {/* <span>Hi</span> <button className="my-button">Click Me</button>    */}
          <ReactEditorInstance holder={innerHolderIds[0]} />
        </ReactShadowRoot>
      </div>
    </>
  )
}
