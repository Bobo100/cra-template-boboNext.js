import { Fragment, useEffect, useRef, useState } from "react";
import styles from "./NavBarMobile.module.scss";
import Link from "next/link";
import ThemeToggle from "@/components/Theme/ThemeToggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import useScroll, { mobileWidth } from "../hooks/useScroll";
import useScrollLock from "../hooks/useScrollLock";
import useWindowSize from "@/hooks/useWindowSize";
import {
  LinkList,
  LinkListDetail,
  LinkName,
} from "@/components/common/LinkList";
import useSetStyle from "@/hooks/useSetStyle";
import NavBarLinkWrapper from "../NavBarLinkWrapper/NavBarLinkWrapper";


const NavBarMobile = () => {
  const [click, setClick] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const linkContainerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const { visible } = useScroll();

  const { width } = useWindowSize();

  const { lockScroll, unlockScroll } = useScrollLock("navbar_mobile");

  const { getThemeClassName } = useSetStyle({ styles });

  const isMobile = width < mobileWidth;

  const handleIconClick = () => {
    if (isMobile && click) {
      unlockScroll();
    } else if (isMobile && !click) {
      lockScroll();
    }
    setClick(!click);
  };

  useEffect(() => {
    const handleResize = () => {
      if (!isMobile) {
        unlockScroll();
        setClick(false);
      }
    };
    handleResize();
  }, [width]);

  useEffect(() => {
    const closeNavbar = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest(`.${styles.mobile_icon}`)) return;
      if (!target.closest(`.${styles.link_container}`)) {
        setClick((prevClick) => {
          if (prevClick) {
            unlockScroll();
          }
          return false;
        });
      }
    };

    window.addEventListener("click", closeNavbar, true);

    return () => {
      window.removeEventListener("click", closeNavbar, true);
    };
  }, [click]);

  const mobileClose = () => {
    if (isMobile) {
      setClick(false);
      unlockScroll();
    }
  };

  // if (!isMobile) return null;

  return (
    <nav
      id="navbar_mobile"
      className={`${styles.navbar} ${visible ? "navbar--visible" : styles.navbar_Hidden
        } ${getThemeClassName("nav")}`}
      onClick={(e) => e.stopPropagation()}
      data-hidden={!isMobile}
    >
      <div className={styles.navbar_container}>
        <div className={styles.logo_container}>
          <Link
            href={LinkListDetail[LinkName.home].href}
            className={styles.logo_title}
          >
            百百 BLOG
          </Link>
        </div>
        <div
          className={`${styles.mobile_icon} ${getThemeClassName(
            "mobile_icon"
          )}`}
          onClick={handleIconClick}
        >
          {click ? (
            <FontAwesomeIcon icon={faTimes} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </div>
        <div
          className={`${styles.navbar_menu} ${click ? styles.navbar_menu_active : ""
            }`}
        >
          <div
            className={`${styles.link_container} ${getThemeClassName(
              "link_container"
            )} ${click ? styles.link_container_active : ""}`}
            ref={linkContainerRef}
          >
            {LinkList.map((item, index) => {
              // if (item.children) {
              //   const isOpen = openDropdown === item.name;
              //   return (
              //     <div key={index} className={styles.dropdown}>
              //       <button
              //         className={styles.link}
              //         onClick={() => setOpenDropdown(isOpen ? null : item.name)}
              //       >
              //         {item.fontAwesomeIcon && <FontAwesomeIcon icon={item.fontAwesomeIcon} />}
              //         {item.name}
              //         <FontAwesomeIcon
              //           icon={faChevronDown}
              //           className={`${styles.chevron} ${isOpen ? styles.chevron_open : ""}`}
              //         />
              //       </button>
              //       {isOpen && (
              //         <div className={styles.dropdown_menu}>
              //           {item.children.map((child, cIndex) => (
              //             <Fragment key={cIndex}>
              //               {NavBarLinkWrapper({
              //                 ...child,
              //                 styles,
              //                 onClick: mobileClose,
              //               })}
              //             </Fragment>
              //           ))}
              //         </div>
              //       )}
              //     </div>
              //   );
              // }

              if (item.children) {
                return (
                  <div key={index} className={styles.dropdown}>
                    {item.children.map((child, cIndex) => (
                      <Fragment key={cIndex}>
                        {NavBarLinkWrapper({
                          ...child,
                          styles,
                          onClick: mobileClose,
                        })}
                      </Fragment>
                    ))}
                  </div>
                );
              }
              return (
                <Fragment key={index}>
                  {NavBarLinkWrapper({
                    href: item.href,
                    name: item.name,
                    className: item.className,
                    styles,
                    onClick: mobileClose,
                    fontAwesomeIcon: item.fontAwesomeIcon,
                  })}
                </Fragment>
              );
            })}
            <ThemeToggle />
          </div>
          <div
            ref={overlayRef}
            className={`${click ? `${styles.overlay} ${getThemeClassName("overlay")}` : ""
              }`}
          ></div>
        </div>
      </div>
    </nav>
  );
};

export default NavBarMobile;
