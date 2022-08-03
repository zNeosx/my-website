import React from "react";
import { Box, Link } from "@mui/material";
import { styled } from "@mui/material/styles";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Socials = () => {
  const SocialLink = styled(Link)(({ theme }) => ({
    textDecoration: "none",
    padding: "10px",
    borderRadius: "50%",
    border: `1px solid ${theme.palette.primary.lightGray}`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.primary.white,
    transition: "all 0.3s ease",
    marginBottom: "1rem",
    color: theme.palette.primary.gray,
    cursor: "default",
  }));
  return (
    <Box
      sx={{
        position: "fixed",
        top: "auto",
        left: "2rem",
        bottom: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        display: { xs: "none", sm: "none", md: "flex" },
      }}
    >
      <SocialLink
        href="https://www.linkedin.com/in/vincent-aipar-b88232199/"
        target="_blank"
        sx={{
          "&:hover": {
            color: "#0a66c2",
          },
        }}
      >
        <LinkedInIcon />
      </SocialLink>
      <SocialLink
        href="https://github.com/zNeosx"
        target="_blank"
        sx={{
          "&:hover": {
            color: "#211f1f",
          },
        }}
      >
        <GitHubIcon />
      </SocialLink>
    </Box>
  );
};

export default Socials;
