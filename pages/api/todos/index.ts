import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import { BASE_URL } from '../../../lib/constant';
import { INewTodo } from '../../../lib/types';

export default async function todosHandler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const URL = `${BASE_URL}/todo-items`;
  if (req.method === 'POST') {
    const { data: newTodo, status } = await axios.post<INewTodo>(URL, req.body);

    if (status === 201) {
      res.status(201).send(newTodo);
    }
  }
}
