// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

function numeroAleatorio(min = 1, max = 10000) {
  return parseInt(Math.random() * (max - min) + min);
  
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json([
    {
      id: numeroAleatorio(),
      nome: "Caneta",
      preco: 5.6,
    },
    {
      id: numeroAleatorio(),
      nome: "Caderno",
      preco: 10.6,
    },
    {
      id: numeroAleatorio(),
      nome: "Borracha",
      preco: 2.6,
    },
  ]);
}
