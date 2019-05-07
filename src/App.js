import React from 'react';
import CollectForm from './CollectForm';

function App({ firebase }) {
  return (
    <CollectForm firebase={firebase}></CollectForm>
  );
}

export default App;