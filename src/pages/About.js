import { Box } from "@mui/material";
import React from "react";
import { PageContainer, PageTitle } from "../MUI/styles";
import { abouts } from "../constants/pagesInfos";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const About = () => {
  return (
    <PageContainer id="about">
      <PageTitle>À Propos</PageTitle>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "4rem",
          gap: "2rem",
        }}
      >
        {abouts.map((item, index) => (
          <Card
            sx={{
              maxWidth: 200,
              background: "transparent",
              borderRadius: "10px",
            }}
            key={index}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="170"
                image={item.url}
                alt={item.title + item.url}
                sx={{ borderRadius: "10px" }}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  color="primary.white"
                >
                  {item.title}
                </Typography>
                <Typography variant="body2" color="primary.white">
                  {item.content}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </PageContainer>
  );
};

export default About;
