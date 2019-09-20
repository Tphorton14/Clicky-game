import React, { Component } from 'react';
import RandomImage from "./components/randomImages";
import Title from "./components/Title";
import Score from "./components/score";
import Wrapper from "./components/wrapper";
import random from "./randomImages.json";




class App extends Component {

  state = {
    random,
    clickedImage: [],
    score: 0,
    goal: 12,
    status: ""
  };

  // // randomize photos when one is clicked
  shuffleImages = id => {
    let clickedImage = this.state.clickedImage;

    if (clickedImage.includes(id)) {
      this.setState({ clickedImage: [], score: 0, status: "LOSER! Click to replay game!" });
      return;
    } else {
      clickedImage.push(id)

      if (clickedImage.length === 12) {
        this.setState({ clickedImage: [], score: 12, status: "Congrats.... WINNER!" })
        return
      }
      this.setState({ random, clickedImage, score: clickedImage.length, status: "" });
      for (let i = random.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [random[i], random[j]] = [random[j], random[i]];
      }
    }
  };
  // create onClick function
  removeRandom = id => {
    const random = this.state.random.filter(random => random.id !== id);

    this.setState({ random })
  }

  // componentDidMount() {
  //   this.loadApp();
  // }


  // removeRandom = id => {
  //   const random = this.state.random.filter(random => random.id !== id);

  //   this.setState({ random })
  // }

  // reset when a photo is clicked twice

  render() {
    // const shuffleImages = shuffleImages(this.props.id);
    return (
    
      <Wrapper>
        
        <Title className="header">Title Here 
        <Score total={this.state.score}
               goal={12}
               status={this.state.status}
               /></Title>

        {this.state.random.map(random => (
          <RandomImage
            shuffleImages={this.shuffleImages}

            id={random.id}
            key={random.id}
            name={random.name}
            image={random.image}
          />
          
        ))}
</Wrapper>
      
      
      
      
    );
  }

}





export default App;
