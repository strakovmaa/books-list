import { Box, Link, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={(theme) => ({
        backgroundColor: theme.palette.primary.main,
        textAlign: "center",
        p: 2,
        mt: 3
      })}
    >
      <Typography color={"white"}>
        Copyright &copy;{" "}
        <Link color="inherit" href="https://github.com/strakovmaa">
          strakovmaa
        </Link>
      </Typography>
    </Box>
  );
}
