import { useRouter } from "next/router";
import isEqual from "lodash/isEqual";
import { useTheme } from "next-themes";

const useNavBarLink = () => {
  const router = useRouter();
  const { theme } = useTheme();

  const getLinkClassName = (path: string, styles: any) => {
    const isHome = isEqual(path, "/");
    const isActive = isHome
      ? isEqual(router.pathname, path)
      : router.pathname.startsWith(path);
    const activeStyles = isEqual(theme, "light")
      ? styles.active_light
      : styles.active_dark;
    return isActive ? activeStyles : "";
  };

  return {
    getLinkClassName,
  };
};

export default useNavBarLink;
