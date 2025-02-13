# ApartmentStats

[![Live Demo](https://img.shields.io/badge/demo-online-green.svg)](https://apartmentstats.vercel.app/)

ApartmentStats is a modern web application built with React and Vite that helps users find and evaluate apartments. The application provides detailed statistics and ratings for various aspects of apartment units, helping users make informed decisions about their next home.

## 🚀 Live Demo

Check out the live application: [ApartmentStats Demo](https://apartmentstats.vercel.app/)

## Features

- **Comprehensive Apartment Listings**: Browse through available apartments with detailed information and images
- **Advanced Search**: Find apartments based on location and preferences
- **Detailed Statistics**: View ratings and evaluations for different aspects of each apartment:
  - Bedroom quality
  - Bathroom facilities
  - Kitchen amenities
  - Laundry facilities
  - Living room features
- **Visual Rating System**: Color-coded progress bars for intuitive rating visualization
- **Responsive Design**: Fully responsive interface that works on both desktop and mobile devices
- **Dark Mode**: Modern dark theme for comfortable viewing

## Tech Stack

- **React** - Frontend framework
- **Vite** - Build tool and development server
- **React Router** - Navigation and routing
- **Lucide React** - Icon library
- **Tailwind CSS** - Utility-first CSS framework

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/apartmentstats.git
cd apartmentstats
```

2. Install dependencies:
```bash
npm install
# or
yarn
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and visit `http://localhost:5173`

### Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory.

## Project Structure

```
apartmentstats/
├── src/
│   ├── components/       # Reusable UI components
│   ├── pages/           # Page components
│   ├── utils/           # Utility functions
│   ├── App.jsx          # Main application component
│   ├── main.jsx        # Entry point
│   └── index.css        # Global styles
├── public/              # Static assets
└── index.html          # HTML template
```

## Key Components

- **ApartmentList**: Main page displaying all available apartments
- **ApartmentDetail**: Detailed view of a single apartment with statistics
- **StatDisplay**: Component for displaying ratings with progress bars
- **SearchBar**: Search functionality for apartments
- **TabbedNavigation**: Navigation component for apartment details
- **Header**: Application header with navigation and user actions

## Contributing

1. Fork the repository
2. Create a new branch for your feature
3. Commit your changes
4. Push to your branch
5. Open a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Icons provided by [Lucide](https://lucide.dev/)
- Color calculations for ratings based on performance metrics
- UI/UX inspiration from modern apartment listing platforms