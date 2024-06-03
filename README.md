# MovieLand

## Overview

This is a movie library web application developed as part of an assignment. The application allows users to search for movies, view movie details, and add movies to their favorites. The application is still under development, and some functionalities are yet to be implemented.

## Features

### Movie Search
- Users can search for movies and view details using the OMDB API.

### Favorites
- Users can add movies to their favorites list.

## Features Under Development

### User Authentication
- Sign In / Sign Up functionality.

### Movie Lists
- Users will be able to create multiple movie lists similar to YouTube playlists.

### Privacy Settings for Lists
- Lists can be set to public (anyone with the link can see) or private (only the creator can see).

### Improved Layout
- Enhancing the layout for a better user experience.

## Tech Stack

### Frontend
- **Language:** JavaScript
- **Library/Framework:** React.js
- **Styling:** CSS

### Backend
- **Firebase**

### API
- **OMDB API:** Used for fetching movie data.

### Deployment
- **Netlify**

## Key Files and Directories

- **src/**: Contains the source code for the React application.
  - **components/**: Contains React components for different parts of the application.
- **App.js**: The main app component that sets up the routing and structure of the app.
- **index.js**: The entry point of the React application.
- **App.css**: Styling for the application.

## Setup Instructions

### Prerequisites

- Node.js and npm installed
- Firebase setup

### Installation

1. Clone the repository
    ```sh
    git clone [GitHub Repo Link]
    cd movie-library-web-app
    ```

2. Install dependencies
    ```sh
    npm install
    ```

3. Set up environment variables
    - Create a `.env` file in the root directory and add your OMDB API key and Firebase configuration.
    ```env
    REACT_APP_OMDB_API_KEY=your_omdb_api_key
    REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
    REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
    REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
    REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
    REACT_APP_FIREBASE_APP_ID=your_firebase_app_id
    ```

4. Start the application
    ```sh
    npm start
    ```

5. Open your browser and navigate to `http://localhost:3000`

   
## Deployment

The application is hosted online and can be accessed via the following links:
- **Live Website:** https://gleaming-daffodil-d33f65.netlify.app/

## Usage

1. **Search Movies:**
   - Use the search bar on the home screen to find movies.

2. **Add to Favorites:**
   - Click on the favorite icon to add a movie to your favorites list.

