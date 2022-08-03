import { styled } from "@mui/material/styles";
import { Typography, Container } from "@mui/material";

export const TextBody = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.white,
}));

export const PageContainer = styled(Container)(({ theme }) => ({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: "6rem",
  maxWidth: "lg",
}));

export const PageTitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  textTransform: "uppercase",
  letterSpacing: "0.3em",
  fontSize: "3rem",
  fontWeight: 600,
  color: theme.palette.primary.white,
}));
