import { Layout } from "@/components/template/Layout";
import useAppData from "@/data/hook/useAppData";

export default function Notificacoes() {
  const ctx = useAppData();

  return (
    <Layout
      titulo="Notificações"
      subtitulo={"Aqui você irá gerenciar as suas Notificações"}
    >
      <h3 className="text-white">{ctx.name}</h3>
    </Layout>
  );
}
