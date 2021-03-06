import { Button, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
const FoodItem = () => {
  return (
    <React.Fragment>
      <CardContent>
      <CardMedia
        component="img"
        height="194"
        image="https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_21/2870431/190524-classic-american-cheeseburger-ew-207p.jpg"
        alt="Paella dish"
      />
        <Typography variant="h5" component="div">
          Demo Card
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </React.Fragment>
  );
};
export default FoodItem;