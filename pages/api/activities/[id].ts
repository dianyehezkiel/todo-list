import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { BASE_URL } from "../../../lib/constant";

export default async function activityHandler(req: NextApiRequest, res: NextApiResponse) {
  const URL = `${BASE_URL}/activity-groups`
  if (req.method === 'DELETE') {
    const { id } = req.query
    const {status} = await axios.delete(`${URL}/${id}`, req.body);
    console.log(status)
    if (status === 200) {
      res.status(200).send({ message: `activity ${id} deleted`});
      return;
    }

    res.status(500);
  }
}