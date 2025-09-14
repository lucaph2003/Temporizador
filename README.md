# Electron Countdown App

This project is an Electron application that allows users to set a countdown timer for a future time. When the countdown reaches zero, a sound will play to alert the user.

## Project Structure

```
electron-countdown-app
├── src
│   ├── main.js          # Main process of the Electron application
│   ├── renderer.js      # Renderer process managing countdown logic
│   ├── index.html       # Main HTML file for user interface
│   ├── styles
│   │   └── style.css    # CSS styles for the application
│   └── assets
│       └── sound.mp3    # Audio file played when countdown ends
├── package.json         # Configuration file for npm
└── README.md            # Documentation for the project
```

## Getting Started

To set up and run the Electron Countdown App, follow these steps:

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd electron-countdown-app
   ```

2. **Install dependencies**:
   Make sure you have Node.js installed. Then run:
   ```
   npm install
   ```

3. **Run the application**:
   Use the following command to start the application:
   ```
   npm start
   ```

## Usage

- Open the application and select a future time using the provided input fields.
- Click the "Start Countdown" button to begin the countdown.
- When the countdown reaches zero, a sound will play to notify you.

## License

This project is licensed under the MIT License.