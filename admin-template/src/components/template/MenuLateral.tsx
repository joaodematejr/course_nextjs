import { Logo } from "./Logo";
import MenuItem from "./MenuItem";

export default function MenuLateral() {
  return (
    <aside className="flex flex-col bg-gray-200 text-gray-700 dark:bg-gray-900 dark:text-gray-200">
      <div className="flex flex-col items-center justify-center h-20 w-20 bg-gradient-to-r from-slate-400">
        <Logo />
      </div>
      <ul className="flex-grow">
        <MenuItem url={"/"} text={"Inicio"} icon={undefined} />
        <MenuItem url={"/ajustes"} text={"Ajustes"} icon={undefined} />
        <MenuItem
          url={"/notificacoes"}
          text={"Notificações"}
          icon={undefined}
        />
      </ul>
      <ul>
        <MenuItem
          url={"/sair"}
          text={"Sair"}
          icon={undefined}
          onClick={() => console.log("logout")}
          className="text-red-600 hover:bg-red-400 hover:text-white dark:text-red-400 dark:hover:bg-red-600 dark:hover:text-white"
        />
      </ul>
    </aside>
  );
}
