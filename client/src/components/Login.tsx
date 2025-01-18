import React from "react";
import {
  Stack,
  Title,
  Text,
  Button,
  Container,
  Image,
  Anchor,
  Group,
} from "@mantine/core";
import icon from "../assets/icon.png";

const Login: React.FC = () => {
  const handleLogin = () => {
    window.location.href = import.meta.env.VITE_BACKEND_URI || "";
  };

  return (
    <Container
      size="sm"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Stack align="center" gap="md" style={{ width: "100%" }}>
        <Image src={icon} alt={icon} w={72} h={72} />

        <Title order={1}>bam!</Title>

        <Text
          size="lg"
          style={{
            maxWidth: 400,
            textAlign: "center",
          }}
        >
          Guess the artist from the song name and snippet. Inspired/Copied from{" "}
          <Anchor href="https://instagram.com/trackstarshow/">
            @trackstarshow
          </Anchor>
        </Text>

        <Group>
          <Button size="md" radius="md" color="yellow" onClick={handleLogin}>
            Login With Spotify To Play
          </Button>
        </Group>

        <Stack gap={"sm"} align="center" style={{ opacity: 0.7 }}>
          <Text size="sm">January 18, 2025</Text>
          <Text size="sm">Created by @mehmehsloth</Text>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Login;
