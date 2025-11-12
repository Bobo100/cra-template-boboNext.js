import { useTheme } from "next-themes";

const useSetStyle = ({ styles }: { styles?: any }) => {
  const { theme } = useTheme();

  const getThemeClassName = (className: string, customStyles: any = styles) => {
    const themeSuffix = theme === "light" ? "_light" : "_dark";
    return customStyles[className + themeSuffix];
  };

  return { getThemeClassName };
};

export default useSetStyle;
