import { useState, type JSX } from 'react';
import { HomeIcon, ChartBarIcon, FolderIcon, ChartPieIcon, CogIcon, ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

interface MenuItem {
  icon: JSX.Element;
  text: string;
  subItems?: MenuItem[];
}

const menuItems: MenuItem[] = [
  { 
    icon: <HomeIcon className="w-5 h-5" />, 
    text: 'Home' 
  },
  { 
    icon: <ChartBarIcon className="w-5 h-5" />, 
    text: 'Dashboard',
    subItems: [
      { icon: <ChartBarIcon className="w-5 h-5" />, text: 'Stats' },
      { icon: <ChartBarIcon className="w-5 h-5" />, text: 'Reports' },
      { icon: <ChartBarIcon className="w-5 h-5" />, text: 'Goals' }
    ]
  },
  { 
    icon: <FolderIcon className="w-5 h-5" />, 
    text: 'Projects',
    subItems: [
      { icon: <FolderIcon className="w-5 h-5" />, text: 'Active Projects' },
      { icon: <FolderIcon className="w-5 h-5" />, text: 'Archived Projects' },
      { icon: <FolderIcon className="w-5 h-5" />, text: 'Templates' }
    ]
  },
  { 
    icon: <ChartPieIcon className="w-5 h-5" />, 
    text: 'Analytics',
    subItems: [
      { icon: <ChartBarIcon className="w-5 h-5" />, text: 'User Analytics' },
      { icon: <ChartBarIcon className="w-5 h-5" />, text: 'Project Analytics' },
      { icon: <ChartBarIcon className="w-5 h-5" />, text: 'Team Analytics' }
    ]
  },
  { 
    icon: <CogIcon className="w-5 h-5" />, 
    text: 'Settings' 
  },
];

export const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [openMenu, setOpenMenu] = useState<number | null>(null);

  const handleMenuItemClick = (item: MenuItem, index: number) => {
    if (item.subItems) {
      setOpenMenu(openMenu === index ? null : index);
    }
  };

  return (
    <div className={`fixed left-0 top-0 bottom-0  bg-[#1a1a1a] text-white transition-all duration-300 ${isCollapsed ? 'w-[60px]' : 'w-[250px]'}`}>
      <div className="p-4">
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)} 
          className="text-white text-xl hover:text-[#686868]"
        >
          {isCollapsed ? '▶️' : '◀️'}
        </button>
      </div>
      <nav className={`flex flex-col gap-2 p-4 ${isCollapsed ? 'items-center justify-center' : ''}`}>
        {menuItems.map((item, index) => (
          <div key={index} className="flex flex-col gap-1">
            <div 
              className={`flex items-center gap-2 p-2 rounded-lg cursor-pointer transition-all duration-300 ${isCollapsed ? 'justify-center' : 'justify-start'} hover:bg-[#2d2d2d] ${openMenu === index ? 'bg-[#3f3f3f]' : ''}`}
              onClick={()=> handleMenuItemClick(item, index)}
            >
              {item.icon}
              {!isCollapsed && (
                <>
                  <span className="transition-opacity duration-300">{item.text}</span>
                  {item.subItems && (
                    <span className="ml-auto text-sm transition-opacity duration-300">
                      {openMenu === index ? <ChevronDownIcon className="w-4 h-4" /> : <ChevronRightIcon className="w-4 h-4" />}
                    </span>
                  )}
                </>
              )}
            </div>
            {item.subItems && (
              <div className={`transition-all duration-300 overflow-hidden ${
                openMenu === index ? 'max-h-[500px]' : 'max-h-0'
              }`} id={`submenu-${index}`} role="menu">
                {item.subItems.map((subItem, subIndex) => (
                  <div key={subIndex} className="flex flex-col gap-1 px-4">
                    <div 
                      className={`flex items-center gap-2 p-2 rounded-lg text-sm  cursor-pointer transition-all duration-300 ${isCollapsed ? 'justify-center' : 'justify-start'} hover:bg-[#34495e]`}
                      onClick={() => setOpenMenu(null)}
                    >
                      {subItem.icon}
                      {!isCollapsed && (
                        <span className="transition-opacity duration-300">{subItem.text}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};
