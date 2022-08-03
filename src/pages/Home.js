import { Typography, Box, Link } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import CV from "../assets/CV.pdf";
import { PageContainer, TextBody } from "../MUI/styles";

const Home = ({ theme }) => {
  const LinkBox = styled(Box)({
    display: "flex",
    gap: 20,
    marginTop: "1rem",
  });

  const LinkCustom = styled(Link)(({ theme }) => ({
    margin: "0 1rem",
    textDecoration: "none",
    transition: "all 0.3s ease",
    color: theme.palette.primary.white,
    "&:hover": {
      color: theme.palette.primary.main,
    },
  }));
  return (
    <PageContainer>
      <Box>
        <TextBody
          variant="h1"
          component="h2"
          sx={{
            fontSize: "2rem",
            fontWeight: "600",
            marginBottom: 2,
            color: "white",
          }}
        >
          Vincent{" "}
          <TextBody
            variant="body1"
            component="span"
            sx={{
              fontSize: "2rem",
              fontWeight: "600",
              marginBottom: 2,
              color: "primary.main",
            }}
          >
            Aipar
          </TextBody>
        </TextBody>
      </Box>
      <TextBody
        variant="body1"
        component="span"
        sx={{ fontSize: "1.2rem", fontWeight: "300", color: "white" }}
      >
        Développeur Front-End
      </TextBody>
      <LinkBox>
        <LinkCustom href={CV} target="_blank" color="primary.black">
          Télécharger CV
        </LinkCustom>
        <LinkCustom href="#contact">Me Contacter</LinkCustom>
      </LinkBox>
    </PageContainer>
  );
};

export default Home;
