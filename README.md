# REACTive Employee Directory

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](https://www.contributor-covenant.org/version/2/0/code_of_conduct/code_of_conduct.md)

## Description

This app is my first attempt at a frontend React app. This app displays employee information that can be filtered based on search parameters as well and sorted alphabetically. Click [here](https://tommywillen.github.io/REACTive-Employee-Directory/) to view the deployed app.

## Table of Contents
    
- [Description](#description)
- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Contributing](#Contributing)
- [Questions](#Questions)
    
## Installation

Create the initial react using: npx create-react-app "someAppName"
To install dependencies you need to perform npm i
You will also need to use the [Random User API](https://randomuser.me/) for random profiles.
    
## Usage

![Employee-Directory-functionality-gif](/public/assets/images/employee-directory-functionality-gif.gif)
    
To use this app you will need to create a react app using create-react-app and install the dependencies using node.js. This app uses bootstrap and react-bootstrap for some of its components as well as axios for it api calls. From the api call the user information is mapped into an array and brought down as a prop to the employee component to display the employee information. I also included a sort function to sort the employees in the array by either first or last name in ascending or descending order.

The final challenges was the search functionality. I took the state of the search form and used it to filter the employees by either first or last name without having to refresh the page.

I would like to eventually include a way to convert this into a MERN full stack to further improve its capabilities.

Click the image below to view the video tutorial for the app.

[![Employee-Directory-tutorial](/public/assets/images/employee-directory.PNG)](https://youtu.be/XgIMj2TALYU)

## License
    
The project is covered under the MIT license.
    
## Contributing
    
This is an open source application and welcome for contribution. If you would like to contribute, you can fork my repo and submit any pull request for any features you would like added.    
Contributions are protected by the contributor covenant V2.0. If you have any new features you would like to see added or want to report abuse please contact me at tommywillen12@gmail.com 
Click [here](https://www.contributor-covenant.org/version/2/0/code_of_conduct/code_of_conduct.md) for more information regarding contributor covenant V2.0.
    
## Questions
    
GitHub Profile: [TommyWillen](https://github.com/TommyWillen)

Email: tommywillen12@gmail.com