import { useRef, useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import * as Emoji from "quill-emoji";
// import { markdownToHtml, htmlToMarkdown } from "./Parser";
// import { ImageResize } from "quill-image-resize-module";
import "react-quill/dist/quill.snow.css";
import "quill-emoji/dist/quill-emoji.css";

Quill.register("modules/emoji", Emoji);
// Quill.register("modules/imageResize", ImageResize);
const TOOLBAR_OPTIONS = [
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  ["bold", "italic", "underline", "strike", "blockquote", "link"],
  [{ list: "ordered" }, { list: "bullet" }],
  [{ indent: "-1" }, { indent: "+1" }],
  ["emoji"],
  ["clean"],
  [{ script: "sub" }, { script: "super" }],
  [{ direction: "rtl" }],
  [{ color: [] }, { background: [] }],
  [{ font: [] }],
  [{ align: [] }],
  //   [
  //     {
  //       handlers: {
  //         image: handleFileChange,
  //       },
  //     },
  //   ],
];

export default function ReactQuillEditor(props) {
  const reactQuillRef = useRef(null);
  const [value, setValue] = useState(props.value);

  const onChange = (content) => {
    setValue(content);
    if (props.onChange) {
      props.onChange({ html: content });
    }
  };

  return (
    <ReactQuill
      ref={reactQuillRef}
      theme="snow"
      placeholder="Start writing..."
      modules={{
        toolbar: {
          container: TOOLBAR_OPTIONS,
        },
        "emoji-toolbar": true,
        "emoji-textarea": false,
        "emoji-shortname": true,
      }}
      value={value}
      onChange={onChange}
    />
  );
}
