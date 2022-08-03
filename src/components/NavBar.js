import { AppBar, Toolbar, Link, IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import CodeIcon from "@mui/icons-material/Code";
import WorkIcon from "@mui/icons-material/Work";
import MailIcon from "@mui/icons-material/Mail";
import { styled } from "@mui/material/styles";

import React from "react";

const NavBar = () => {
  const NavLink = styled(Link)(({ theme }) => ({
    color: theme.palette.primary.white,
    padding: "10px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s ease",
    "&:hover": {
      color: theme.palette.primary.main,
      background: "rgba(0,0,0,0.6)",
    },
  }));
  return (
    <AppBar
      sx={{
        position: "fixed",
        top: "auto",
        right: "auto",
        bottom: "3rem !important",
        left: "50%",
        width: "max-content",
        background: "rgba(0,0,0,0.3)",
        borderRadius: "30px",
        backdropFilter: "blur(15px)",
        transform: "translateX(-50%)",
      }}
    >
      <Toolbar sx={{}}>
        <NavLink
          href="#"
          sx={{
            margin: {
              sm: "0 0.5rem",
              md: "0 1rem",
              lg: "0 1rem",
              xl: "0 1rem",
            },
          }}
        >
          <HomeIcon />
        </NavLink>
        <NavLink
          href="#about"
          sx={{
            margin: {
              sm: "0 0.5rem",
              md: "0 1rem",
              lg: "0 1rem",
              xl: "0 1rem",
            },
          }}
        >
          <PersonIcon />
        </NavLink>
        <NavLink
          href="#skills"
          sx={{
            margin: {
              sm: "0 0.5rem",
              md: "0 1rem",
              lg: "0 1rem",
              xl: "0 1rem",
            },
          }}
        >
          <CodeIcon />
        </NavLink>
        <NavLink
          href="#work"
          sx={{
            margin: {
              sm: "0 0.5rem",
              md: "0 1rem",
              lg: "0 1rem",
              xl: "0 1rem",
            },
          }}
        >
          <WorkIcon />
        </NavLink>
        <NavLink
          href="#contact"
          sx={{
            margin: {
              sm: "0 0.5rem",
              md: "0 1rem",
              lg: "0 1rem",
              xl: "0 1rem",
            },
          }}
        >
          <MailIcon />
        </NavLink>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
