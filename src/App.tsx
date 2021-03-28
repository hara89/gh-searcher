import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import UserLists from "./pages/UserLists";
import UserListDetail from "./pages/UserListDetail";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Link to="/" className="">
          <h2 style={{ textAlign: "center", marginBottom: "50px" }}>
            GitHub Searcher
          </h2>
        </Link>
        <Switch>
          <Route path="/" exact>
            <UserLists />
          </Route>
          <Route path="/:user">
            <UserListDetail />
          </Route>
        </Switch>
      </Router>
      {process.env.NODE_ENV !== "production" && <ReactQueryDevtools />}
    </QueryClientProvider>
  );
}

export default App;
