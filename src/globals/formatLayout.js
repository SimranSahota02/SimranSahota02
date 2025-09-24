import { Outlet, useLocation } from "react-router-dom";

function FormatLayout() {
  const location = useLocation();

  const format = location.pathname.split("/")[1];
  const backgroundClass = format ? `${format}-bg` : "";

  return (
    <div className={backgroundClass}>
      <Outlet />
    </div>
  );
}

export default FormatLayout;
