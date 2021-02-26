import { useState } from 'react';
import bundle from '../bundler';
import CodeEditor from './CodeEditor';
import CodePreview from './CodePreview';
import Resizable from './Resizable';
import LanguageOptionDropdown from './LanguageOptionDropdown';
import CodeEditorMenu from './CodeEditorMenu';
import {
  EditorLanguageConfig,
  TypeScriptLanguageConfig,
  JavaScriptLanguageConfig,
} from '../types';

const languageConfigOptions = [
  JavaScriptLanguageConfig,
  TypeScriptLanguageConfig,
];

const CodeCell = () => {
  const [language, setLanguage] = useState<EditorLanguageConfig>(
    languageConfigOptions[0]
  );
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const [codeOutput, setCodeOutput] = useState('');

  const onRunClick = async () => {
    const output = await bundle(input, language.bundlerLanguageOption);
    setCodeOutput(output.code);
    setError(output.bundleError);
  };

  return (
    <div>
      <CodeEditorMenu onRunClick={onRunClick}>
        <LanguageOptionDropdown
          languageConfigList={languageConfigOptions}
          language={language}
          setLanguage={setLanguage}
        />
      </CodeEditorMenu>
      <Resizable direction={'vertical'}>
        <div style={{ height: '100%', display: 'flex', flexDirection: 'row' }}>
          <Resizable direction={'horizontal'}>
            <CodeEditor
              initialValue=""
              language={language.editorLanguageOption}
              onChange={(value) => setInput(value)}
            />
          </Resizable>

          <CodePreview codeOutput={codeOutput} bundleError={error} />
        </div>
      </Resizable>
    </div>
  );
};

export default CodeCell;
