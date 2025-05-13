# Diverr

Diverr is a Fiverr-inspired platform where users can explore, create, and manage gigs. It provides a marketplace for freelancers and clients to connect and collaborate on various services.

## Features

- **Gig Management**: Add, update, and remove gigs.
- **Filtering and Sorting**: Search and filter gigs by various criteria.
- **More Features to Come**


## Tech Stack

- **Frontend**: React, Redux, SCSS
- **Backend**: Node.js (assumed for API integration)
- **Build Tool**: Vite
- **Real-Time Communication**: Socket.io
- **Styling**: SCSS with modular components
- **State Management**: Redux

### Key Files

- **`src/pages/GigIndex.jsx`**: Main page for displaying and managing gigs.
- **`src/store`**: Redux store and reducers for managing application state.
- **`src/services`**: Utility services for API calls, storage, and event handling.
- **`src/cmps`**: Reusable components like `GigList`, `GigFilter`, and `AppHeader`.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/diverr.git
   cd diverr
2. Install dependencies:
   npm install
3. Start the development server:
   npm run dev:local / dev:local:mac
- **Currently Only Works Locally**

-- **Development Notes**

- **Mock Data**: The project includes mock data for gigs and users in src/services.
- **Service Switching**: Use VITE_LOCAL to toggle between local and remote services.
- **SCSS Structure**: Organized into setup, basics, pages, and components for maintainable styling.
