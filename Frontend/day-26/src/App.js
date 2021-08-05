import logo from "./logo.svg";
import "./App.css";
import Form from "./component/Form";
import store from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Provider store={store}>
          <Form />
        </Provider>
      </header>
    </div>
  );
}

export default App;
