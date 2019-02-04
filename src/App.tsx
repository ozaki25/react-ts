import React, { Suspense } from 'react';

import Articles from 'src/components/Articles';
import Counter from 'src/components/Counter';
import Hello from 'src/components/Hello';
import Loading from 'src/components/Loading';

function App() {
  return (
    <>
      <Hello />
      <Suspense fallback={<Loading />}>
        <Articles />
      </Suspense>
    </>
  );
}

export default App;
