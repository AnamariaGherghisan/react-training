import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

export const Jumbotron = ({ title, subTitle }) => (
  <Stack
    gap={3}
    sx={{ textAlign: "center", padding: "2rem 1rem", color: "#ffffff" }}
  >
    <Box
      sx={{
        textAlign: "center",
        color: "#61dafb",
        fontSize: "45px",
        marginBottom: "15px",
      }}
    >
      {title}
    </Box>
    {subTitle && (
      <Box
        sx={{
          fontSize: "24px",
          fontWeight: 200,
          letterSpacing: "0.01em",
          color: "#282c34",
        }}
      >
        {subTitle}
      </Box>
    )}
  </Stack>
);
