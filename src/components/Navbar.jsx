import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-around"}
      sx={{ gap: { sm: "7.625rem", xs: "2.5rem" }, mt: { sm: "2re,", xs: "1.25rem" }, justifyContent: "none" }}
      px="1.25em"
    >
      <Link to={"/"}>
        <img src={Logo} alt="logo" style={{ width: "48px", height: "48px", margin: "0 1.25rem" }} />
      </Link>
      <Stack direction={"row"} gap={"2.5rem"} fontSize={"1.5rem"} alignItems={"flex-end"}>
        <Link to={"/"} style={{ textDecoration: "none", color: "#3A1212", borderBottom: "3px solid #FF2625" }}>
          Home
        </Link>
        <a href="#exercises" style={{ textDecoration: "none", color: "#3A1212" }}>
          Exercises
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
