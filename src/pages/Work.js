import React, { useEffect, useState } from "react";
import { PageContainer, PageTitle } from "../MUI/styles";
import { works } from "../constants/pagesInfos";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const Work = () => {
  const [workIndex, setWorkIndex] = useState(0);
  const [work, setWork] = useState(works);

  return (
    <PageContainer id="work">
      <PageTitle sx={{ fontSize: { xs: "2rem", md: "3rem" } }}>
        Portefolio
      </PageTitle>

      <Box sx={{ marginTop: "4rem", display: "flex", alignItems: "center" }}>
        <ArrowBackIosIcon
          sx={{
            marginRight: "2rem",
            color: "primary.white",
            cursor: "pointer",
          }}
          onClick={() =>
            workIndex - 1 >= 0
              ? setWorkIndex((workIndex - 1) % works.length)
              : setWorkIndex(works.length - 1)
          }
        />
        {works
          ?.filter((el) => +el.id === +workIndex)
          .map((item, index) => (
            <Card
              key={index}
              sx={{
                maxWidth: 500,
                background: "transparent",
                borderRadius: "10px",
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="300"
                  image={item?.url}
                  alt={item?.title + item?.urlSring}
                  sx={{ borderRadius: "10px" }}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    color="primary.white"
                    textAlign={"center"}
                  >
                    {item?.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="primary.white"
                    textAlign={"center"}
                  >
                    {item?.content}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        <ArrowForwardIosIcon
          sx={{ marginLeft: "2rem", color: "primary.white", cursor: "pointer" }}
          onClick={() => {
            setWorkIndex((workIndex + 1) % works.length);
          }}
        />
      </Box>
    </PageContainer>
  );
};

export default Work;
