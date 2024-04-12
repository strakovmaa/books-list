import {
  AppBar,
  Container,
  Link,
  Stack,
  Toolbar,
  Typography
} from "@mui/material";
import NextLink from "next/link";

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Container maxWidth="lg">
          <Stack direction={"row"} gap={2} alignItems={"center"}>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              Maťkin reading list
            </Typography>

            <Link color="inherit" href="/" component={NextLink}>
              Hlavná stránka
            </Link>
            <Link color="inherit" href="/best" component={NextLink}>
              Najlepšie knihy
            </Link>
          </Stack>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
