//stateless functional component



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
  const json = localStorage.getItem('options');
  const options = JSON.parse(json);
  console.log(options);
  this.setState(()=>({ options:options})); 
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
          hasOptions={this.state.options.length > 0}
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
}
/*
IndecisionApp.defaultProps = {
  options: []
};*/



const Header =(props)=>{
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};
Header.defaultProps = { //hie 
  title: 'Indecision'
}
/*class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}*/

const Action = (props)=>{ // passing propsas an argument 
  return (
    <div>
      <button
        onClick={props.handlePick}
        disabled={!props.hasOptions}
      >
        What should I do?
      </button>
    </div>
  );

}

/*class Action extends React.Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.handlePick}
          disabled={!this.props.hasOptions}
        >
          What should I do?
        </button>
      </div>
    );
  }
}*/

const Options=(props)=>{

  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {
        props.options.map((option) => (<Option
          key={option} 
          optionText={option}
          handleDeleteOptionsSingular={props.handleDeleteOptionsSingular}
           />))
      }

    </div>
  );
}

/*class Options extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleDeleteOptions}>Remove All</button>
        {
          this.props.options.map((option) => <Option key={option} optionText={option} />)
        }
      </div>
    );
  }
}*/
 const Option = (props)=>{
  return (
    <div>
      {props.optionText}
      <button
        onClick={(e) => {
          props.handleDeleteOptionsSingular(props.optionText);
        }}
      >
        remove
      </button>

    </div>
  );
 }
/*class Option extends React.Component {
  render() {
    return (
      <div>
        {this.props.optionText}
      </div>
    );
  }
}*/

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = { // using this to set the value normally undifined 
      error: undefined
    };
  }
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);// we are calling this function o know if there is any error

    this.setState(() => { // creating error state to for showing this on the from as a component and if there is an error shwing  error by set state method 
      return { error };
    });
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
