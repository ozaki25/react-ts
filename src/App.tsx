import React, { Component, Suspense } from 'react';

import 'src/App.css';
import Articles from 'src/components/Articles';
import Counter from 'src/components/Counter';
import Loading from 'src/components/Loading';
import logo from 'src/logo.svg';

class App extends Component {
  public render() {
    return (
      <>
        <div className="App">
          <header className="App-header">
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            <Counter />
          </header>
        </div>
        <Suspense fallback={<Loading />}>
          <Articles />
        </Suspense>
      </>
    );
  }
}

export default App;
