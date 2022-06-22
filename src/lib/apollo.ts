import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o543au0mfk01xmd0qj4ozu/master',
  cache: new InMemoryCache()
});
