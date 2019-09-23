import React, { Component } from 'react';
import RandomImage from "./components/randomImages";
import Title from "./components/Title";
import Score from "./components/score";
import Wrapper from "./components/wrapper";
import random from "./randomImages.json";
import './App.css'




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
 

  render() {
    // const shuffleImages = shuffleImages(this.props.id);
    return (
   <div>
     <div className="back">
     <nav  class="navbars text-center">
          <span className="titles">Clicky-Game</span>
        </nav>
        </div>
      <Wrapper>
        
        
        <header>
        <Title className="header">
          Player Score: 
          <Score total={this.state.score}
            goal={12}
            status={this.state.status}/>
        </Title>
        </header>
        <hr/>
        
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
      </div> 
      
      
      
    );
  }

}





export default App;
