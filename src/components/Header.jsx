import { AppBar, Container, Stack, Toolbar, Typography } from "@mui/material";

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Container maxWidth="lg">
          <Stack direction={"row"} gap={2} alignItems={"center"}>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              Maťkin reading list
            </Typography>
          </Stack>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
