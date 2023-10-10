import Image from "next/image";
import { Inter } from "next/font/google";
import { Layout } from "@/components/template/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Notificacoes() {
  return (
    <Layout
      titulo="Notificações"
      subtitulo={"Aqui você irá gerenciar as suas Notificações"}
    >
      <h3 className="text-white">000000</h3>
    </Layout>
  );
}
