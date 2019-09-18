import React, {Component} from 'react';
import RandomImage from "./components/randomImages";
import Title from "./components/Title";
import Wrapper from "./components/wrapper";
import random from "./randomImages.json";

class App extends Component {

  state = {
    random
  };

  // randomize photos when one is clicked
  // removeRandom = id => {
  //   const random = this.state.random.filter(random => random.id !== id);

  //   this.setState({ random })
  // }

  // reset when a photo is clicked twice

  render () {
    return (
      <Wrapper>
        <Title className="header">Title Here </Title>
          {this.state.random.map(random => (
            <RandomImage

            id={random.id}
            key={random.id}
            name={random.name}
            image={random.image}
            />
          ))}
      </Wrapper>
      // <div className="App">
      //   <header className="App-header">
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
    );
  }

}





export default App;
