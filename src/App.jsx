import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import "./App.css";
import ProductsPage from "./ProductsPage";

const client = new ApolloClient({
  uri: "https://sandbox-api-test.samyroad.com/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <ProductsPage />
    </ApolloProvider>
  );
}

export default App;
