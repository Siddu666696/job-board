"use client";
import {
  Box,
  Button,
  Chip,
  Container,
  InputAdornment,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import {
  Search as SearchIcon,
  LocationOn as LocationIcon,
} from "@mui/icons-material";
const HeroSection = () => {
  return (
    <Box
      sx={{
        bgcolor: "#f0f4f8",
        pt: 8,
        pb: 10,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: -100,
          right: -100,
          width: 400,
          height: 400,
          bgcolor: "#e3f2fd",
          borderRadius: "50%",
          zIndex: 0,
        }}
      />

      <Container
        maxWidth="md"
        sx={{ position: "relative", zIndex: 1, textAlign: "center" }}
      >
        <Typography
          variant="h3"
          component="h1"
          fontWeight="800"
          gutterBottom
          sx={{ color: "#0d47a1", fontSize: { xs: "2rem", md: "3rem" } }}
        >
          Find Work Near You
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          paragraph
          sx={{ mb: 4, maxWidth: 600, mx: "auto" }}
        >
          Direct calls. No middlemen. Verified jobs in your local language.
        </Typography>

        <Paper
          elevation={3}
          sx={{
            p: 1,
            display: "flex",
            flexDirection: { xs: "column", sm: "row" }, 
            gap: 1,
            borderRadius: 3,
            border: "1px solid #e0e0e0",
          }}
        >
          <TextField
            fullWidth
            placeholder="Role (e.g. Driver, Cook)"
            variant="outlined"
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color="action" />
                </InputAdornment>
              ),
              sx: {
                "& fieldset": { border: "none" }, 
                bgcolor: { xs: "#f5f5f5", sm: "transparent" },
                borderRadius: 2,
              },
            }}
          />
          <TextField
            fullWidth
            placeholder="City (e.g. Hyderabad)"
            variant="outlined"
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LocationIcon color="action" />
                </InputAdornment>
              ),
              sx: {
                "& fieldset": { border: "none" },
                bgcolor: { xs: "#f5f5f5", sm: "transparent" },
                borderRadius: 2,
              },
            }}
          />

          <Button
            variant="contained"
            size="small"
            disableElevation
            sx={{
              px: 4,
              borderRadius: 2,
              bgcolor: "#1976d2",
              fontSize: "1rem",
              fontWeight: "bold",
            }}
          >
            Search
          </Button>
        </Paper>

        <Stack
          direction="row"
          spacing={1}
          justifyContent="center"
          sx={{ mt: 3, flexWrap: "wrap", gap: 1 }}
        >
          <Typography
            variant="body2"
            sx={{
              pt: 1,
              color: "text.secondary",
              display: { xs: "none", sm: "block" },
            }}
          >
            Popular:
          </Typography>
          {[
            "Delivery Boy",
            "Driver",
            "Security Guard",
            "Maid",
            "Electrician",
          ].map((tag) => (
            <Chip
              key={tag}
              label={tag}
              clickable
              sx={{
                bgcolor: "white",
                border: "1px solid #e0e0e0",
                fontWeight: 500,
              }}
            />
          ))}
        </Stack>
      </Container>
    </Box>
  );
};
export default HeroSection;
