import React from "react";
import { PageContainer, PageTitle } from "../MUI/styles";
import { Typography, Box, Link } from "@mui/material";
import { skills, experiences } from "../constants/pagesInfos";
import CardMedia from "@mui/material/CardMedia";

const Skills = () => {
  return (
    <PageContainer id="skills">
      <PageTitle sx={{ fontSize: { xs: "2rem", md: "3rem" } }}>
        Compétences
      </PageTitle>
      <Box
        sx={{
          display: "flex",
          margin: "0 auto",
          marginTop: "4rem",
          width: "80%",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: { xs: "center", md: "flex-start" },
            alignItems: "flex-start",
            gap: "1rem",
            marginRight: { xs: "0", md: "5rem", lg: "5rem", xl: "5rem" },
            flex: "1 1",
          }}
        >
          {skills.map((item, index) => (
            <Box key={index} sx={{ textAlign: "center", margin: "1rem" }}>
              <Box
                sx={{
                  width: "90px",
                  height: "90px",
                  borderRadius: "50%",
                  backgroundColor: "rgb(255, 244, 242)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "0.5rem",
                }}
              >
                <CardMedia
                  component="img"
                  image={item.url}
                  alt={item.title + item.url}
                  sx={{
                    width: "50%",
                    height: "50%",
                  }}
                />
              </Box>
              <Typography
                variant="h5"
                component="span"
                sx={{
                  fontWeight: 500,
                  fontSize: "0.8rem",
                  lineHeight: "1.5",
                  color: "primary.gray",
                }}
              >
                {item.title}
              </Typography>
            </Box>
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            flex: "1 1",
            marginTop: { xs: "2rem", md: "0" },
          }}
        >
          {experiences.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: { xs: "center", md: "flex-start" },
                margin: "1rem 0",
                width: "100%",
              }}
            >
              <Box sx={{ marginRight: "3rem" }}>
                <Typography
                  variant="h5"
                  component="span"
                  sx={{ fontWeight: 800, color: "primary.main" }}
                >
                  {item.year}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  marginBottom: "1rem",
                }}
              >
                <Typography
                  variant="h5"
                  component="span"
                  sx={{
                    fontWeight: "500",
                    fontSize: "1rem",
                    textAlign: "left",
                    color: "primary.white",
                    display: "inline-block",
                  }}
                >
                  {item.job}
                </Typography>
                <Typography
                  variant="h5"
                  component="span"
                  sx={{
                    fontWeight: "400",
                    color: "primary.gray",
                    marginTop: "5px",
                    fontSize: "0.8rem",
                    lineHeight: "1.5",
                    textAlign: "left",
                  }}
                >
                  {item.company}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </PageContainer>
  );
};

export default Skills;
