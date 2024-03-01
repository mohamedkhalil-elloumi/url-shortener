import React, { useState } from "react";
import { Button, TextField, Typography, Grid, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { postShortenUrl } from "../services/apiServices";
import { isValidUrl } from "../utils/isValidUrl";

const ShortenUrlForm: React.FC = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    event.preventDefault();
    setShortUrl("");
    setError("");

    if (!isValidUrl(url) || !url) {
      setError("Please enter a valid URL.");
      setIsLoading(false);
      return;
    }

    try {
      const response = await postShortenUrl(url);
      setShortUrl(response.shortenedUrl);
      navigate(`/summary`, {
        state: {
          allowed: true,
          originalUrl: url,
          shortenedUrl: response.shortenedUrl,
          counter: response.counter,
          createdAt: response.createdAt,
        },
      });
    } catch (error) {
      setError("Error shortening URL.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <form
        onSubmit={handleSubmit}
        style={{ width: "100%", maxWidth: "500px" }}
      >
        <Grid container direction="column" spacing={2} alignItems="center">
          <Grid item xs={12} style={{ width: "inherit" }}>
            <TextField
              label="Long URL"
              variant="outlined"
              fullWidth
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              error={!!error}
              helperText={error}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={isLoading}
            >
              Shorten URL
            </Button>
          </Grid>
          {shortUrl && (
            <Grid item xs={12}>
              <Typography variant="body1" style={{ textAlign: "center" }}>
                Short URL: <a href={shortUrl}>{shortUrl}</a>
              </Typography>
            </Grid>
          )}
        </Grid>
      </form>
    </Box>
  );
};

export default ShortenUrlForm;
