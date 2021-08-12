require('dotenv').config();
import { NextApiRequest, NextApiResponse } from "next";
import comments from "./routes/comments";
import songs from "./routes/songs";
import state from "./routes/state";
import startup from './startup';
import mongoose from 'mongoose';

export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (!mongoose.connection.readyState) {
    await startup();
  }
  const route = req.query.route;
  try {
    switch(route[0]) {
      case "comments":
        await comments(req, res);
        break;
      case "songs":
        await songs(req, res);
        break;
      case "state":
        await state(req, res);
        break;
      default:
        throw new Error("Unsupported route");
    }
  } catch (err) {
    console.log(`caught in root error handler: \n${err}`)
  }
}
