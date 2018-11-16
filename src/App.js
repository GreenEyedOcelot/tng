import React, { Component } from 'react';
import ClickyScores  from "./components/ClickyScores";
import ClickyImage   from "./components/ClickyImage";
import './App.css';

class App extends Component {

   state = {
      images: ["01Picard.jpg","02Riker.jpg","03Data.jpg",
                  "04Geordi.jpg","05Crusher.jpg","06Worf.jpg",
                  "07Troi.jpg", "08Miles.jpg","09Wesley.jpg",
                  "10Barclay.jpg","11Alexander.jpg","12Lal.jpg"],

      currentScore: 0,
      highScore: 0,
      selectedSoFar: []

   }
  
  
  componentDidMount() {
     // console.log("IN COMPONENT DID MOUNT, YAY!");
     this.shuffle();
  }

  getFile = ind => {
     //console.log("ind is ", ind, " with source ", this.state.images[ind]);
     //console.log(this.state);

     return "./images/" + this.state.images[parseInt(ind)];
  }

  // This function is for the alt property of the IMG tag,
  // and it just gets the name of the image, minus the number and file extension.
  // So for instance, "03Data.jpg" becomes just "Data"
  getName = ind => {
     
      let filename = this.state.images[ind];
      let altName = filename.match(/[a-zA-Z]+/)[0].toLowerCase();
 
      return altName;
   }
  

  // This efficient "shuffle" algorithm function is not my own,
  // it is from this page: 
  // https://bost.ocks.org/mike/shuffle/
  shuffle = () =>  {

   let arr = this.state.images;
   let m = arr.length, t, i;
 
   // While there remain elements to shuffle…
   while (m) {
 
     // Pick a remaining element…
     i = Math.floor(Math.random() * m--);
 
     // And swap it with the current element.
     t = arr[m];
     arr[m] = arr[i];
     arr[i] = t;
   }
 
   this.setState({images: arr});
 }

 checkGuess = (imageIndex) => {
    let filename = this.state.images[parseInt(imageIndex)];
    // console.log("in check guess, the filename is: ", filename, " and the array so far is ", this.state.selectedSoFar);

    if (!this.state.selectedSoFar.includes(filename)) {
       this.doGoodGuessActions(filename);
    } else {
       this.doBadGuessActions();
    }
 }

 doGoodGuessActions = (filename) => {
    // console.log("in doGoodGuessActions, filename is ", filename);
    this.setState({currentScore: this.state.currentScore + 1});
    // console.log("new current score is: ", this.state.currentScore);
    let selectedSoFar = this.state.selectedSoFar;
    selectedSoFar.push(filename);
    this.setState({selectedSoFar});
    // console.log("selected array is: ", this.state.selectedSoFar);
    this.shuffle();
    // console.log("cards should have been shuffled if this is appearing");
    // console.log("selected so far is now: ", this.state.selectedSoFar);

 }

 doBadGuessActions = () => {
    // console.log("in doBadGuessActions");
   // it seems silly to have a function that only calls one other function,
   // but it's possible that I might expand this game in the future to do more stuff,
   // like keeping a log of moves so far, so I'm still structuring it like this for now.
   this.restartGame();

 }

 restartGame = () => {
   // console.log("in RESTART GAME");
   this.setState({highScore: Math.max(this.state.highScore, this.state.currentScore)});
   this.setState({currentScore: 0});
   this.setState({selectedSoFar: []});
   this.shuffle();
 }
  
 
   render() {

    return (
    
      <h1>
      
        <div className="container">
        <ClickyScores currentScore={this.state.currentScore} highScore={this.state.highScore}/>
           <div className="row">
               <ClickyImage id={0} filename = {this.getFile(0)} name= {this.getName(0)} checkGuess={this.checkGuess} /> 
               <ClickyImage id={1} filename = {this.getFile(1)} name= {this.getName(1)} checkGuess={this.checkGuess} /> 
               <ClickyImage id={2}  filename = {this.getFile(2)} name= {this.getName(2)} checkGuess={this.checkGuess} /> 
               <ClickyImage id={3}  filename = {this.getFile(3)} name= {this.getName(3)} checkGuess={this.checkGuess} /> 
               <ClickyImage id={4}  filename = {this.getFile(4)} name= {this.getName(4)} checkGuess={this.checkGuess} /> 
               <ClickyImage id={5}  filename = {this.getFile(5)} name= {this.getName(5)} checkGuess={this.checkGuess} /> 
               <ClickyImage id={6}  filename = {this.getFile(6)} name= {this.getName(6)} checkGuess={this.checkGuess} /> 
               <ClickyImage id={7}  filename = {this.getFile(7)} name= {this.getName(7)} checkGuess={this.checkGuess} /> 
               <ClickyImage id={8}  filename = {this.getFile(8)} name= {this.getName(8)} checkGuess={this.checkGuess} /> 
               <ClickyImage id={9}  filename = {this.getFile(9)} name= {this.getName(9)} checkGuess={this.checkGuess} /> 
               <ClickyImage id={10}  filename = {this.getFile(10)} name= {this.getName(10)} checkGuess={this.checkGuess} /> 
               <ClickyImage id={11}  filename = {this.getFile(11)} name= {this.getName(11)} checkGuess={this.checkGuess} /> 
      </div>
    </div>
    </h1>
   
      
    );
  }
}

export default App;
