import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import LightModeIcon from "@mui/icons-material/LightMode";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";

const drawerWidth = 240;
const homeNavItems = [
  ["Focus", "expertise"],
  ["Timeline", "history"],
  ["Merged Work", "projects"],
  ["Links", "contact"],
];

function Navigation({ parentToChild, modeChange, page, navigateToPage }: any) {
  const { mode } = parentToChild;
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const isHomePage = page === "home";

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navigation");
      if (!navbar) {
        return;
      }
      setScrolled(window.scrollY > navbar.clientHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const drawer = (
    <Box className="navigation-bar-responsive" onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <p className="mobile-menu-top">Navigation</p>
      <Divider />
      <List>
        {isHomePage ? (
          homeNavItems.map((item) => (
            <ListItem key={item[0]} disablePadding>
              <ListItemButton sx={{ textAlign: "center" }} onClick={() => scrollToSection(item[1])}>
                <ListItemText primary={item[0]} />
              </ListItemButton>
            </ListItem>
          ))
        ) : (
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: "center" }} onClick={() => navigateToPage("home")}>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
        )}
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }} onClick={() => navigateToPage("cve")}>
            <ListItemText primary="CVE" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" id="navigation" className={`navbar-fixed-top${scrolled ? " scrolled" : ""}`}>
        <Toolbar className="navigation-bar">
          <button type="button" className="nav-brand nav-brand-button button-reset" onClick={() => navigateToPage("home")}>
            13ernkastel
          </button>
          <Box sx={{ display: { xs: "none", sm: "flex" } }} className="nav-links">
            {isHomePage &&
              homeNavItems.map((item) => (
                <Button key={item[0]} onClick={() => scrollToSection(item[1])} sx={{ color: "inherit" }}>
                  {item[0]}
                </Button>
              ))}
            {!isHomePage && (
              <Button onClick={() => navigateToPage("home")} sx={{ color: "inherit" }}>
                Home
              </Button>
            )}
            <Button
              className={`nav-route-link${isHomePage ? " nav-route-link-primary" : ""}`}
              onClick={() => navigateToPage("cve")}
              sx={{ color: "inherit" }}
            >
              CVE
            </Button>
          </Box>
          <div className="nav-actions">
            {mode === "dark" ? (
              <LightModeIcon onClick={() => modeChange()} />
            ) : (
              <DarkModeIcon onClick={() => modeChange()} />
            )}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default Navigation;
