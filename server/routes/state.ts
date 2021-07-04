import { NextApiRequest, NextApiResponse } from "next";

const get = function (req: NextApiRequest, res: NextApiResponse) {
  const state : AppState = {
    mode: "chill",
  }
  res.send(JSON.stringify(state))
}

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const method = req.method;
  switch(method) {
    case "GET":
      get(req, res);
      break;
    default:
      throw new Error("unsupported route");
  }
}
