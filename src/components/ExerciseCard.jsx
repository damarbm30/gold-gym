import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";

const ExerciseCard = ({ exercise }) => {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <Stack direction="row">
        <Button
          sx={{
            ml: "1.25rem",
            color: "#fff",
            background: "#ffa9a9",
            fontSize: "0.875rem",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercise.bodyPart}
        </Button>
        <Button
          sx={{
            ml: "1.25rem",
            color: "#fff",
            background: "#fcc757",
            fontSize: "0.875rem",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercise.target}
        </Button>
      </Stack>
      <Typography
        sx={{
          ml: "1.25rem",
          color: "#000",
          fontWeight: "bold",
          mt: "0.75rem",
          pb: "0.625em",
          textTransform: "capitalize",
          fontSize: "1.5rem",
        }}
      >
        {exercise.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;
