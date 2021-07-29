import express from "express";
import cors from "cors";
import { Messages } from "./utils/messages";
import { Logger } from "./utils/logger";
import { config } from 'dotenv';
config();
const { PORT } = process.env;
const port = Number(PORT);

const app = express();
app.use(cors());

app.get('/', (req, res) => res.json(req.query));

app.listen(port, () => 
    Logger.log(Messages.RUNNING_SERVER(port)));