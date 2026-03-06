import React from "react";
export default class TextChanger extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { text: "This is initial", count: 0 };
  }
    change = () => {
        this.setState({ text : `This is change number ${this.state.count + 1}`, count: this.state.count + 1});
    }
    
    render(){
        return(
            <>
                <p>Text : {this.state.text}</p>
                <button onClick={this.change}>Change the text</button>
            </>
        )
    }
} 