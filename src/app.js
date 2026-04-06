import express from 'express';
import cors from "cors";
import cookieParser from 'cookie-parser';

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true //allows cookies to be sent with the request
}))
app.use(express.json({limit: "16kb"}));
app.use(express.urlencoded({extended: true, limit: "16kb"}));  //extended: true allows us to parse nested objects in the request body
app.use(express.static("public"));  //serves static files from the public directory, you can put your images, css files, etc. in the public directory and they will be accessible from the root URL
app.use(cookieParser());  


//routes import

import userRouter from "./routes/user.routes.js"; //can we give any variable name in the import statement? yes, we can give any variable name in the import statement, but it is a good practice to give a meaningful name that reflects the purpose of the imported module.


//routes declaration
app.use("/api/v1/users", userRouter)

// https://localhost:8000/api/v1/users/register

export { app };