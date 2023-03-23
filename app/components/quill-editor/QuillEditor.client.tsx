import { useState } from "react";
import ReactQuill from "react-quill";
import { mockQuillEditorText } from "./mock-quill-editor-text";

import styles from "./QuillEditor.module.css";

export default function QuillEditor() {
  const [value, setValue] = useState(mockQuillEditorText);

  return (
    <div className={styles.container}>
      <ReactQuill value={value} onChange={(value: string) => setValue(value)} />
    </div>
  );
}
