# EZFinancials
To install, run NPM build to install dependencies

After that insert a .env file into both of your directories, front end and back end and insert the following:
MONGO_URL=[Path to your mongo DB]
JWT_SECRET=[A secret phrase, could be anything]
VITE_NODE_ENV=development
VITE_API_BASE_URL=http://localhost:8001
VITE_CLIENT_BASE_URL=[Path to your hosted enviorment, can be blank if only being ran locally]
VITE_PROD_API_BASE_URL=[Path to your hosted enviorment, can be blank if only being ran locally]

After your paths are set and dependencies installed, run npm run dev on the front end server to start the vite dev enviorment, and npm start to start your backend server.
The front end port should be 3000, which is the default for VITE.
