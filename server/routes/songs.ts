import { NextApiRequest, NextApiResponse } from "next";
import Song from '../models/songs'

const get = async function (req: NextApiRequest, res: NextApiResponse) {
  const data = await Song.find();
  res.status(200).send(JSON.stringify(data));
}

const post = async function (req: NextApiRequest, res: NextApiResponse) {
  const song = new Song({...req.body});
  song.date = Math.floor(new Date().getTime() / 1000);
  song.approved = false;
  await song.save();
  res.send(JSON.stringify(song));
}

const patch = async function (req: NextApiRequest, res: NextApiResponse) {
  const query = req.query;
  if (!query.id) {
    throw new Error("No id specified.");
  }
  let song = Song.findById(query.id);
  song = {...song, ...req.body};
  await song.save();
  res.send(JSON.stringify(song));
}

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const method = req.method;
  switch(method) {
    case "GET":
      await get(req, res);
      break;
    case "POST":
      await post(req, res);
      break;
    case "PATCH":
      await patch(req, res);
      break;
    default:
      throw new Error("unsupported route");
  }
}
