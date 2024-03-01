import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";

type ShortenUrlSummaryProps = {
  originalUrl: string;
  shortenedUrl: string;
  counter: number;
  createdAt: string;
};

const ShortenUrlSummary: React.FC<ShortenUrlSummaryProps> = ({
  originalUrl,
  shortenedUrl,
  counter,
  createdAt,
}) => {
  const navigate = useNavigate();

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      flexDirection="column"
    >
      <Card sx={{ minWidth: 275, maxWidth: 600, marginBottom: 2 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Short URL Summary
          </Typography>
          <Typography variant="h5" component="div">
            Original URL:{" "}
            <a href={originalUrl} target="_blank" rel="noopener noreferrer">
              {originalUrl}
            </a>
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Shortened URL:{" "}
            <a href={shortenedUrl} target="_blank" rel="noopener noreferrer">
              {shortenedUrl}
            </a>
          </Typography>
          <Typography variant="body2">Click Count: {counter}</Typography>
          <Typography variant="body2">Created At: {createdAt}</Typography>
        </CardContent>
      </Card>
      <Button variant="contained" onClick={() => navigate("/")}>
        Go to Home
      </Button>
    </Box>
  );
};

export default ShortenUrlSummary;
