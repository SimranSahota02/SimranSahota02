import { Outlet, useLocation } from "react-router-dom";

function FormatLayout() {
  const location = useLocation();

  const isRsPkRoute = location.pathname.startsWith("/rs-pk");

  return (
    <div className={isRsPkRoute ? "rspk-bg" : ""}>
      <Outlet />
    </div>
  );
}

export default FormatLayout;
