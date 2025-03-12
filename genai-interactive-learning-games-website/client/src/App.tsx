import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/ui/theme-provider";
import { Toaster } from "./components/ui/toaster";
import { AuthProvider } from "./contexts/AuthContext";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Layout } from "./components/Layout";
import { Dashboard } from "./components/Dashboard";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { ChatTutor } from "./components/ChatTutor";
import { Profile } from "./pages/Profile";
import { Rankings } from "./pages/Rankings";

function App() {
  return (
    <AuthProvider>
      <ThemeProvider defaultTheme="light" storageKey="ui-theme">
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={
              <ProtectedRoute>
                <Layout>
                  <Dashboard />
                </Layout>
              </ProtectedRoute>
            } />
            <Route path="/profile" element={
              <ProtectedRoute>
                <Layout>
                  <Profile />
                </Layout>
              </ProtectedRoute>
            } />
            <Route path="/rankings" element={
              <ProtectedRoute>
                <Layout>
                  <Rankings />
                </Layout>
              </ProtectedRoute>
            } />
          </Routes>
          <ChatTutor />
          <Toaster />
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;