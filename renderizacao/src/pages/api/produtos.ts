// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json([
    {
      id: 1,
      nome: "Caneta",
      preco: 5.6,
    },
    {
      id: 2,
      nome: "Caderno",
      preco: 10.6,
    },
    {
      id: 3,
      nome: "Borracha",
      preco: 2.6,
    },
  ]);
}
