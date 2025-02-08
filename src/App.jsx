import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import "./App.css";
import ProductsPage from "./ProductsPage";

const client = new ApolloClient({
  uri: "https://sandbox-api-test.samyroad.com/graphql",
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          images: {
            keyArgs: false,

            merge(existing = { edges: [], pageInfo: {} }, incoming) {
              const mergedEdges = [...existing.edges, ...incoming.edges];

              const mergedPageInfo = { ...incoming.pageInfo };

              return {
                edges: mergedEdges,
                pageInfo: mergedPageInfo,
              };
            },
          },
        },
      },
    },
  }),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <ProductsPage />
    </ApolloProvider>
  );
}

export default App;
