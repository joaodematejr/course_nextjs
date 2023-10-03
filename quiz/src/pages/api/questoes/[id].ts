// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import questoes from "../bancoDeQuestoes";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const idSelecionado = +req.query.id;
  const questoesSelecionado = questoes.filter((questao) => questao.id === idSelecionado);
  
  if (questoesSelecionado.length === 1) {
    const questaoSelecionado = questoesSelecionado[0].embaralharRespostas();
    res.status(200).json(questaoSelecionado.paraObjeto());
  }else {
    res.status(204).send();
  }
  
  
}
