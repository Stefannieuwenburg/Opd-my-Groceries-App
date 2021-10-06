import React, { Component } from 'react'

class InputField extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ title: event.target.value });
  }


  render() {
    return (
     
      <form
        onSubmit={(e) => {
          this.props.onSubmit(e, this.state.title);
          this.setState({ title: "" });
        }}
      >
        <input
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.handleChange}
          placeholder="Vul je boodschappen in"
        />
        <button type="submit">Voeg toe</button>
      </form>
    );
  }
}

export default InputField