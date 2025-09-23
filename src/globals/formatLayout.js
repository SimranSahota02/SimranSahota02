import { Outlet, useLocation } from "react-router-dom";

const FormatLayout = () => {
  const location = useLocation();
  const formatMatch = location.pathname.match(/^\/([\w-]+)/);
  const format = formatMatch ? formatMatch[1] : null;

  return (
    <div className={`content ${format ? `${format}-bg` : ""}`}>
      <Outlet />
    </div>
  );
};

export default FormatLayout;
