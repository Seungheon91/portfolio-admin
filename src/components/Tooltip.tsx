export const Tooltip = ({
  children,
  text,
}: {
  children: React.ReactNode;
  text: string;
}) => {
  return (
    <div className="relative group">
      {children}
      <div className="absolute top-0 left-full ml-2 px-2 py-1 bg-black text-white text-sm rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50">
        {text}
      </div>
    </div>
  );
};
