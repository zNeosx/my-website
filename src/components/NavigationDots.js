import { Box, IconButton, Link } from "@mui/material";
import React, { useState } from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { styled } from "@mui/material/styles";

const IconButtonActive = styled(IconButton)(({ theme }) => ({
  color: theme.palette.primary.main,
}));
const NavigationDots = () => {
  const [dotIndex, setDotIndex] = useState(0);

  return (
    <Box
      id="navigationDots"
      sx={{
        position: "fixed",
        top: "50%",
        right: "3rem",
        transform: "translateY(-50%)",
        display: "flex",
        flexDirection: "column",
        display: { xs: "none", sm: "none", md: "flex" },
      }}
    >
      {["#", "#about", "#skills", "#work", "#contact"].map((item, index) => {
        if (+dotIndex === index) {
          return (
            <IconButtonActive
              variant="a"
              href={item}
              key={item + index}
              sx={{
                transition: "all 0.3s ease",
                "&:hover": { color: "primary.main" },
              }}
            >
              <FiberManualRecordIcon />
            </IconButtonActive>
          );
        } else {
          return (
            <IconButton
              variant="a"
              href={item}
              key={item + index}
              sx={{
                color: "primary.lightGray",
                transition: "all 0.3s ease",
                "&:hover": { color: "primary.main" },
              }}
            >
              <FiberManualRecordIcon />
            </IconButton>
          );
        }
      })}
    </Box>
  );
};

export default NavigationDots;
