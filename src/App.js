import { createTheme, Stack, ThemeProvider } from "@mui/material";

import { Sidebar } from "./components/Sidebar";
import { Feed } from "./components/Feed";
import { Rightbar } from "./components/Rightbar";
import { Box } from "@mui/system";
import { Navbar } from "./components/Navbar";
import Add from "./components/Add";

import { useSelector } from "react-redux";

function App() {
  const darkThemeEnabled = useSelector((state) => state.darkThemeEnabled);

  const darkTheme = createTheme({
    palette: {
      mode: darkThemeEnabled ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
