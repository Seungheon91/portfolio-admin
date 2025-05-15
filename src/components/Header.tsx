import {
  ChevronDownIcon,
  UserIcon,
  ArrowRightStartOnRectangleIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import { useSidebarStore } from "../store/sidebar";

export const Header = () => {
  const { toggleSidebar } = useSidebarStore();

  const logout = () => {
    console.log("Logout clicked");
  };

  return (
    <header className="flex items-center justify-between p-2 bg-gray-50 text-black">
      <div className="p-4">
        <button
          onClick={() => toggleSidebar()}
          className="cursor-pointer hover:text-[#686868]"
        >
          <Bars3Icon className="size-6 " />
        </button>
      </div>
      <div className="group relative">
        <div className="flex justify-center items-center gap-3 mr-2 p-2 cursor-pointer">
          <div className="flex items-center justify-center size-8 rounded-full bg-gray-300">
            <UserIcon className="size-5 text-gray-50" />
          </div>
          <div className="text-sm">Seung Heon</div>
          <ChevronDownIcon className="size-4" />
        </div>

        <div className="hidden group-hover:block absolute right-0 p-2 w-40 bg-white rounded-md shadow-lg z-50">
          <button
            onClick={logout}
            className="flex items-center justify-start gap-2 w-full text-left px-4 py-2 text-sm rounded-md text-gray-700 hover:bg-gray-100"
          >
            <ArrowRightStartOnRectangleIcon className="size-5" />
            로그아웃
          </button>
        </div>
      </div>
    </header>
  );
};
