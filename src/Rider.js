import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import Demo from "./selectState";
import VehiclenumberText from "./vehiclenumber";
import Purpose from "./purpose";
import MobileNumber from "./mobilenumber";
import KiloMeter from "./kilometer";
import Description from "./description";
import SaveButton from "./savebuttton";
import InterState from "./interstate";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit">Your Website</Link> {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Rider() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Rider Form
        </Typography>
        <InterState />
        <Demo />
        <VehiclenumberText />
        <Purpose />
        <MobileNumber />
        <KiloMeter />
        <Description />
        <SaveButton />
        <Copyright />
      </Box>
    </Container>
  );
}
