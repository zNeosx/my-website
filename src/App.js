import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import NavBar from "./components/NavBar";
import Socials from "./components/Socials";
import NavigationDots from "./components/NavigationDots";
import About from "./pages/About";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import "./settings.scss";

function App() {
  const AppBox = styled(Box)(({ theme }) => ({
    background: theme.palette.background.default,
    position: "relative",
  }));
  return (
    <AppBox>
      <NavBar />
      <Socials />
      <NavigationDots />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </AppBox>
  );
}

export default App;
