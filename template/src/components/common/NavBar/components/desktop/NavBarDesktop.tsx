import { Fragment, useRef, useState } from "react";
import styles from "./NavBarDesktop.module.scss";
import ThemeToggle from "@/components/features/Theme/ThemeToggle";
import { LinkList, NavLinkItem } from "@/components/common/LinkList";
import useSetStyle from "@/hooks/useSetStyle";
import useScroll from "../hooks/useScroll";
import NavBarLinkWrapper from "../NavBarLinkWrapper/NavBarLinkWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * 桌面版導航列組件
 * 支援下拉選單和主題切換
 */
const NavBarDesktop = () => {
  const linkContainerRef = useRef<HTMLDivElement>(null);
  const { visible } = useScroll();
  const { getThemeClassName } = useSetStyle({ styles });
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  /**
   * 渲染單個導航項目
   */
  const renderNavItem = (item: NavLinkItem, index: number) => {
    // 有子選單的情況
    if (item.children && item.children.length > 0) {
      const isOpen = openDropdown === item.name;

      return (
        <div
          key={`nav-${index}-${item.name}`}
          className={styles.dropdown}
          onMouseEnter={() => setOpenDropdown(item.name)}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <span className={styles.link} title={item.description}>
            {item.fontAwesomeIcon && (
              <span className={styles.icon} aria-hidden="true">
                <FontAwesomeIcon icon={item.fontAwesomeIcon} />
              </span>
            )}
            <span>{item.name}</span>
            <span className={styles.dropdownIcon} aria-hidden="true">
              ▾
            </span>
          </span>
          {isOpen && (
            <div className={styles.dropdown_menu} role="menu">
              {item.children.map((child, cIndex) => (
                <Fragment key={`dropdown-${index}-${cIndex}-${child.name}`}>
                  <NavBarLinkWrapper {...child} styles={styles} />
                </Fragment>
              ))}
            </div>
          )}
        </div>
      );
    }

    // 一般連結
    return (
      <Fragment key={`nav-${index}-${item.name}`}>
        <NavBarLinkWrapper {...item} styles={styles} />
      </Fragment>
    );
  };

  return (
    <nav
      id="navbar"
      className={`${styles.navbar} ${
        visible ? "navbar--visible" : styles.navbar_Hidden
      } ${getThemeClassName("nav")}`}
      onClick={(e) => e.stopPropagation()}
      role="navigation"
      aria-label="主要導航"
    >
      <div className={styles.navbar_container}>
        <div className={styles.navbar_menu}>
          <div
            className={`${styles.link_container} ${getThemeClassName(
              "link_container"
            )}`}
            ref={linkContainerRef}
          >
            {LinkList.map(renderNavItem)}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBarDesktop;
