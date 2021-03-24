import React, {ReactNode} from 'react';
import './scss/App.scss';
import Header from "./components/Header/Header";
import TimelineWrapper from "./components/TimelineWrapper/TimelineWrapper";

class App extends React.Component {
  render(): ReactNode {
    return (
      <div className="App">
        <Header />
        <TimelineWrapper />
      </div>
    );
  }
}

export default App;
