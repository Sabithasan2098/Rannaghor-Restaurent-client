import { usePathname } from "next/navigation";

const useCurrentPath = () => {
  return usePathname();
};

export default useCurrentPath;
