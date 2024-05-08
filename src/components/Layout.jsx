"use client";

import { Box, Container, Stack } from "@mui/material";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
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
