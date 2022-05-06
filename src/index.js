import * as React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
//import {useLocalStorage} from "./UseLocalStorage"

// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";
import "bulma/css/bulma.min.css";

/* function App() {
  const [item, setItem] = useLocalStorage("key", "");
 return (
  onchange={e => setItem}
  value={item}

  )
} */

ReactDOM.render(

  // 2. Wrap ChakraProvider at the root of your app
  <Provider store={store}>
    <BrowserRouter>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);
