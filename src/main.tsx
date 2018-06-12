import * as React    from "react";
import * as ReactDOM from "react-dom";
import styled from "styled-components";

const TextArea = styled.textarea`
  height: 100%;
  width: 100%;
`;

class App extends React.Component {
  render() {
    return (
      <TextArea></TextArea>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#main"));
