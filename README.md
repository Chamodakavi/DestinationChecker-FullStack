🌎 Destination CheckerA web-based service-oriented application integrating multiple public APIs, secure authentication via OAuth and API keys, and MongoDB-powered persistent storage. The system enables users to search travel destinations and receive up-to-date weather, air quality, and demographic information, while maintaining a secure and modern tech stack.Features🔎&nbsp;Search Destinations:&nbsp;Enter a city and country to fetch live data about weather, air quality, and population.🌄&nbsp;Aggregated Insights:&nbsp;Get a unified summary combining OpenWeather, Air Quality, and country stats.🛡️&nbsp;Authentication:&nbsp;Uses Google OAuth 2.0 and API Key headers for route protection.🗄️&nbsp;Data Storage:&nbsp;Automatically logs search results to a secure MongoDB database.📝&nbsp;Recently Viewed:&nbsp;Displays your five most recent destination queries.✨&nbsp;Modern UI:&nbsp;Responsive interface built with React and Material-UI.Tech StackFrontend:&nbsp;React, Material-UI (MUI)Backend:&nbsp;Node.js, ExpressDatabase:&nbsp;MongoDB + MongooseAPIs:OpenWeather (weather details)OpenAQ/APINinja (air quality, geocoding)RestCountries (demographic data)Security:&nbsp;OAuth 2.0 (Google Sign-in), API Key AuthenticationConfig:&nbsp;.env&nbsp;files for secret managementSetup &amp; Running LocallyPrerequisitesNode.js (&gt;= 16.x)npm or yarnMongoDB instance (local or Atlas)1.&nbsp;Clone the Repositorybashgit clone https://github.com/yourusername/destination-checker.git
cd destination-checker
2.&nbsp;Backend Setupbashcd backend
npm install
Create a&nbsp;.env&nbsp;file under&nbsp;backend/:textPORT=5000
MONGODB_URI=YOUR_MONGODB_CONNECTION_STRING
GOOGLE_CLIENT_ID=your_google_oauth_client_id
API_KEY=your_custom_api_key
OPENWEATHER_API_KEY=your_openweather_api_key
APININJA_API_KEY=your_apininja_api_key
Start the backend:bashnpm start
3.&nbsp;Frontend Setupbashcd ../frontend
npm install
Create a&nbsp;.env&nbsp;under&nbsp;frontend/:textREACT_APP_SERVER_API_KEY=your_custom_api_key
REACT_APP_GOOGLE_CLIENT_ID=your_google_oauth_client_id
REACT_APP_OPENWEATHER_API_KEY=your_openweather_api_key
# (Others as appropriate)
Start the frontend:bashnpm start
The app should be available at:&nbsp;http://localhost:3000Key Implementation DetailsAPI Data Aggregation:The React frontend collects, combines, and displays data from multiple sources using REST APIs and securely sends results to the backend.Secure Endpoints:Backend routes are protected by both API key and OAuth2 middleware.MongoDB Storage:Server persists each destination search as a new record. The&nbsp;/api/records/recent-destinations&nbsp;route supports fetching the last five searches.Error Handling:Both backend and frontend handle errors gracefully, with informative messages for users.Environment Variables:All sensitive API keys and credentials are managed via&nbsp;.env&nbsp;files and never hardcoded.Example API UsagePOST /api/recordsRecords new destination searches (protected route).GET /api/records/recent-destinationsReturns the user's last five searched destinations (protected route).Screenshots(Include screenshots of the main search UI and the recently viewed section, as shown in your running app.)How to UseSearch for any city and country.View real-time weather, AQI, safety rating, and demographic details.Your recent searches appear automatically in the “Recently Viewed Destinations” section.Project Structuretextbackend/
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
NotesEnsure you never commit&nbsp;.env&nbsp;files with real credentials to public repositories.The backend must run for the frontend to retrieve and save destination history.
