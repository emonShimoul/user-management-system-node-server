import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <h1>Header</h1>
      <Outlet></Outlet>
      <h1>Footer</h1>
    </div>
  );
};

export default MainLayout;
