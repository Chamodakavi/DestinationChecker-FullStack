# DestinationChecker-FullStack



## 📝 Description

DestinationChecker-FullStack is a web application built with Express.js, designed to help users discover and explore travel destinations. Leveraging a robust backend powered by Express.js, this application offers a seamless experience for planning your next adventure. Key features include an intuitive interface for searching destinations, detailed information on points of interest, and tools for creating personalized travel itineraries. Whether you're planning a weekend getaway or a long-term journey, DestinationChecker-FullStack provides the resources you need to make informed decisions and create unforgettable travel experiences.

## ✨ Features

- 🕸️ Web


## 🛠️ Tech Stack

- 🚀 Express.js


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

##⚙️ Configuration & Setup
    1. Clone the Project
    ```
        git clone https://github.com/yourusername/DestinationChecker-FullStack.git
        cd DestinationChecker-FullStack
    ```

