interface CodeEditorMenuProps {
  onRunClick: () => void;
}

const CodeEditorMenu: React.FC<CodeEditorMenuProps> = (props) => {
  return (
    <div className="code-editor-menu">
      <div className="language-dropdown">{props.children}</div>
      <div className="button-container">
        <button className="run-code-button" onClick={props.onRunClick}>
          Run
        </button>
      </div>
    </div>
  );
};

export default CodeEditorMenu;
