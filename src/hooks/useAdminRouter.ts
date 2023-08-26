import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export function useAdminRouter() {
  const { pathname } = useRouter();
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  useEffect(() => {
    if (pathname.startsWith("/admin")) {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  }, [pathname]);

  return { pathname, isAdmin };
}
