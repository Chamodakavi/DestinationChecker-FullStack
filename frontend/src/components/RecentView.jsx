import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography, Grid, Box } from "@mui/material";

const RECENT_ENDPOINT = `${process.env.REACT_APP_BACKEND_URL}/api/records/recent-destinations`;

export default function RecentView({ accessToken, apiKey }) {
  const [recent, setRecent] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(RECENT_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "x-api-key": apiKey,
      },
    })
      .then(async (res) => {
        if (!res.ok) throw new Error("Failed to load recent destinations!!!");

        return res.json();
      })
      .then((data) => setRecent(data))

      .catch((err) => setError(err.message));
  }, [accessToken, apiKey]);

  if (error)
    return (
      <Card sx={{ m: 2, bgcolor: "grey.900", color: "error.main" }}>
        <CardContent>Error: {error}</CardContent>
      </Card>
    );

  if (!recent.length)
    return (
      <Card sx={{ m: 2, bgcolor: "grey.900", color: "grey.200" }}>
        <CardContent>No recent destinations viewed.</CardContent>
      </Card>
    );
  console.log(recent);

  return (
    <Box sx={{ p: 3, bgcolor: "rgba(0,0,0,0.6)", borderRadius: 5, m: 2 }}>
      <Typography
        variant="h5"
        sx={{
          color: "#ffd700",
          mb: 2,
          fontWeight: 700,
          letterSpacing: 1,
        }}
      >
        Recently Viewed Destinations
      </Typography>
      <Grid container spacing={2}>
        {recent.map((rec) => {
          const d = rec.data;

          return (
            <Grid item xs={12} sm={6} md={4} key={rec._id}>
              <Card
                sx={{
                  bgcolor: "rgba(34,40,49,0.95)",
                  borderRadius: 3,
                  color: "#eeeeee",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.22)",
                }}
              >
                <CardContent>
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: "bold", color: "#ffd700" }}
                  >
                    {d.city}, {d.country || ""}
                  </Typography>
                  <Typography sx={{ my: 1 }}>
                    <Box component="span" sx={{ fontWeight: 500 }}>
                      Temperature:
                    </Box>{" "}
                    {d.weatherDetails?.main?.temp
                      ? `${(d.weatherDetails.main.temp - 273.15).toFixed(1)}°C`
                      : "N/A"}
                  </Typography>
                  <Typography>
                    <Box component="span" sx={{ fontWeight: 500 }}>
                      AQI:
                    </Box>{" "}
                    {d.airQuality?.quality || "N/A"}
                  </Typography>
                  <Typography>
                    <Box component="span" sx={{ fontWeight: 500 }}>
                      Population:
                    </Box>{" "}
                    {d.population?.toLocaleString() || "N/A"}
                  </Typography>
                  {/* Add more stats here if desired */}
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
