import { AppShell, Center, Flex, Group, Text, Title } from "@mantine/core";
import React from "react";
import { Link } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <AppShell header={{ height: "120" }} padding="lg" withBorder={false}>
      <AppShell.Header>
        <Center>
          <Flex direction={"column"} gap="lg">
            <Title
              order={1}
              style={{
                color: "orange",
                textAlign: "center",
              }}
            >
              Be-Shazam
            </Title>
            <Title order={4} style={{ color: "white", marginBottom: "2rem" }}>
              Inspired by{" "}
              <Link
                to="https://www.instagram.com/trackstarshow"
                target="_blank"
                rel="noopener noreferrer"
              >
                @trackstarshow
              </Link>
            </Title>
          </Flex>
        </Center>
      </AppShell.Header>
      <AppShell.Main>
        <Center w="100%" h="100%">
          {children}
        </Center>
      </AppShell.Main>
    </AppShell>
  );
};

export default Layout;
