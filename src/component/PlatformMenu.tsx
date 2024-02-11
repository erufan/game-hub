import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
const PlatformMenu = ({
  filterPlatform,
}: {
  filterPlatform: (platform: string) => void;
}) => {
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);
  const platforms = ["web", "pc"];
  return (
    <Menu autoSelect={false}>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform !== null ? selectedPlatform : "Platform"}
      </MenuButton>
      <MenuList>
        {platforms.map((platform) => (
          <MenuItem
            key={platform}
            onClick={() => {
              setSelectedPlatform(platform);
              filterPlatform(platform);
            }}
          >
            {platform}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
export default PlatformMenu;
