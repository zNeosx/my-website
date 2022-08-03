import React, { useEffect, useRef, useState } from "react";
import { PageContainer, PageTitle } from "../MUI/styles";
import { Box, InputAdornment, TextField, Button } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { styled } from "@mui/material/styles";
import emailjs from "@emailjs/browser";
import {
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  EMAILJS_PUBLIC_KEY,
} from "../config/env/index";

const TextFieldStyled = styled(TextField)(({ theme }) => ({
  margin: "1rem 0",
  "& input": {
    color: theme.palette.primary.white,
  },
  "&::input": {
    color: theme.palette.primary.white,
  },
  "& label.Mui-focused": {
    color: theme.palette.primary.main,
  },
  "&:hover label": {
    color: theme.palette.primary.white,
  },
  "& label": {
    color: theme.palette.primary.white,
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "green",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: theme.palette.primary.white,
    },
    "&:hover fieldset": {
      borderColor: theme.palette.primary.white,
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.primary.main,
    },
  },
}));

const Contact = () => {
  const form = useRef();

  const handleFormSubmit = () => {
    emailjs
      .sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form.current,
        EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("email sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <PageContainer
      id="contact"
      sx={{ minHeight: { xs: "120vh", md: "100vh" } }}
    >
      <PageTitle sx={{ fontSize: { xs: "2rem", md: "3rem" } }}>
        Contactez-moi
      </PageTitle>

      <Box
        component="form"
        ref={form}
        sx={{
          padding: "1rem",
          width: "60%",
          marginTop: "4rem",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <TextFieldStyled
          required
          variant="outlined"
          label="Nom"
          id="name"
          name="user_name"
          placeholder="Jean"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" sx={{ color: "primary.white" }}>
                <AccountCircleIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextFieldStyled
          required
          variant="outlined"
          label="Adresse e-mail"
          id="email"
          name="user_email"
          placeholder="GRONDIN"
          sx={{ color: "primary.white" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" sx={{ color: "primary.white" }}>
                <AlternateEmailIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextFieldStyled
          required
          variant="outlined"
          label="Message"
          id="message"
          name="message"
          placeholder="Entrer votre message..."
          multiline
          rows={4}
        />
        <Button
          variant="contained"
          sx={{ margin: "1rem 0" }}
          onClick={() => handleFormSubmit()}
        >
          Envoyer
        </Button>
      </Box>
    </PageContainer>
  );
};

export default Contact;
