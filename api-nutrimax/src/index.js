import express from "express";
import {routes} from './Routes/routes.js';
import cors from "cors";


const app= express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(routes);



app.listen(3000, () => {
    console.log("Server is running... http://localhost:3000");
});