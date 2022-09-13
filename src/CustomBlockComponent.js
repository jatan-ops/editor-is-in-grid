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
  const container = useRef(null)

  useEffect(() => {
    if (container.current !== null && container.current.shadowRoot) return

    // Create a shadow DOM
    const outerShadowRoot = container.current !== null && container.current.attachShadow({ mode: 'open' })
    const host = document.createElement('div')
    // outerShadowRoot.appendChild(host)

    // Create a nested shadow DOM
    const innerShadowRoot1 = host.attachShadow({ mode: 'open' })
    const reactRoot1 = document.createElement('div')
    reactRoot1.id = innerHolderIds[0]
    innerShadowRoot1.appendChild(reactRoot1)

    ReactDOM.render(<ReactEditorInstance holder={innerHolderIds[0]} />, reactRoot1)

    const innerShadowRoot2 = host.attachShadow({ mode: 'open' })
    const reactRoot2 = document.createElement('div')
    reactRoot2.id = innerHolderIds[1]
    innerShadowRoot2.appendChild(reactRoot1)

    ReactDOM.render(<ReactEditorInstance holder={innerHolderIds[1]} />, reactRoot2)
  })

  return ( 
    <div ref={container} data-cy="outer-shadow-root" />
  )
}
