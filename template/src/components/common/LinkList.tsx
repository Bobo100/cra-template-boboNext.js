import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faHome,
  faPalette,
  faFileAlt,
} from "@fortawesome/free-solid-svg-icons";

/**
 * 導航連結項目的類型定義
 */
export interface NavLinkItem {
  href: string;
  name: string;
  className: string;
  description?: string;
  fontAwesomeIcon?: IconProp;
  children?: NavLinkItem[];
}

/**
 * 路由路徑常量
 * 集中管理所有路由路徑，方便維護和修改
 */
export const ROUTES = {
  HOME: "/",
  THEME_DEMO: "/theme-demo",
  NOT_FOUND: "/404",
} as const;

/**
 * 導航連結詳細資料
 * 使用 Record 確保類型安全
 */
const LinkListDetail: Record<string, Omit<NavLinkItem, "fontAwesomeIcon">> = {
  home: {
    href: ROUTES.HOME,
    name: "首頁",
    className: ROUTES.HOME,
    description: "返回首頁",
  },
  themeDemo: {
    href: ROUTES.THEME_DEMO,
    name: "主題展示",
    className: ROUTES.THEME_DEMO,
    description: "查看所有主題顏色和組件範例",
  },
  notFound: {
    href: ROUTES.NOT_FOUND,
    name: "404",
    className: ROUTES.NOT_FOUND,
    description: "404 頁面",
  },
};

/**
 * 主導航選單配置
 * 支援單層和多層選單結構
 */
export const LinkList: NavLinkItem[] = [
  {
    ...LinkListDetail.home,
    fontAwesomeIcon: faHome,
  },
  {
    ...LinkListDetail.themeDemo,
    fontAwesomeIcon: faPalette,
  },
  // 範例：多層選單結構
  // {
  //   name: "資源",
  //   href: "#",
  //   className: "/resources",
  //   fontAwesomeIcon: faFileAlt,
  //   children: [
  //     {
  //       ...LinkListDetail.themeDemo,
  //       fontAwesomeIcon: faPalette,
  //     },
  //     {
  //       href: "/docs",
  //       name: "文檔",
  //       className: "/docs",
  //       description: "查看文檔",
  //     },
  //   ],
  // },
];

// 向後兼容的導出（如果其他地方有使用）
export const LinkName = ROUTES;
export { LinkListDetail };
