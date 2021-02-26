import { useRef } from 'react';
import {
  ControlledEditor as MonacoEditor,
  EditorDidMount,
} from '@monaco-editor/react';
import prettier from 'prettier';
import parser from 'prettier/parser-babel';
import { MonacoEditorLanguageOption } from '../types';
import './code-editor.css';

interface CodeEditorProps {
  initialValue: string;
  language: MonacoEditorLanguageOption;
  onChange(value: string): void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({
  initialValue,
  language,
  onChange,
}) => {
  const editorRef = useRef<any>();

  const onEditorDidMount: EditorDidMount = (getValue, monacoEditor) => {
    editorRef.current = monacoEditor; // set up reference to editor
    monacoEditor.onDidChangeModelContent(() => {
      onChange(getValue());
    });

    monacoEditor.getModel()?.updateOptions({ tabSize: 2 });
  };

  const onFormatClick = () => {
    // get current value from editor
    const unformatted = editorRef.current.getModel().getValue();

    // format the value
    try {
      const formatted = prettier
        .format(unformatted, {
          parser: 'babel',
          plugins: [parser],
          useTabs: false,
          semi: true,
          singleQuote: true,
        })
        .replace(/\n$/, '');

      // put it back in the editor
      editorRef.current.setValue(formatted);
    } catch (error) {
      editorRef.current.setValue(unformatted);
    }
  };

  return (
    <div className="editor-wrapper">
      <button
        className="button button-format is-primary is-small"
        onClick={onFormatClick}
      >
        format
      </button>
      <MonacoEditor
        editorDidMount={onEditorDidMount}
        value={initialValue}
        theme="vs-dark"
        language={language}
        height="100%"
        options={{
          wordWrap: 'on',
          showUnused: false,
          folding: false,
          lineNumbersMinChars: 3,
          fontSize: 14,
          scrollBeyondLastLine: true,
          automaticLayout: true,
          minimap: {
            enabled: false,
          },
        }}
      />
    </div>
  );
};

export default CodeEditor;
