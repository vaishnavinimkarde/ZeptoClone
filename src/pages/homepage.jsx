import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";


const productsByCategory = {
  Vegetables: [
    { id: 1, name: "Tomato", price: "₹30/kg", image: "/src/assets/tomato.jpg" },
    { id: 2, name: "Potato", price: "₹20/kg", image: "/src/assets/potato.jpg" },
    { id: 3, name: "Brinjal", price: "₹25/kg", image: "/src/assets/brinjal.jpg" },
  ],
  Beauty: [
    { id: 4, name: "Moisturizer", price: "₹199", image: "/src/assets/moisturizer.jpg" },
    { id: 5, name: "Sunscreen", price: "₹299", image: "/src/assets/sunscrren.jpg" },
  ],
  Fashion: [
    { id: 6, name: "Top", price: "₹499", image: "/src/assets/top.jpg" },
    { id: 7, name: "Dress", price: "₹799", image: "/src/assets/dress.jpg" },
  ],
};

export default function Homepage({ activeCategory, onAddToCart }) {
  const products = productsByCategory[activeCategory] || [];

  return (
    <Box component="main" className="main-content">
      <Typography variant="h5" fontWeight={700} mb={3}>
        {activeCategory}
      </Typography>

      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item xs={6} sm={4} md={3} lg={2} key={product.id}>
            <Card
              sx={{
                cursor: "pointer",
                "&:hover": { boxShadow: 3 },
                borderRadius: 2,
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image={product.image}
                alt={product.name}
                sx={{ objectFit: "cover" }}
              />
              <CardContent sx={{ p: 1.5 }}>
                <Typography variant="body2" fontWeight={600}>
                  {product.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="primary"
                  fontWeight={700}
                  mb={1}
                >
                  {product.price}
                </Typography>
                <Button
                  variant="outlined"
                  size="small"
                  startIcon={<AddIcon />}
                  fullWidth
                  onClick={() => onAddToCart(product)}
                  sx={{
                    borderColor: "#8b5cf6",
                    color: "#8b5cf6",
                    "&:hover": {
                      borderColor: "#7c3aed",
                      backgroundColor: "#f5f3ff",
                    },
                  }}
                >
                  Add
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}