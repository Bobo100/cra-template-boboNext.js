import Link from "next/link";
import useSetStyle from "@/hooks/useSetStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import useNavBarLink from "./hooks/useNavBarLink";

/**
 * NavBarLinkWrapper Props
 */
interface NavBarLinkWrapperProps {
  href: string;
  name: string;
  className?: string;
  styles: Record<string, string>;
  onClick?: () => void;
  fontAwesomeIcon?: IconProp;
  description?: string;
}

/**
 * 導航列連結包裝組件
 * 統一處理導航連結的樣式和行為
 */
const NavBarLinkWrapper: React.FC<NavBarLinkWrapperProps> = ({
  href,
  name,
  className = "",
  styles,
  onClick,
  fontAwesomeIcon,
  description,
}) => {
  const { getThemeClassName } = useSetStyle({});
  const { getLinkClassName } = useNavBarLink();

  return (
    <Link
      href={href}
      className={`${styles.link} ${getThemeClassName(
        "link",
        styles
      )} ${getLinkClassName(className, styles)}`}
      onClick={onClick}
      title={description || name}
      aria-label={description || name}
    >
      {fontAwesomeIcon && (
        <span className={styles.icon} aria-hidden="true">
          <FontAwesomeIcon icon={fontAwesomeIcon} />
        </span>
      )}
      <span className={styles.linkName}>{name}</span>
    </Link>
  );
};

export default NavBarLinkWrapper;
