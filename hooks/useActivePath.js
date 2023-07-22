import { usePathname } from "next/navigation";

export const useActivePath = (path) => {
  const pathname = usePathname();

  if (path === "/" && pathname !== path) {
    return false;
  }

  return pathname.startsWith(path);
};
