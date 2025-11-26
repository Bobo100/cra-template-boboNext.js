import { Fragment, useEffect, useRef, useState } from "react";
import styles from "./NavBarMobile.module.scss";
import ThemeToggle from "@/components/features/Theme/ThemeToggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import useScroll, { mobileWidth } from "../hooks/useScroll";
import useScrollLock from "../hooks/useScrollLock";
import useWindowSize from "@/hooks/useWindowSize";
import { LinkList, NavLinkItem } from "@/components/common/LinkList";
import useSetStyle from "@/hooks/useSetStyle";
import NavBarLinkWrapper from "../NavBarLinkWrapper/NavBarLinkWrapper";

/**
 * 行動版導航列組件
 * 支援漢堡選單、滑動抽屜和背景遮罩
 */
const NavBarMobile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const linkContainerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const { visible } = useScroll();
  const { width } = useWindowSize();
  const { lockScroll, unlockScroll } = useScrollLock("navbar_mobile");
  const { getThemeClassName } = useSetStyle({ styles });

  const isMobile = width < mobileWidth;

  /**
   * 切換選單開關狀態
   */
  const handleMenuToggle = () => {
    if (isMobile) {
      if (isMenuOpen) {
        unlockScroll();
      } else {
        lockScroll();
      }
      setIsMenuOpen(!isMenuOpen);
    }
  };

  /**
   * 關閉選單
   */
  const closeMenu = () => {
    if (isMobile) {
      setIsMenuOpen(false);
      unlockScroll();
    }
  };

  /**
   * 監聽視窗大小變化，桌面版時自動關閉選單
   */
  useEffect(() => {
    if (!isMobile) {
      unlockScroll();
      setIsMenuOpen(false);
    }
  }, [width, isMobile, unlockScroll]);

  /**
   * 監聽點擊事件，點擊選單外部時關閉選單
   */
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // 點擊漢堡圖示時不處理
      if (target.closest(`.${styles.mobile_icon}`)) return;
      
      // 點擊選單外部時關閉
      if (!target.closest(`.${styles.link_container}`)) {
        setIsMenuOpen((prevState: boolean) => {
          if (prevState) {
            unlockScroll();
          }
          return false;
        });
      }
    };

    window.addEventListener("click", handleClickOutside, true);

    return () => {
      window.removeEventListener("click", handleClickOutside, true);
    };
  }, [isMenuOpen, unlockScroll]);

  /**
   * 渲染單個導航項目
   */
  const renderNavItem = (item: NavLinkItem, index: number) => {
    // 有子選單的情況（行動版直接展開所有子項目）
    if (item.children && item.children.length > 0) {
      return (
        <div key={`mobile-nav-${index}-${item.name}`} className={styles.dropdown}>
          {item.children.map((child, cIndex) => (
            <Fragment key={`mobile-dropdown-${index}-${cIndex}-${child.name}`}>
              <NavBarLinkWrapper
                {...child}
                styles={styles}
                onClick={closeMenu}
              />
            </Fragment>
          ))}
        </div>
      );
    }

    // 一般連結
    return (
      <Fragment key={`mobile-nav-${index}-${item.name}`}>
        <NavBarLinkWrapper
          {...item}
          styles={styles}
          onClick={closeMenu}
        />
      </Fragment>
    );
  };

  return (
    <nav
      id="navbar_mobile"
      className={`${styles.navbar} ${
        visible ? "navbar--visible" : styles.navbar_Hidden
      } ${getThemeClassName("nav")}`}
      onClick={(e) => e.stopPropagation()}
      data-hidden={!isMobile}
      role="navigation"
      aria-label="行動版主要導航"
    >
      <div className={styles.navbar_container}>
        <button
          className={`${styles.mobile_icon} ${getThemeClassName(
            "mobile_icon"
          )}`}
          onClick={handleMenuToggle}
          aria-label={isMenuOpen ? "關閉選單" : "開啟選單"}
          aria-expanded={isMenuOpen}
        >
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </button>
        <div
          className={`${styles.navbar_menu} ${
            isMenuOpen ? styles.navbar_menu_active : ""
          }`}
        >
          <div
            className={`${styles.link_container} ${getThemeClassName(
              "link_container"
            )} ${isMenuOpen ? styles.link_container_active : ""}`}
            ref={linkContainerRef}
          >
            {LinkList.map(renderNavItem)}
            <ThemeToggle />
          </div>
          <div
            ref={overlayRef}
            className={`${
              isMenuOpen
                ? `${styles.overlay} ${getThemeClassName("overlay")}`
                : ""
            }`}
          ></div>
        </div>
      </div>
    </nav>
  );
};

export default NavBarMobile;
