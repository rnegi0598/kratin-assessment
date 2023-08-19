import { Box, Container, Typography, Link, Button } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <Box sx={{ bgcolor: "#000", color: "#fff", pt: 10 }}>
      <Container>
        <Typography fontSize={40} textAlign="center">
          With WisdomInk, we empower elder citizens to preserve, document, and
          share their unique tales.
        </Typography>
        <Typography fontSize={40} textAlign="center">
          Let your story shine with us.
        </Typography>
        <Typography textAlign="center" p={3}>
          <Button
            variant="contained"
            style={{ background: "#696969",padding:10,}}
          >
            <Link
              href="#"
              underline="none"
              color="#fff"
              style={{ borderRadius: "5px" ,fontSize:40}}
            >
              Craft Your Legacy Here
            </Link>
          </Button>
        </Typography>
      </Container>
    </Box>
  );
};

export default About;
