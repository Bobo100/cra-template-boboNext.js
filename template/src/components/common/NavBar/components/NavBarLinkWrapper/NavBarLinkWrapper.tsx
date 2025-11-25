import Link from "next/link";
import useSetStyle from "@/hooks/useSetStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import useNavBarLink from "./hooks/useNavBarLink";

const NavBarLinkWrapper = ({
  href,
  name,
  className,
  styles,
  onClick,
  fontAwesomeIcon,
}: {
  href: string;
  name: string;
  className?: string;
  styles: any;
  onClick?: () => void;
  fontAwesomeIcon?: IconProp;
}) => {
  const { getThemeClassName } = useSetStyle({});
  const { getLinkClassName } = useNavBarLink();

  return (
    <Link
      href={`${href}`}
      className={`${styles.link} ${getThemeClassName(
        "link",
        styles
      )} ${getLinkClassName(`${className}`, styles)}`}
      onClick={onClick}
    >
      {fontAwesomeIcon && (
        <span className={styles.icon}>
          <FontAwesomeIcon icon={fontAwesomeIcon} />
        </span>
      )}
      <span className={styles.linkName}>{name}</span>
    </Link>
  );
};

export default NavBarLinkWrapper;
