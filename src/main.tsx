import * as React    from "react";
import * as ReactDOM from "react-dom";

import {Button} from 'office-ui-fabric-react/lib/Button';
import {Fabric} from 'office-ui-fabric-react/lib/Fabric';
import {TextField} from 'office-ui-fabric-react/lib/TextField';

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
        // Cannot use `document.execCommand("copy")` here
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
      <Fabric>
        <Button name="copy" onClick={App.copy}>Copy</Button>
        <Button name="clear" onClick={App.clear}>Clear</Button>
        <TextField name="text" multiline={true}></TextField>
      </Fabric>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#main"));
