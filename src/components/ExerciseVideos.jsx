import { Box, Stack, Typography } from "@mui/material";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return "Loading...";
  return (
    <Box sx={{ mt: { lg: "12.5rem", xs: "1.25rem" } }} p="1.25em">
      <Typography variant="h3" mb="2rem" textAlign="center">
        Watch <span style={{ color: "#ff2625", textTransform: "capitalize" }}>{name}</span> exercise videos
      </Typography>
      <Stack
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
        sx={{ flexDirection: { lg: "row" }, gap: { lg: "110px", xs: "0px" } }}
      >
        {exerciseVideos?.slice(0, 3).map((video, index) => (
          <a
            className="exercise-video"
            key={index}
            href={`https://www.youtube.com/watch?v=${video.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img src={video.video.thumbnails[0].url} alt={video.video.title} />
            <Box>
              <Typography variant="h5" color="#000">
                {video.video.title}
              </Typography>
              <Typography variant="h6" color="#000" fontWeight="normal">
                {video.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
