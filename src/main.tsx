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
  componentDidMount() {
    document.addEventListener("paste", (e: Event) => {
      e.preventDefault();
      const item = (e as ClipboardEvent).clipboardData.items[0];
      item.getAsString((domString) => {
        const textArea = App.getTextArea();
        textArea.value = domString;
        textArea.focus();
        textArea.select();
        // Cannot use `document.execCommand("copy"))` here
      });
    });
  }

  static getTextArea() {
    return document.getElementsByName("text")[0] as HTMLTextAreaElement;
  }

  static copy(): boolean {
    const textArea: HTMLTextAreaElement = App.getTextArea();
    textArea.focus();
    textArea.select();
    return document.execCommand('copy');
  }

  static clear() {
    const textArea: HTMLTextAreaElement = App.getTextArea();
    textArea.value = '';
    textArea.focus();
  }

  render() {
    return (
      <div>
        <Button name="copy" onClick={App.copy}>Copy</Button>
        <Button name="clear" onClick={App.clear}>Clear</Button>
        <TextArea name="text"></TextArea>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#main"));
