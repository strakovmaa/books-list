import { AppBar, Container, Toolbar, Typography } from "@mui/material";

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Container maxWidth="lg">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Maťkin reading list
          </Typography>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
