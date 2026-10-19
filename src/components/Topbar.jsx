import React from "react";
import { Box, Typography, InputBase, Badge } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutlineOutlined";

const categories = ["Vegetables", "Beauty", "Fashion"];

export default function Topbar({ activeCategory, setActiveCategory, cartCount }) {
  return (
    <Box className="topbar">
      <Box className="topbar-main">
        <Typography className="logo">zepto</Typography>

        <Box className="search-box">
          <SearchIcon sx={{ color: "#999" }} />
          <InputBase placeholder="Search for products..." fullWidth />
        </Box>

        <Badge
          badgeContent={cartCount}
          color="error"
          showZero={false}
          sx={{ cursor: "pointer" }}
        >
          <ShoppingCartOutlinedIcon sx={{ fontSize: 28 }} />
        </Badge>

        <PersonOutlineIcon sx={{ cursor: "pointer", fontSize: 28 }} />
      </Box>

      <Box className="category-tabs">
        {categories.map((cat) => (
          <Typography
            key={cat}
            className={`tab ${activeCategory === cat ? "active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </Typography>
        ))}
      </Box>
    </Box>
  );
}