import React, { useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import styles

const EditorTextarea = ({setValue} : {setValue: any}) => {
  const editorRef = useRef<ReactQuill>(null);


  return (
    <div>
      <ReactQuill
        ref={editorRef}
        theme="snow"
        onChange={(content) => setValue('description', content)}
      />
    </div>
  );
};

export default EditorTextarea;
