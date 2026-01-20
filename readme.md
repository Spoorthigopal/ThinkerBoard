THINKERBOARD 
Full-Stack Notes Application (MERN Stack)
PROJECT DESCRIPTION
--------------------------------------------------------
ThinkerBoard is a full-stack Notes application built using 
MongoDB, Express, React, and Node.js (MERN stack). It allows 
users to create, view, and delete notes with an intuitive UI 
and a RESTful backend API.

This project demonstrates state management in React, API 
integration with Axios, backend routing, database interaction, 
and clean project architecture.

--------------------------------------------------------
FEATURES
--------------------------------------------------------
• Add new notes with title and content  
• View all notes sorted by latest first  
• Delete notes with instant UI update  
• Auto timestamp for each note  
• Handles API rate limits  
• User-friendly responsive UI  
• Clean frontend and backend separation  

--------------------------------------------------------
TECHNOLOGIES USED
--------------------------------------------------------
Frontend:
  • React  
  • React Router  
  • Axios  
  • Tailwind CSS + DaisyUI  
  • React Hot Toast  
  • Lucide React Icons  

Backend:
  • Node.js  
  • Express.js  
  • MongoDB  
  • Mongoose  

--------------------------------------------------------
PROJECT STRUCTURE
--------------------------------------------------------
thinkerboard/

├── backend/               -- Server-side backend  
│   ├── controllers/       -- API logic  
│   │   └── notesController.js  
│   ├── models/            -- MongoDB models  
│   │   └── Note.js  
│   ├── routes/            -- Express route definitions  
│   │   └── notes.js  
│   └── server.js          -- App entry-point  

├── frontend/              -- Client-side frontend  
│   ├── components/        -- Reusable UI components  
│   ├── pages/             -- Page views  
│   ├── lib/               -- Axios config & utilities  
│   └── main.jsx           -- Frontend entry-point  

├── .gitignore  
└── README.txt

--------------------------------------------------------
INSTALLATION & SETUP
--------------------------------------------------------
1. Clone the repository:
   git clone https://github.com/Spoorthigopal/ThinkerBoard

2. Backend Setup:
   cd ThinkerBoard/backend
   npm install

   Create a .env file with:
     MONGO_URI=your_mongodb_connection_string
     PORT=5000

   Start backend server:
     npm start

3. Frontend Setup:
   cd ../frontend
   npm install
   npm run dev

Start your frontend on http://localhost:5173 and backend on 
http://localhost:5000 (default).

--------------------------------------------------------
API ENDPOINTS
--------------------------------------------------------
GET     /notes         - Get all notes  
GET     /notes/:id     - Get note by ID  
POST    /notes         - Create a new note  
PUT     /notes/:id     - Update a note  
DELETE  /notes/:id     - Delete a note  

--------------------------------------------------------
KEY LEARNINGS
--------------------------------------------------------
• MERN stack architecture  
• Express routing and controllers  
• CRUD operations with MongoDB & Mongoose  
• Axios API integration  
• React component design & hooks  
• UI styling with Tailwind + DaisyUI  

--------------------------------------------------------
FUTURE IMPROVEMENTS
--------------------------------------------------------
• Add edit note functionality  
• Implement search & filters  
• Add user authentication (login/signup)  
• Deploy frontend and backend to cloud  
• Add test coverage  

--------------------------------------------------------
AUTHOR
--------------------------------------------------------
Name: Spoorthi G M  
Role: Full Stack Developer  
Goal: Cloud & DevOps Engineer  

--------------------------------------------------------
LICENSE
--------------------------------------------------------
This project is released under the MIT License.
