import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import { client } from "./lib/apollo";

import { Router } from "./router";


function App() {

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
