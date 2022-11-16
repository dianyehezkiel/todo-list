import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { BASE_URL } from "../../../lib/constant";
import { INewActivity } from "../../../lib/types";

export default async function activitiesHandler(req: NextApiRequest, res: NextApiResponse) {
  const URL = `${BASE_URL}/activity-groups`
  console.log('request coming')
  if (req.method === 'POST') {
    const { data: activities } = await axios.post<INewActivity>(URL, req.body);

    res.send(activities);
  }
}