import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import { BASE_URL } from '../../../lib/constant';
import { INewActivity } from '../../../lib/types';

export default async function activityHandler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const URL = `${BASE_URL}/activity-groups`;
  const { id } = req.query;

  if (req.method === 'PATCH') {
    const { data: updatedActivity, status } = await axios.patch<INewActivity>(
      `${URL}/${id}`,
      req.body,
    );

    if (status === 200) {
      res.status(200).send(updatedActivity);
      return;
    }
    res.status(500);
  } else if (req.method === 'DELETE') {
    const { status } = await axios.delete(`${URL}/${id}`);
    if (status === 200) {
      res.status(200).send({ message: `activity ${id} deleted` });
      return;
    }

    res.status(500);
  }
}
