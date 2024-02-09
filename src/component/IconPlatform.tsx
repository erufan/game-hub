import { HStack, Icon } from "@chakra-ui/react";
import { CgBrowser, CgWindows } from "react-icons/cg";

const IconPlatform = ({ platform }: { platform: string }) => {
  return (
    <>
      {platform.includes("PC") && <Icon as={CgWindows} color="gray.500" />}
      {platform.includes("Web") && <Icon as={CgBrowser} color="gray.500" />}
    </>
  );
};

export default IconPlatform;
