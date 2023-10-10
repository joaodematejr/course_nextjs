import Link from "next/link";

interface MenuItemProps {
  url: string;
  text: string;
  icon: any;
}

export default function MenuItem(props: MenuItemProps) {
  return (
    <li className="hover:bg-gray-200">
      <Link href={props.url}>
        <a className="flex flex-col justify-center items-center w-20 h-20">
          {props.icon}
        </a>
        <span className="text-xs font-light text-gray-800">{props.text}</span>
      </Link>
    </li>
  );
}
