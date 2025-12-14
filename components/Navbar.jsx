"use client";
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Stack,
  TextField,
  InputAdornment,
  Paper,
  Menu,
  MenuItem,
  Chip,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import {
  Search as SearchIcon,
  LocationOn as LocationIcon,
  Translate as TranslateIcon,
  Work as WorkIcon,
  Menu as MenuIcon,
  Login as LoginIcon,
  Close as CloseIcon,
} from "@mui/icons-material";

// --- Components ---

export const Navbar = () => {
  const [langAnchor, setLangAnchor] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("English");

  // Language Menu Handlers
  const handleLangClick = (event) => setLangAnchor(event.currentTarget);
  const handleLangClose = (lang) => {
    if (lang) setCurrentLang(lang);
    setLangAnchor(null);
  };

  return (
    <Box>
      <AppBar
        position="static"
        elevation={0}
        sx={{ bgcolor: "white", color: "#333", borderBottom: "1px solid #eee" }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              sx={{ flexGrow: 1 }}
            >
              <Box
                sx={{
                  bgcolor: "#1976d2",
                  color: "white",
                  p: 0.5,
                  borderRadius: 1,
                }}
              >
                <WorkIcon />
              </Box>
              <Typography
                variant="h6"
                component="div"
                sx={{ fontWeight: 800, color: "#1976d2" }}
              >
                work<span style={{ color: "#333" }}>India</span>
              </Typography>
            </Stack>

            <Stack
              direction="row"
              spacing={2}
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              <Button color="inherit">Post a Job</Button>

              <Button
                variant="outlined"
                startIcon={<TranslateIcon />}
                onClick={handleLangClick}
                sx={{ borderRadius: 20, textTransform: "none" }}
              >
                {currentLang}
              </Button>
              <Menu
                anchorEl={langAnchor}
                open={Boolean(langAnchor)}
                onClose={() => handleLangClose()}
              >
                <MenuItem onClick={() => handleLangClose("English")}>
                  English
                </MenuItem>
                <MenuItem onClick={() => handleLangClose("हिंदी (Hindi)")}>
                  हिंदी
                </MenuItem>
                <MenuItem onClick={() => handleLangClose("తెలుగు (Telugu)")}>
                  తెలుగు
                </MenuItem>
                <MenuItem onClick={() => handleLangClose("தமிழ் (Tamil)")}>
                  தமிழ்
                </MenuItem>
              </Menu>

              <Button
                variant="contained"
                disableElevation
                startIcon={<LoginIcon />}
              >
                Login
              </Button>
            </Stack>

            <IconButton
              sx={{ display: { xs: "flex", md: "none" } }}
              onClick={() => setMobileOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>

        <Drawer
          anchor="right"
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
        >
          <Box sx={{ width: 250, p: 2 }}>
            <Stack direction="row" justifyContent="flex-end">
              <IconButton onClick={() => setMobileOpen(false)}>
                <CloseIcon />
              </IconButton>
            </Stack>
            <List>
              <ListItemButton>
                <ListItemText primary="Login" />
              </ListItemButton>
              <ListItemButton>
                <ListItemText primary="Post a Job" />
              </ListItemButton>
              <ListItemButton onClick={handleLangClick}>
                <ListItemText primary={`${currentLang}`} />
              </ListItemButton>
            </List>
          </Box>
        </Drawer>
      </AppBar>
    </Box>
  );
};

