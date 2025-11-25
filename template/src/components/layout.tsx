import Head from "next/head";
import NavBar from "./common/NavBar/NavBar";
import Footer from "./common/Footer/Footer";
import styles from "./layout.module.scss";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import usePage from "@/hooks/usePage";
import { ogTypes } from "@/utils/variablesUtils";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  content?: string;
  image?: string;
  ogType?: string;
}
export default function Layout({
  children,
  title,
  content,
  image,
  ogType,
}: LayoutProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { isHomePage } = usePage();
  const router = useRouter();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleRouteChangeStart = () => {
      document
        .querySelector(".progress_bar")
        ?.classList.add(styles.progress_bar_active);
    };

    const handleRouteChangeComplete = () => {
      document
        .querySelector(".progress_bar")
        ?.classList.remove(styles.progress_bar_active);
    };

    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);

    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
  }, [router.events]);

  if (!mounted) {
    return null;
  }

  // 預設值
  const siteName = "Blog";
  const pageTitle = title ? `Blog ${title}` : siteName;
  const pageDesc = content ?? siteName;
  const pageImage = image ?? "/default-og.png"; // 放一張 default OG 圖在 public/
  const pageUrl = `${process.env.NEXT_PUBLIC_WEBSITE_URL}${router.asPath}`;

  return (
    <div
      id="layout"
      className={`${styles.container} ${
        theme === "light" ? styles.container_light : styles.container_dark
      }`}
    >
      <Head>
        {/* 基本設定 */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="theme-color"
          content={theme === "light" ? "#ffffff" : "#111111"}
        />

        {/* https://stackoverflow.com/questions/44752189/how-to-add-font-awesome-to-next-js-project */}
        {/* <script
              // you might need to get a newer version
              src="https://kit.fontawesome.com/fbadad80a0.js"
              crossOrigin="anonymous"
          ></script> */}

        {/* Favicon / PWA */}
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        {/* <link rel="icon" type="image/svg+xml" href="/icon.svg" /> */}
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
          sizes="180x180"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon-152x152.png"
          sizes="152x152"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon-120x120.png"
          sizes="120x120"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon-76x76.png"
          sizes="76x76"
        />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />

        {/* Title / Meta */}
        <title key="title">{pageTitle}</title>
        <meta name="title" content={pageTitle} />
        <meta name="description" content={pageDesc} />
        <meta name="image" content={pageImage} />

        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:type" content={ogType ?? ogTypes.website} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:description" content={pageDesc} />
        <meta property="og:image" content={pageImage} />
        <meta property="og:site_name" content={siteName} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDesc} />
        <meta name="twitter:image" content={pageImage} />

        {/* Canonical */}
        <link rel="canonical" href={pageUrl} />
      </Head>

      <div className={`progress_bar ${styles.progress_bar}`} />
      {<NavBar />}
      <div className={!isHomePage ? styles.content : ""}>{children}</div>
      {<Footer />}
    </div>
  );
}
