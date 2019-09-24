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
  // helper function to "shuffle all objects"
  shuffleImages = id => {
    let random = [...this.state.random]

      
      for (let i = random.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [random[i], random[j]] = [random[j], random[i]];
      }
    return random;
  };

  // needs to know specific card being clicked for condiction to know what runs.. true or false if items is changed
  // "isclicked"
  isClicked = id => {
    let clickedImage = this.state.clickedImage;
    console.log(id);

    if (clickedImage.includes(id)) {
      this.setState({ clickedImage: [], score: 0, status: "LOSER! Click a photo to replay game!" });
      return;
    } else {
      // copies array of clicked image, adds an id
      let clickedImage = [...this.state.clickedImage, id]
      let random = this.shuffleImages();

      this.setState({ random, clickedImage, score: clickedImage.length, status: "" });
      

      if (clickedImage.length === 12) {
        this.setState({ clickedImage: [], score: 12, status: "Congrats.... WINNER!" })
        return
      }
      // can break up "win" and "loss" into different functions
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
       
        
        {this.state.random.map(random => (
          <RandomImage
          isClicked={this.isClicked}

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
