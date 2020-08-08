
import React from 'react';
import AddOption from './AddOption.js';
import Header from './Header';
import Action from './Action';
import Options from './Options';


class IndecisionApp extends React.Component {
    constructor(props) {
      super(props);
      this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
      this.handlePick = this.handlePick.bind(this);
      this.handleAddOption = this.handleAddOption.bind(this);
      this.handleDeleteOptionsSingular = this.handleDeleteOptionsSingular.bind(this);
      this.state = {
        options: []
      };
    }
    componentDidMount() {
    console.log('fetching data');
    try{
    const json = localStorage.getItem('options');
    const options = JSON.parse(json);
    console.log(options);
    if (options) {
      this.setState(() => ({ options:options }));
    }}catch (e) {
      // Do nothing at all
    }


   // this.setState(()=>({ options:options})); 
  }
    componentDidUpdate(prevProps, prevState) {
      if (prevState.options.length !== this.state.options.length){
        
        const json = JSON.stringify(this.state.options);
        localStorage.setItem('options' , json);
        console.log('saving data');
      }
    }
    componentWillUnmount() {
      console.log("kgf");
      
    }
  
    handleDeleteOptions() {
      this.setState(() =>({options: []}) );
    }
    handleDeleteOptionsSingular(optionToRemove){ // here this optionToRemove is an argument which we are getting when we are clicking indivitual remove  option by {options.text}  
      this.setState((prevState)=>({
        options: prevState.options.filter((option)=>{
          return optionToRemove !==option ; 
        })
      }))
    }
    handlePick() {
      const randomNum = Math.floor(Math.random() * this.state.options.length);
      const option = this.state.options[randomNum];
      alert(option);
    }
    handleAddOption(option) {
      if (!option) {
        return 'Enter valid value to add item';
      } else if (this.state.options.indexOf(option) > -1) {
        return 'This option already exists';
      }
  
      this.setState((prevState) => ({options: prevState.options.concat(option)}));
    }
    render() {
      //const title = 'Indecision';
      const subtitle = 'Put your life in the hands of a computer';
  
      return (
        <div>
          <Header  subtitle={subtitle}  />
          <Action
            hasOptions={this.state.options.length > 1}
            handlePick={this.handlePick}
          />
          <Options
            options={this.state.options}
            handleDeleteOptions={this.handleDeleteOptions}
            handleDeleteOptionsSingular = {this.handleDeleteOptionsSingular}
          />
          <AddOption
            handleAddOption={this.handleAddOption}
          />
        </div>
      );
    }
  };
  /*
  IndecisionApp.defaultProps = {
    options: []
  };*/

  export default IndecisionApp;