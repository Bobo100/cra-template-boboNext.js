import { useRouter } from "next/router";

const usePage = () => {
  const router = useRouter();

  const isHomePage = router.pathname === "/";

  return {
    isHomePage,
  };
};

export default usePage;
