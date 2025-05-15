export interface MenuItem {
  icon: IconName;
  text: string;
  subItems?: MenuItem[];
}

export type IconName =
  | "home"
  | "chart-bar"
  | "folder"
  | "chart-pie"
  | "cog"
  | "chevron-right"
  | "chevron-down";
