🌎 Destination Checker
A web-based service-oriented application integrating multiple public APIs, secure authentication via OAuth and API keys, and MongoDB-powered persistent storage. The system enables users to search travel destinations and receive up-to-date weather, air quality, and demographic information, while maintaining a secure and modern tech stack.

Features
🔎 Search Destinations: Enter a city and country to fetch live data about weather, air quality, and population.

🌄 Aggregated Insights: Get a unified summary combining OpenWeather, Air Quality, and country stats.

🛡️ Authentication: Uses Google OAuth 2.0 and API Key headers for route protection.

🗄️ Data Storage: Automatically logs search results to a secure MongoDB database.

📝 Recently Viewed: Displays your five most recent destination queries.

✨ Modern UI: Responsive interface built with React and Material-UI.

Tech Stack
Frontend: React, Material-UI (MUI)

Backend: Node.js, Express

Database: MongoDB + Mongoose

APIs:

OpenWeather (weather details)

OpenAQ/APINinja (air quality, geocoding)

RestCountries (demographic data)

Security: OAuth 2.0 (Google Sign-in), API Key Authentication

Config: .env files for secret management

Setup & Running Locally
Prerequisites
Node.js (>= 16.x)

npm or yarn

MongoDB instance (local or Atlas)

1. Clone the Repository
bash
git clone https://github.com/yourusername/destination-checker.git
cd destination-checker
2. Backend Setup
bash
cd backend
npm install
Create a .env file under backend/:

text
PORT=5000
MONGODB_URI=YOUR_MONGODB_CONNECTION_STRING
GOOGLE_CLIENT_ID=your_google_oauth_client_id
API_KEY=your_custom_api_key
OPENWEATHER_API_KEY=your_openweather_api_key
APININJA_API_KEY=your_apininja_api_key
Start the backend:

bash
npm start
3. Frontend Setup
bash
cd ../frontend
npm install
Create a .env under frontend/:

text
REACT_APP_SERVER_API_KEY=your_custom_api_key
REACT_APP_GOOGLE_CLIENT_ID=your_google_oauth_client_id
REACT_APP_OPENWEATHER_API_KEY=your_openweather_api_key
# (Others as appropriate)
Start the frontend:

bash
npm start
The app should be available at: http://localhost:3000

Key Implementation Details
API Data Aggregation:
The React frontend collects, combines, and displays data from multiple sources using REST APIs and securely sends results to the backend.

Secure Endpoints:
Backend routes are protected by both API key and OAuth2 middleware.

MongoDB Storage:
Server persists each destination search as a new record. The /api/records/recent-destinations route supports fetching the last five searches.

Error Handling:
Both backend and frontend handle errors gracefully, with informative messages for users.

Environment Variables:
All sensitive API keys and credentials are managed via .env files and never hardcoded.

Example API Usage
POST /api/records
Records new destination searches (protected route).

GET /api/records/recent-destinations
Returns the user's last five searched destinations (protected route).

Screenshots
(Include screenshots of the main search UI and the recently viewed section, as shown in your running app.)

How to Use
Search for any city and country.

View real-time weather, AQI, safety rating, and demographic details.

Your recent searches appear automatically in the “Recently Viewed Destinations” section.

Project Structure
text
backend/
  models/
  routes/
  middleware/
  index.js
  .env
frontend/
  src/
    components/
      RecentView.jsx
    App.jsx
  .env
Notes
Ensure you never commit .env files with real credentials to public repositories.

The backend must run for the frontend to retrieve and save destination history.
