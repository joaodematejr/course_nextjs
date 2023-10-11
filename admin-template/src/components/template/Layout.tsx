import { Cabecalho } from "./Cabecalho";
import MenuLateral from "./MenuLateral";
import { Conteudo } from "./Conteudo";
import useAppData from "@/data/hook/useAppData";

interface LayoutProps {
  titulo: string;
  subtitulo: string;
  children?: any;
}

export function Layout(props: LayoutProps) {
  const { tema } = useAppData();
  return (
    <div className={`${tema} dark flex h-screen w-screen`}>
      <MenuLateral />
      <div className="flex flex-col bg-red-50 w-full p-7 dark:bg-gray-800">
        <Cabecalho titulo={props.titulo} subtitulo={props.subtitulo} />
        <Conteudo>{props.children}</Conteudo>
      </div>
    </div>
  );
}
