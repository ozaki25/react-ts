import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Articles from 'src/components/Articles';
import Counter from 'src/components/Counter';
import Hello from 'src/components/Hello';
import Loading from 'src/components/Loading';

import reducer from 'src/modules/reducer';

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <Hello />
      <Suspense fallback={<Loading />}>
        <Articles />
      </Suspense>
    </Provider>
  );
}

export default App;
