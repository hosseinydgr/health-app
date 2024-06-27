import { Box } from "@mui/material";

export default function MainLayout({ children }) {
  return (
    <Box width="375px" m="auto">
      {children}
    </Box>
  );
}
