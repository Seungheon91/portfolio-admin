import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <div className="flex h-screen w-full bg-gray-50">
      <Sidebar />
      <div className="flex flex-col h-screen w-full">
        <Header />
        <main className="flex flex-1 bg-gray-200 text-black p-4 rounded-lg ">
          <div className="p-4 bg-gray-50 rounded-lg w-full">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};
