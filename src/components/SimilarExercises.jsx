import { Box, Stack, Typography } from "@mui/material";
import HorizontalScrollBar from "./HorizontalScrollbar";
import Loader from "./Loader";

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: "6.25rem", xs: "0px" } }}>
      <Typography variant="h3" mb={2} textAlign="center">
        Exercises that target the same muscle group
      </Typography>
      <Stack direction="row" sx={{ p: "2em", position: "relative" }}>
        {targetMuscleExercises.length ? <HorizontalScrollBar data={targetMuscleExercises} /> : <Loader />}
      </Stack>
      <Typography variant="h3" mb={2} textAlign="center">
        Exercises that use the same equipment
      </Typography>
      <Stack direction="row" sx={{ p: "2em", position: "relative" }}>
        {equipmentExercises.length ? <HorizontalScrollBar data={equipmentExercises} /> : <Loader />}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
