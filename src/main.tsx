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
  copy(): boolean {
    const textArea: HTMLTextAreaElement = document.getElementsByName("text")[0] as HTMLTextAreaElement;
    textArea.focus();
    textArea.select();
    return document.execCommand('copy');
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
