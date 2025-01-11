import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useCookies } from "react-cookie";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Layout from "./components/Layout";
import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";

const App: React.FC = () => {
  const [cookies] = useCookies(["userId"]);

  return (
    <MantineProvider defaultColorScheme="dark">
      <Router>
        <Layout>
          <Routes>
            <Route
              path="/login"
              element={cookies.userId ? <Navigate to="/" /> : <Login />}
            />
            <Route
              path="/"
              element={
                cookies.userId ? <Dashboard /> : <Navigate to="/login" />
              }
            />
          </Routes>
        </Layout>
      </Router>
    </MantineProvider>
  );
};

export default App;
