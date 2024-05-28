# Holiwise interview exercise

## Title:

Group trip

### Project Description

Organise a group trip with your friends

### Product assumptions

- Folders are essentially groups and are used interchangeably throughout the application.
- The decision was made to not implement any storage solution or in-memory data persistence as the use-case does not need one. Therefore, data is not retained between refresh or sessions.
- It is assumed that users already have some friends registered in the application, making it easier for prototyping the process of adding users to groups and voting.
- A user can:
  - create multiple groups/folders
  - add multiple locations for voting
  - vote for other users, so we can visualise multiple votes on a location

### Project directory structure

    ├── mock/ # all mocked data
    ├── app/
    ├── server/ # Server-side code
    │ ├── docs/ # hidden route for documentation about the exercise
    | ├── groups/ # group page
    | ├── saved # saved location page
    | ├── global.css # global styles
    | ├── layout.js # global shared layout
    | └── page.js # main page(home)
    ├── components/.js # folder for all shared components
    ├── context.js # shared state context
    | ├── ... global # global state
    | └── ... useSidebar # sidebar state
    ├── public/ # Public assets
    ├── utils/ # utils functions and constants
    ├── gitignore # git ignored files
    ├── package.json # Frontend dependencies and scripts
    ├── README.md # Project documentation
    ├── tailwind.json # tailwind style configurations
    └── typescript.json # typeccript style configurations

## Languages and Tools

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/>
<a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/>
<a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" width="40" height="40"/> </a> <a href="https://nextjs.org" target="_blank" rel="noreferrer"> <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbranditechture.agency%2Fbrand-logos%2Fwp-content%2Fuploads%2Fwpdm-cache%2FNext.js-900x0.png" alt="tailwind" width="60" height="40"/> </a>

## Requirements

Follow the instructions provided in the official documentation for your OS

- Nodejs and npm -> https://nodejs.org/en/download/

## How to run the application

#### Run it Manually

To run the application manually, you need Node.js and npm installed. Follow these steps:

1. Start the backend server:

   1. from the root folder (holiwise-app): install dependencies
      ```bash
      npm install
      ```
   2. run the server
      ```bash
      npm run dev
      ```

### Access the UI Application

Once the application is running, you can access the UI by opening [http://localhost:3000](http://localhost:3000) in your browser

### Port Conflict

If you encounter port conflicts, it might be due to other applications using the same ports. Before running the application, ensure that ports 3000 is available. If not, you can modify the application port

### Run Unit tests (Jest)

They are no unit tests

### Run Unit tests (Jest)

There are many different aspects to improve in the code base. - better folder structure - variable and function naming - some clean up - simplification and decoupling of bigger or complex components

## Author

### `Adilson Mendes`
