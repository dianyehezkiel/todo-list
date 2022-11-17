import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import { BASE_URL } from '../../../lib/constant';
import { INewTodo } from '../../../lib/types';

export default async function activityHandler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const URL = `${BASE_URL}/todo-items`;
  const { id } = req.query;
  if (req.method === 'PATCH') {
    const { data: updatedTodo, status } = await axios.patch<INewTodo>(
      `${URL}/${id}`,
      req.body,
    );

    if (status === 200) {
      res.status(200).send(updatedTodo);
      return;
    }
    res.status(500);
  } else if (req.method === 'DELETE') {
    const { status } = await axios.delete(`${URL}/${id}`);
    if (status === 200) {
      res.status(200).send({ message: `todo ${id} deleted` });
      return;
    }
    res.status(500);
  }
}
