import express from 'express';
import dotenv from 'dotenv';
import { sequelize } from './Data/Sequelize.js';
import fs from 'fs';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(
    cors({
        origin: process.env.FRONTEND_URL,
        credentials: true,
    }),
);
app.use(cookieParser());
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    }),
);
fs.readdir('./Controllers', (err, files) => {
    for (let i = 0; i < files.length; i++) {
        const file = files[i].replace('Controller.js', '');
        import(`./Controllers/${files[i]}`)
            .then((controller) => {
                console.log(`\nLoaded controller: /api/${file.toLowerCase()}`);
                app.use(`/api/${file.toLowerCase()}`, controller.default);
            })
            .catch((err) => console.error(err));
    }
});

sequelize
    .sync({
        alter: true /*force: true*/,
    })
    .catch((err) => console.log('error occured while database sync: ' + err));

app.listen(port, () => {
    console.log('API: Server is running on port: ' + port);
});
