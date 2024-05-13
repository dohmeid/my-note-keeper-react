# my-note-keeper-react :notebook::notebook:	

### FTS-TASK9 - facilitating CRUD (Create, Read, Update, Delete) operations using Node.js and ReactJS

### :stars: Overview
This repository creates a note-keeping application that performs CRUD operations on notes. It consists of a frontend (FE) component that complements the backend (BE) part of the website. 

-----
### :dart: Features
- Each note has: a title, content, a creation date.
- The frontend part of the app facilitates the CRUD (Create, Read, Update, Delete) operations implemented in Node.js.
- The app implements the following endpoints:
    - **`GET /notes`**: Retrieve all notes.
    - **`POST /notes`**: Add a new note.
    - **`DELETE /notes/:id`**: Delete a specific note using its ID.
    - **`PUT /notes/:id`**: Update a specific note using its ID.
- The app conects to a MongoDB database and uses Mongoose for object modeling.
- The app handles the potential errors gracefully. If an error occurs, the API returns a suitable status code and a descriptive error message.

-----
### :eye: Preview
You can access a live demo of this application here -> (still under development) 

-----

### :space_invader: Technologies Used
<div align="left">
    <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" height="30" />
    <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" height="30" />
    <img src="https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" height="30" />
    <img src="https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white" height="30" />
    <img src="https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white" height="30" />
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" height="30" />
    <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" height="30" />
</div>

-----

### :joystick: Getting Started 
To run this application locally, follow these steps:
1. Clone the repository:
   ```
   git clone https://github.com/dohmeid/my-note-keeper-react.git
   ```
2. Go to folder my-note-keeper-react
   ```
   cd my-note-keeper-react
   ```
3. Install the required dependencies from package.json
   ```
   npm i
   ```

4. Start the development server using:
   ```
    npm start
   ```
5. You can access the project by navigating to http://localhost:3000 in your web browser.
