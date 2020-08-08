
import React from 'react';


export default class AddOption extends React.Component {
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

