import { Box, Stack, Typography } from "@mui/material";

import Logo from "../assets/images/Logo-1.png";

const Footer = () => {
  return (
    <Box mt="5rem" bgcolor="#fff3f4">
      <Stack gap="40px" alignItems="center" px="2.5em" pt="1.5em">
        <img src={Logo} alt="logo" width="200px" height="40px" />
        <Typography variant="h5" pb="2.5em" mt="1.25rem">
          Created by Damar Buana Murti
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
