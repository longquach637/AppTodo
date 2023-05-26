import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Card } from "./Card";
import { useCallback, useState } from "react";
import update from "immutability-helper";
import ReactQuillEditor from "../ReactQuillEditor/ReactQuillEditor";

function DragAndDrop() {
  const style = {
    width: "100%",
  };

  const [editorHtmlValue, setEditorHtmlValue] = useState("");
  const [editorMarkdownValue, setEditorMarkdownValue] = useState("");

  const onEditorContentChanged = (content) => {
    setEditorHtmlValue(content.html);
    setEditorMarkdownValue(content.markdown);
  };

  const initialMarkdownContent = "**StartInitial** writing *something*...";
  const [cards, setCards] = useState([
    {
      id: 1,
      text: "Write a cool JS library",
    },
    {
      id: 2,
      text: "Make it generic enough",
    },
    {
      id: 3,
      text: "Write README",
    },
    {
      id: 4,
      text: "Create some examples",
    },
    {
      id: 5,
      text: "Spam in Twitter and IRC to promote it (note that this element is taller than the others)",
    },
    {
      id: 6,
      text: "???",
    },
    {
      id: 7,
      text: "PROFIT",
    },
  ]);

  console.log("editorHtmlValue", editorHtmlValue);

  const moveCard = useCallback((dragIndex, hoverIndex) => {
    setCards((prevCards) =>
      update(prevCards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevCards[dragIndex]],
        ],
      })
    );
  }, []);

  const renderCard = useCallback((card, index) => {
    return (
      <Card
        key={card.id}
        index={index}
        id={card.id}
        text={card.text}
        moveCard={moveCard}
      />
    );
  }, []);
  return (
    <div>
      <DndProvider backend={HTML5Backend}>
        <div style={style}>{cards.map((card, i) => renderCard(card, i))}</div>
      </DndProvider>

      <ReactQuillEditor
        value={initialMarkdownContent}
        onChange={onEditorContentChanged}
      />
    </div>
  );
}

export default DragAndDrop;
