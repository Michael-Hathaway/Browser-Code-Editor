import React from 'react';
import ReactDom from 'react-dom';
import CodeCell from './components/CodeCell';
import 'bulmaswatch/superhero/bulmaswatch.min.css';

const App = () => {
  return (
    <div>
      <CodeCell />
    </div>
  );
};

ReactDom.render(<App />, document.querySelector('#root'));
