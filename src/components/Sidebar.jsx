
import React from "react";
import {
  Box,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import CategoryRoundedIcon from "@mui/icons-material/CategoryRounded";
import SearchIcon from "@mui/icons-material/Search";
import LocalOfferRoundedIcon from "@mui/icons-material/LocalOfferRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";


const menuItems = [
  { label: "Home", icon: <HomeRoundedIcon /> },
  { label: "Categories", icon: <CategoryRoundedIcon /> },
  { label: "Search", icon: <SearchIcon /> },
  { label: "Offers", icon: <LocalOfferRoundedIcon /> },
  { label: "Favorites", icon: <FavoriteBorderRoundedIcon /> },
  { label: "Cart", icon: <ShoppingCartOutlinedIcon /> },
  { label: "Orders", icon: <Inventory2OutlinedIcon /> },
  { label: "Profile", icon: <PersonOutlineRoundedIcon /> },
];

export default function Sidebar() {
  const [active, setActive] = React.useState("Home");

  return (
    <Box className="sidebar">
      <Typography className="logo">zepto</Typography>

      <List className="sidebar-menu">
        {menuItems.map((item) => (
          <ListItemButton
            key={item.label}
            selected={active === item.label}
            onClick={() => setActive(item.label)}
            className="sidebar-item"
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} />
            {item.label === "Cart" && (
              <Typography className="cart-count">0</Typography>
            )}
          </ListItemButton>
        ))}
      </List>

    
    </Box>
  );
}
