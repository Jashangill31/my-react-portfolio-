
Portfolio Website - Jashandeep Kaur
Welcome to my portfolio website! This project showcases the work I have completed as part of the Full Stack Web Development program at Red River College (RRC) in Manitoba.

This project is built with React and is Dockerized for production deployment. You can follow the steps below to get the project up and running locally or deploy it via Docker.

🚀 Getting Started
Prerequisites
Ensure you have the following installed:

Docker: To run the app in a containerized environment.

Node.js and npm: For local development (if you're not using Docker).

Visual Studio Code (or any text editor of your choice).

Installing Dependencies
To get started, clone the repository and install dependencies:

bash
Copy
git clone https://github.com/your-username/my-react-portfolio.git
cd my-react-portfolio
npm install
Running Locally (Development Mode)
To start the development server locally, use the following command:

bash
Copy
npm start
Visit http://localhost:3000 to view the app in your browser.

The app will automatically reload if you make any changes to the code.

Running with Docker
Clone the repository:

bash
Copy
git clone https://github.com/your-username/my-react-portfolio.git
cd my-react-portfolio
Build the Docker image:

bash
Copy
docker build -t lastName_firstName_coding_assignment14 .
Run the Docker container:

bash
Copy
docker run -d -p 5575:80 --name lastName_firstName_coding_assignment14 lastName_firstName_coding_assignment14
Open http://localhost:5575 in your browser to view the deployed portfolio.

📂 Project Structure
Here’s a quick overview of the directory structure:

bash
Copy
/public
    /favicon.ico
    /index.html
    /logo192.png
    /logo512.png
    /manifest.json
/src
    /App.js
    /index.js
    /components
    /styles
.gitignore
Dockerfile
README.md
package.json
📚 Portfolio Sections
1. Basic Information
Name: Jashandeep Kaur

Program: Full Stack Web Development (Red River College, Manitoba)

Status: International Student

Passion: Passionate about technology and coding, aiming to build meaningful software solutions.

2. My Work
Project 1: React Basics
This project demonstrates the basics of React, including components, state management, and routing. It served as an introduction to React and helped me understand the fundamentals of structuring a React application.

Project 2: Full-Stack Web Application
A full-stack application where I integrated React (front-end) with Node.js (back-end). Key features:

User registration and login

CRUD operations using MongoDB

RESTful APIs for communication

💻 Tech Stack
The technologies used in building this portfolio:

React: JavaScript library for building the user interface.

Node.js: JavaScript runtime environment for back-end development.

MongoDB: NoSQL database for handling data (for full-stack apps).

Docker: To containerize the application.

JavaScript (ES6): Core language for app development.

HTML & CSS: To create the structure and styling.

📄 Developer Setup
To set up the development environment:

Clone the repository:

bash
Copy
git clone https://github.com/your-username/my-react-portfolio.git
cd my-react-portfolio
Install dependencies:

bash
Copy
npm install
Start the development server:

bash
Copy
npm start
This will start the server at http://localhost:3000.

📦 Dockerized Deployment
The project is Dockerized for easy deployment. Here's how to run the app in a containerized environment:

Build the Docker image:

bash
Copy
docker build -t lastName_firstName_coding_assignment14 .
Run the container:

bash
Copy
docker run -d -p 5575:80 --name lastName_firstName_coding_assignment14 lastName_firstName_coding_assignment14
Visit http://localhost:5575 in your browser to view the app.

📝 Important Scripts
Here are some important npm scripts:

npm start
Runs the app in development mode. Open http://localhost:3000 to view it in the browser. The page will reload when you make changes.

npm run build
Builds the app for production in the build folder. It optimizes the app for the best performance, minifies the code, and makes it ready for deployment.

npm test
Launches the test runner in the interactive watch mode. For more details on running tests, refer to the Create React App documentation.

npm run eject
If you need to modify the internal configuration of your project, use eject. Be cautious as this is a one-way operation and you won't be able to revert back.

📚 References
How to Build a Portfolio Website with React

Build a Stunning Portfolio with React JS

📍 Contact
You can reach me via:

Email: jashandeep8736@gmail.com

GitHub: github.com/Jashangill31
