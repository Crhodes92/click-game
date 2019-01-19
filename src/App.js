import React, { Component } from "react";
import SushiCard from "./components/SushiCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Pics from "./pics.json";


class App extends Component {

  state = {
    topScore: 0,
    currentScore: 0,
    Pics,
    ClickedPics: []
  };

  //click event, if clickedRoll = false it should lead to else
  imageClick = event => {
    const currentRoll = event.target.alt;
    const clickedRoll =
      this.state.ClickedPics.indexOf(currentRoll) > -1;
      console.log(clickedRoll)
    
    // if a previously clicked sushi is chosen
    if (clickedRoll) {
      this.setState({
        Pics: this.state.Pics.sort((a, b) => {
          return 0.5 - Math.random();
        }),
        clickedRoll: [],
        score: 0
      });
      alert("You lose. Play again?");


      //If you guess correctly
    } else {
      console.log(this.state.ClickedPics, currentRoll)
      this.setState(
        {
          Pics: this.state.Pics.sort((a, b) => {
            return 0.5 - Math.random();
          }),
          ClickedPics: [currentRoll, ...this.state.ClickedPics],
          currentScore: this.state.score + 1
        },

        //if you get all of them
        () => {
          if (this.state.score === 12) {
            alert("Congratulations, you got them all!");
            this.setState({
              Pics: this.state.Pics.sort((a, b) => {
                return 0.5 - Math.random();
              }),
              clickedRoll: [],
              score: 0
            });
          }
        }
      );
    }
  };
        // Map over this.state.friends and render a SushiCard component for each sushi object
        render() {
          return(
      <Wrapper>
        <Title>Sushi Clicker</Title>
            {
          this.state.Pics.map(pics => (
            <SushiCard
              id={pics.id}
              key={pics.id}
              name={pics.name}
              image={pics.image}
              imageClick={this.imageClick}
            />
          ))
        }
      </Wrapper >
    );
    }
  }

  export default App;
