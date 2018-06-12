import * as React    from "react";
import * as ReactDOM from "react-dom";
import styled from "styled-components";

const TextArea = styled.textarea`
  height: 90%;
  width: 100%;
`;

const Button = styled.button`
`;

class App extends React.Component {
  copy() {
    console.log("hello");
  }

  render() {
    return (
      <div>
        <Button name="copy" onClick={this.copy}>Copy</Button>
        <TextArea name="text"></TextArea>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#main"));
