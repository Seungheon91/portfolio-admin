import { create } from "zustand";

interface SidebarState {
  isOpen: boolean;
  expandedMenu: Set<string>;
  toggleSidebar: () => void;
  toggleMenu: (menuText: string) => void;
}

export const useSidebarStore = create<SidebarState>((set) => ({
  isOpen: false,
  expandedMenu: new Set(),
  toggleSidebar: () => set((state) => ({ isOpen: !state.isOpen })),
  toggleMenu: (menuText: string) =>
    set((state) => {
      const newExpandedMenu = new Set(state.expandedMenu);
      if (newExpandedMenu.has(menuText)) {
        newExpandedMenu.delete(menuText);
      } else {
        newExpandedMenu.add(menuText);
      }
      return { expandedMenu: newExpandedMenu };
    }),
}));
