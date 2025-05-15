import { type JSX } from "react";
import { useSidebarStore } from "../store/sidebar";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/logo2.png";
import smallLogo from "../assets/images/logo2_small.png";
import { Tooltip } from "./Tooltip";
import {
  HomeIcon,
  ChartBarIcon,
  ChartBarSquareIcon,
  FolderIcon,
  ChartPieIcon,
  CogIcon,
  ChevronRightIcon,
  BriefcaseIcon,
  UserCircleIcon,
  InboxStackIcon,
  DocumentArrowDownIcon,
  PhotoIcon,
  FilmIcon,
} from "@heroicons/react/24/outline";

interface MenuItem {
  icon: JSX.Element;
  text: string;
  url?: string;
  expanded?: boolean;
  subItems?: MenuItem[];
}

const menuItems: MenuItem[] = [
  {
    icon: <HomeIcon className="size-5" />,
    text: "Home",
    url: "/",
  },
  {
    icon: <BriefcaseIcon className="size-5" />,
    text: "Resume",
    url: "/resume",
  },
  {
    icon: <UserCircleIcon className="size-5" />,
    text: "Profile",
    url: "/profile",
  },

  {
    icon: <FolderIcon className="size-5" />,
    text: "Projects",
    subItems: [
      { icon: <FolderIcon className="size-5" />, text: "Active Projects" },
      { icon: <FolderIcon className="size-5" />, text: "Archived Projects" },
      { icon: <FolderIcon className="size-5" />, text: "Templates" },
    ],
  },

  {
    icon: <InboxStackIcon className="size-5" />,
    text: "Skills",
    subItems: [
      { icon: <DocumentArrowDownIcon className="size-5" />, text: "File" },
      { icon: <PhotoIcon className="size-5" />, text: "Image" },
      { icon: <FilmIcon className="size-5" />, text: "Video" },
    ],
  },
  {
    icon: <ChartBarSquareIcon className="size-5" />,
    text: "Dashboard",
    subItems: [
      {
        icon: <ChartBarIcon className="size-5" />,
        text: "Stats",
        url: "/dashboard/stat",
      },
      { icon: <ChartPieIcon className="size-5" />, text: "Reports" },
      { icon: <ChartBarIcon className="size-5" />, text: "Goals" },
    ],
  },
  {
    icon: <ChartPieIcon className="size-5" />,
    text: "Analytics",
    subItems: [
      { icon: <ChartBarIcon className="size-5" />, text: "User Analytics" },
      { icon: <ChartBarIcon className="size-5" />, text: "Project Analytics" },
      { icon: <ChartBarIcon className="size-5" />, text: "Team Analytics" },
    ],
  },
  {
    icon: <CogIcon className="size-5" />,
    text: "Settings",
    url: "/login",
  },
];

export const Sidebar = () => {
  const { isOpen, expandedMenu, toggleMenu } = useSidebarStore();
  const navigate = useNavigate();

  const onClickMenuItem = (item: MenuItem) => {
    if (item.url && !item.subItems) {
      navigate(item.url);
      return;
    }
    toggleMenu(item.text);
  };

  const onClickSubMenuItem = (item: MenuItem) => {
    if (!item.url) return;
    navigate(item.url);
  };

  return (
    <div className="flex flex-col h-screen p-2 bg-gray-50">
      <div
        className={`bg-[#1a1a1a] text-white rounded-lg h-full transition-all duration-300 ${
          isOpen ? "w-[75px]" : "w-[270px]"
        }`}
      >
        <div className="p-4">
          <div
            className={`rounded-md bg-cover bg-center bg-no-repeat transition-all duration-300 ${
              isOpen ? "h-[40px] w-[40px]" : "w-full h-[50px]"
            }`}
            style={{
              backgroundImage: isOpen ? `url(${smallLogo})` : `url(${logo})`,
            }}
          ></div>
        </div>
        <nav
          className={`flex flex-col gap-2 p-4 ${
            isOpen ? "items-center justify-center" : ""
          }`}
        >
          {menuItems.map((item) => (
            <div key={item.text} className="flex flex-col">
              {isOpen ? (
                <Tooltip text={item.text}>
                  <button
                    className={`flex items-center justify-center p-2 rounded-lg cursor-pointer transition-all duration-300 hover:bg-[#2d2d2d] w-full`}
                    onClick={() => onClickMenuItem(item)}
                  >
                    {item.icon}
                  </button>
                </Tooltip>
              ) : (
                <button
                  className={`flex items-center gap-2 p-2 rounded-lg cursor-pointer transition-all duration-300 justify-start hover:bg-[#2d2d2d]`}
                  onClick={() => onClickMenuItem(item)}
                >
                  {item.icon}
                  {item.text}
                  {item.subItems && (
                    <span className="ml-auto text-sm">
                      <ChevronRightIcon
                        className={`size-4 transition-transform duration-300 ${
                          expandedMenu.has(item.text) ? "rotate-90" : ""
                        }`}
                      />
                    </span>
                  )}
                </button>
              )}
              {!isOpen && item.subItems && (
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    expandedMenu.has(item.text) ? "max-h-[500px]" : "max-h-0"
                  }`}
                  id={`submenu-${item.text}`}
                  role="menu"
                >
                  {item.subItems.map((subItem) => (
                    <div
                      key={subItem.text}
                      className="flex flex-col gap-1 px-4"
                    >
                      <button
                        className={`flex items-center gap-2 p-2 rounded-lg text-sm cursor-pointer transition-all duration-300 ${
                          isOpen ? "justify-center" : "justify-start"
                        } hover:bg-[#34495e]`}
                        onClick={() => onClickSubMenuItem(subItem)}
                      >
                        {subItem.icon}
                        {subItem.text}
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};
