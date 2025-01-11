import React from "react";

const Login: React.FC = () => {
  const handleLogin = () => {
    window.location.href = import.meta.env.VITE_BACKEND_URI || "";
  };

  return (
    <div>
      <button
        onClick={handleLogin}
        style={{
          backgroundColor: "#FFBB00",
          color: "black",
          padding: "10px 20px",
          fontSize: "1rem",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Connect to Spotify
      </button>
    </div>
  );
};

export default Login;
