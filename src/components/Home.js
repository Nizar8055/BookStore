import { Button, Typography, Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Button
          LinkComponent={Link}
          to="/books"
          sx={{ marginTop: 10, background: "#101820FF" }}
          variant="contained"
        >
          <Typography variant="h2">Display All The Books</Typography>
        </Button>
      </Box>
    </div>
  );
};

export default Home;