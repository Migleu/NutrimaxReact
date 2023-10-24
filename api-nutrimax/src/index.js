import express from "express";
import {routes} from './Routes/routes.js';

const app= express();


app.use(express.json());
app.use(routes);



app.listen(3000, () => {
    console.log("Server is running... http://localhost:3000");
});