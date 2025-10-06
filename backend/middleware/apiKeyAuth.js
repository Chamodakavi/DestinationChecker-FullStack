require("dotenv").config();

function apiKeyAuth(req, res, next) {
  const apiKey = req.header("x-api-key");
  console.log("Received API Key:", apiKey);
  console.log("Expected API Key:", process.env.API_KEY);

  if (!apiKey || apiKey !== process.env.API_KEY) {
    return res.status(401).json({ error: "Invalid API key" });
  }
  next();
}

module.exports = apiKeyAuth;
