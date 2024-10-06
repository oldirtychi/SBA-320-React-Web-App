<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Weather App README</title>
</head>
<body>
  <h1>Weather App</h1>
  <p>A responsive and interactive weather application built with React and Vite. This app fetches weather data for a given city using the OpenWeatherMap API and displays current weather conditions, including temperature, humidity, and wind speed.</p>

  <h2>Table of Contents</h2>
  <ul>
    <li><a href="#demo">Demo</a></li>
    <li><a href="#features">Features</a></li>
    <li><a href="#screenshots">Screenshots</a></li>
    <li><a href="#technologies-used">Technologies Used</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#environment-variables">Environment Variables</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
  </ul>

  <h2 id="demo">Demo</h2>
  <p>You can access a live demo of the app <a href="https://erics-weather-app-d6b34d.netlify.app/">here</a>

  <h2 id="features">Features</h2>
  <ul>
    <li>Fetches and displays current weather data for a given city.</li>
    <li>Displays weather icons representing the current weather condition.</li>
    <li>Provides temperature, humidity, and wind speed data.</li>
    <li>Responsive design for optimal viewing on various devices.</li>
  </ul>

  <h2 id="screenshots">Screenshots</h2>
  
  <img src= "../weather-app/public/screenshot.PNG" alt="Weather App Screenshot">

  <h2 id="technologies-used">Technologies Used</h2>
  <ul>
    <li>React</li>
    <li>Vite</li>
    <li>OpenWeatherMap API</li>
  </ul>

  <h2 id="getting-started">Getting Started</h2>
  <p>To get a local copy up and running, follow these simple steps:</p>

  <h3 id="prerequisites">Prerequisites</h3>
  <ul>
    <li>Node.js (v14 or higher)</li>
    <li>npm or yarn</li>
  </ul>

  <h3 id="installation">Installation</h3>
  <ol>
    <li>Clone the repo
      <pre><code>git clone https://github.com/oldirtychi/SBA-320-React-Web-App
cd weather-app</code></pre>
    </li>
    <li>Install NPM packages
      <pre><code>npm install</code></pre>
    </li>
    <li>Create a <code>.env</code> file in the root directory and add your OpenWeatherMap API key:
      <pre><code>VITE_APP_ID=your_openweathermap_api_key</code></pre>
    </li>
    <li>Start the development server
      <pre><code>npm run dev</code></pre>
    </li>
    <li>Open the generated link in your browser</code></li>
  </ol>

  <h2 id="environment-variables">Environment Variables</h2>
  <p>To run this project, you will need to add the following environment variables to your <code>.env</code> file:</p>
  <ul>
    <li><code>VITE_APP_ID</code>: Your OpenWeatherMap API key.</li>
  </ul>

  <h2 id="usage">Usage</h2>
  <ol>
    <li>Enter a city name in the search bar and press Enter or click the search icon.</li>
    <li>View the current weather conditions for the specified city.</li>
  </ol>


  <h2 id="license">License</h2>
  <p>Distributed under the MIT License. See <code>LICENSE</code> for more information.</p>
</body>
</html>
