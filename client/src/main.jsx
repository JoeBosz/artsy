import React from "react";
import { ApolloClient,ApolloProvider, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import ReactDOM from "react-dom/client";
import App from "./app";
import "./index.css";

const httpLink = createHttpLink({
  uri: "http:/localhost:4000/",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  uri:'http://localhost:4000/',
  cache: new InMemoryCache(),
});
console.log("CLIENT", client);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
   </React.StrictMode>
);
