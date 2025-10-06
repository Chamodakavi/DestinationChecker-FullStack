# DestinationChecker-FullStack



## 📝 Description

DestinationChecker-FullStack is a web application built with React.js, designed to help users discover and explore travel destinations. Leveraging a robust backend powered by Express.js, this application offers a seamless experience for planning your next adventure. Key features include an intuitive interface for searching destinations, detailed information on points of interest, and tools for creating personalized travel itineraries. Whether you're planning a weekend getaway or a long-term journey, DestinationChecker-FullStack provides the resources you need to make informed decisions and create unforgettable travel experiences.

## ✨ Features

- 🕸️ Web


## 🛠️ Tech Stack

- 🚀 React.js


## 📦 Key Dependencies

```
axios: ^1.12.2
body-parser: ^2.2.0
cors: ^2.8.5
dotenv: ^17.2.3
express: ^5.1.0
express-validator: ^7.2.1
google-auth-library: ^10.4.0
jsonwebtoken: ^9.0.2
mongoose: ^8.19.0
```

## 📁 Project Structure

```
.
├── backend
│   ├── index.js
│   ├── middleware
│   │   ├── apiKeyAuth.js
│   │   └── oauth2Auth.js
│   ├── models
│   │   └── Record.js
│   ├── package.json
│   └── routes
│       └── records.js
└── frontend
    ├── package.json
    ├── public
    │   ├── favicon.ico
    │   ├── index.html
    │   ├── logo192.png
    │   ├── logo512.png
    │   ├── manifest.json
    │   └── robots.txt
    └── src
        ├── App.css
        ├── App.js
        ├── components
        │   ├── AppBarWithSearch.jsx
        │   ├── Poster.jsx
        │   ├── RecentView.jsx
        │   ├── SearchBar.jsx
        │   ├── SearchForm.jsx
        │   └── WeatherCard.jsx
        ├── index.css
        ├── index.js
        └── utils
            ├── AuthContext.js
            └── OpenWeatherAPI.js
```

## ⚙️Configuration & Setup
    1. Clone the Project
    
        git clone https://github.com/Chamodakavi/DestinationChecker-FullStack
        cd DestinationChecker-FullStack
    
    2. Backend Setup
        Navigate to the backend directory:
        
        cd backend
        npm install
    
    Create a .env file in the backend/ folder with the following content:
    
        PORT=5000
        MONGODB_URI=your_mongodb_connection_string
        GOOGLE_CLIENT_ID=your_google_oauth_client_id
        API_KEY=your_custom_api_key
        OPENWEATHER_API_KEY=your_openweather_api_key
        APININJA_API_KEY=your_apininja_api_key
    
        Start the backend server:
        npm start
    
    3. Frontend Setup
        Navigate to the frontend directory:
    
        cd ../frontend
        npm install
    
        Create a .env file in the frontend/ folder with values for any public API keys you need (use the REACT_APP_ prefix):
    
        REACT_APP_SERVER_API_KEY=your_custom_api_key
        REACT_APP_GOOGLE_CLIENT_ID=your_google_oauth_client_id
        REACT_APP_OPENWEATHER_API_KEY=your_openweather_api_key
        # Add others as appropriate
        
        Start the frontend:
    
        npm start
    Visit http://localhost:3000 in your browser to use the app.

APIs

    Weather - https://openweathermap.org/api
    AirQuality - https://openweathermap.org/api/air-pollution
    GeoCoordinates - https://api-ninjas.com/api/geocoding
    Population - https://restcountries.com/
![image alt](https://github.com/Chamodakavi/DestinationChecker-FullStack/blob/249cfb9cd34a0d82afe4aa23068b0e53c0b037a1/Screenshot%202025-10-06%20162643.png)
![image alt](https://github.com/Chamodakavi/DestinationChecker-FullStack/blob/249cfb9cd34a0d82afe4aa23068b0e53c0b037a1/Screenshot%202025-10-06%20162727.png)
![image alt](https://github.com/Chamodakavi/DestinationChecker-FullStack/blob/249cfb9cd34a0d82afe4aa23068b0e53c0b037a1/Screenshot%202025-10-06%20162706.png)
