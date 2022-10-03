import { Box, Stack, Typography, Button } from "@mui/material";
import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "13.25rem", xs: "4.375rem" },
        ml: { sm: "3.125rem" },
      }}
      position="relative"
      p="1.25em"
    >
      <Typography color="#FF2625" fontWeight={600}>
        Fitness Club
      </Typography>
      <Typography fontWeight={700} sx={{ fontSize: { lg: "2.75rem", xs: "2.5rem" } }} mb="1.5rem" mt="1.875rem">
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography fontSize="1.375rem" lineHeight="2.1875rem" mb={2}>
        Check out the most effective exercises
      </Typography>
      <Button variant="contained" color="error" href="#exercises" sx={{ backgroundColor: "#FF2625", p: "0.75em" }}>
        Explore Exercises
      </Button>
      <Typography
        fontWeight={600}
        color="#FF2625"
        sx={{
          opacity: 0.1,
          display: { lg: "block", xs: "none" },
        }}
        fontSize="12.5rem"
      >
        Exercise
      </Typography>
      <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
