import React from "react";
import { Typography, Button, Container, makeStyles } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

const useStyles = makeStyles({});

export default function Create() {
  const classes = useStyles();

  return (
    <Container>
      <Typography
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create a New Note
      </Typography>

      <Button
        type="submit"
        color="primary"
        variant="contained"
        endIcon={<SendIcon />}
      >
        Submit
      </Button>
    </Container>
  );
}
