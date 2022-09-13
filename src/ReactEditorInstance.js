import { createReactEditorJS } from "react-editor-js";
import Header from "@editorjs/header";
import Paragraph from "@editorjs/paragraph";
import { useRef, useCallback } from "react";
import CustomBlock from "./CustomBlock";

export default function ReactEditorInstance({holder}) {
  const ReactEditorJS = createReactEditorJS();

  const editorCore = useRef(null);

  const handleInitialize = useCallback((instance) => {
    editorCore.current = instance;
  }, []);

  return (   
    <ReactEditorJS
      holder={holder}       
      tools={{
        paragraph: {
          class: Paragraph
        },
        header: {
          class: Header
        },
        customBlock: {
          class: CustomBlock
        }
      }}
      defaultValue={{
        blocks: [
          {
            id: "sheNwCUP5A",
            type: "header",
            data: {
              text: "Editor.js",
              level: 2
            }
          },
          {
            id: "12iM3lqzcm",
            type: "paragraph",
            data: {
              text:
                "Meet the new Editor. On this page you can see it in action — try to edit this text."
            }
          },
          {
            id: "fvZGuFXHmK",
            type: "header",
            data: {
              text: "Key features",
              level: 3
            }
          }
          // {
          //   id: '-MhwnSs3Dw',
          //   type: 'header',
          //   data: {
          //     text: 'What does it mean «block-styled editor»',
          //     level: 3
          //   }
          // },
          // {
          //   id: 'Ptb9oEioJn',
          //   type: 'paragraph',
          //   data: {
          //     text:
          //       'Workspace in classic editors is made of a single contenteditable element, used to create different HTML markups. Editor.js <mark class="cdx-marker">workspace consists of separate Blocks: paragraphs, headings, images, lists, quotes, etc</mark>. Each of them is an independent contenteditable element (or more complex structure) provided by Plugin and united by Editor\'s Core.'
          //   }
          // },
          // {
          //   id: '-J7nt-Ksnw',
          //   type: 'paragraph',
          //   data: {
          //     text:
          //       'There are dozens of <a href="https://github.com/editor-js">ready-to-use Blocks</a> and the <a href="https://editorjs.io/creating-a-block-tool">simple API</a> for creation any Block you need. For example, you can implement Blocks for Tweets, Instagram posts, surveys and polls, CTA-buttons and even games.'
          //   }
          // },
          // {
          //   id: 'SzwhuyoFq6',
          //   type: 'header',
          //   data: {
          //     text: 'What does it mean clean data output',
          //     level: 3
          //   }
          // },
          // {
          //   id: 'x_p-xddPzV',
          //   type: 'paragraph',
          //   data: {
          //     text:
          //       'Classic WYSIWYG-editors produce raw HTML-markup with both content data and content appearance. On the contrary, Editor.js outputs JSON object with data of each Block. You can see an example below'
          //   }
          // },
          // {
          //   id: '6W5e6lkub-',
          //   type: 'paragraph',
          //   data: {
          //     text:
          //       'Given data can be used as you want: render with HTML for <code class="inline-code">Web clients</code>, render natively for <code class="inline-code">mobile apps</code>, create markup for <code class="inline-code">Facebook Instant Articles</code> or <code class="inline-code">Google AMP</code>, generate an <code class="inline-code">audio version</code> and so on.'
          //   }
          // },
          // {
          //   id: 'eD2kuEfvgm',
          //   type: 'paragraph',
          //   data: {
          //     text:
          //       'Clean data is useful to sanitize, validate and process on the backend.'
          //   }
          // },
          // {
          //   id: 'IpKh1dMyC6',
          //   type: 'paragraph',
          //   data: {
          //     text:
          //       "We have been working on this project more than three years. Several large media projects help us to test and debug the Editor, to make it's core more stable. At the same time we significantly improved the API. Now, it can be used to create any plugin for any task. Hope you enjoy. 😏"
          //   }
          // }
        ]
      }}
      onInitialize={handleInitialize}
      minHeight="0"
    />
  );
}
