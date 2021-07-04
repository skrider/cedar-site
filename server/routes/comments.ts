import { NextApiRequest, NextApiResponse } from "next";
import Comment from '../models/comments'

const get = async function (req: NextApiRequest, res: NextApiResponse) {
  const query = req.query;
  let comments;
  if (query.id) {
    comments = Comment.findById(query.id);
  } else {
    comments = Comment.find();
    if (query.rejected) {
      comments.where({rejected: query.rejected})
    }
    if (query.approved) {
      comments.where({approved: query.approved})
    }
    comments
      .select(`_id content name date`)
      .sort({date: -1});
  }
  const data = await comments;
  res.status(200).send(JSON.stringify(data));
}

const post = async function (req: NextApiRequest, res: NextApiResponse) {
  const comment = new Comment({...req.body});
  comment.date = Math.floor(new Date().getTime() / 1000);
  comment.approved = false;
  comment.rejected = false;
  await comment.save();
  res.send(JSON.stringify(comment));
}

const patch = async function (req: NextApiRequest, res: NextApiResponse) {
  const query = req.query;
  if (!query.id) {
    throw new Error("No id specified.");
  }
  let comment = Comment.findById(query.id);
  comment = {...comment, ...req.body};
  await comment.save();
  res.send(JSON.stringify(comment));
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
