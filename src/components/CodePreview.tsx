import React, { useRef, useEffect } from 'react';
import './code-preview.css';

interface CodePreviewProps {
  codeOutput: string;
  bundleError: string;
}

const CodePreview: React.FC<CodePreviewProps> = ({
  codeOutput,
  bundleError,
}) => {
  const iframe = useRef<any>();

  useEffect(() => {
    // trigger iframe reload before sending new codeOutput
    iframe.current.src += '';

    // send codeOutput to iframe
    setTimeout(() => {
      iframe.current.contentWindow.postMessage(codeOutput, '*');
    }, 50);
  }, [codeOutput]);

  return (
    <div className="preview-wrapper">
      <iframe
        ref={iframe}
        title="code-execution-env"
        src="/codeExecutionEnv.html"
        sandbox="allow-scripts"
      />
      {bundleError && <div className="preview-error">{bundleError}</div>}
    </div>
  );
};

export default CodePreview;
