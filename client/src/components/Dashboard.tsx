import { Button, Flex } from "@mantine/core";
import React from "react";

const Dashboard: React.FC = () => {
  const handleStartGame = () => {
    // TODO: Implement game start logic
    console.log("Start game clicked");
  };

  return (
    <Flex direction={"column"} gap={"sm"}>
      <Button
        onClick={handleStartGame}
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
        Start Game
      </Button>
    </Flex>
  );
};

export default Dashboard;
