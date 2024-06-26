"use client";

import { Box, Container, Stack } from "@mui/material";
import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <Stack sx={{ minHeight: "100vh" }}>
      <Header />
      <Box flexGrow={1}>
        <Container maxWidth="lg">{children}</Container>
      </Box>
      <Footer />
    </Stack>
  );
}
