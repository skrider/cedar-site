import { NextApiRequest, NextApiResponse } from 'next';
import server from '../../server';

export default async function handler(req : NextApiRequest, res: NextApiResponse) {
  await server(req, res);
}
