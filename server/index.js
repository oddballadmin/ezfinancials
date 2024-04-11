import express from 'express';


const app = express();
const PORT = 3210;



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
