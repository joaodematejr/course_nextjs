interface LogoProps {
  children?: any;
}

export function Logo(props: LogoProps) {
  return (
    <div className="flex flex-col bg-white h-14 w-14 rounded-full">
      <div className="h-3 w-3 rounded-full bg-red-800"></div>
      <div className="flex">
        <div className="h-3 w-3 rounded-full bg-teal-800"></div>
        <div className="h-3 w-3 rounded-full bg-yellow-800"></div>
      </div>
    </div>
  );
}
