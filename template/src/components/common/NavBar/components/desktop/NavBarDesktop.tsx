import { Fragment, useRef, useState } from "react";
import styles from "./NavBarDesktop.module.scss";
import ThemeToggle from "@/components/Theme/ThemeToggle";
import {
  LinkList,
  LinkListDetail,
  LinkName,
} from "@/components/common/LinkList";
import useSetStyle from "@/hooks/useSetStyle";
import useScroll, { mobileWidth } from "../hooks/useScroll";
import NavBarLinkWrapper from "../NavBarLinkWrapper/NavBarLinkWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBarDesktop = () => {
  const linkContainerRef = useRef<HTMLDivElement>(null);

  const { visible } = useScroll();

  const { getThemeClassName } = useSetStyle({ styles });

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <nav
      id="navbar"
      className={`${styles.navbar} ${
        visible ? "navbar--visible" : styles.navbar_Hidden
      } ${getThemeClassName("nav")}`}
      onClick={(e) => e.stopPropagation()}
    >
      <div className={styles.navbar_container}>
        {/* <div className={styles.logo_container}>
          <Link
            href={LinkListDetail[LinkName.home].href}
            className={`${styles.logo_title} ${getThemeClassName(
              "logo_title"
            )}`}
          >
            百百 BLOG
          </Link>
        </div> */}
        <div className={`${styles.navbar_menu}`}>
          <div
            className={`${styles.link_container} ${getThemeClassName(
              "link_container"
            )}`}
            ref={linkContainerRef}
          >
            {LinkList.map((item, index) => {
              if (item.children) {
                return (
                  <div
                    key={index}
                    className={styles.dropdown}
                    onMouseEnter={() => setOpenDropdown(item.name)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <span className={styles.link}>
                      {item.fontAwesomeIcon && (
                        <FontAwesomeIcon icon={item.fontAwesomeIcon} />
                      )}{" "}
                      {item.name} ▾
                    </span>
                    {openDropdown === item.name && (
                      <div className={styles.dropdown_menu}>
                        {item.children.map((child, cIndex) => (
                          <Fragment key={cIndex}>
                            {NavBarLinkWrapper({ ...child, styles })}
                          </Fragment>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Fragment key={index}>
                  {NavBarLinkWrapper({ ...item, styles })}
                </Fragment>
              );
            })}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBarDesktop;
