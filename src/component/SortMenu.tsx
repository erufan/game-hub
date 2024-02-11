import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortMenu = ({
  handleSort,
  selectedSort,
}: {
  handleSort: (sort: string) => void;
  selectedSort: string | null;
}) => {
  const sorts = ["relevance", "release-date", "popularity", "alphabetical"];
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedSort !== undefined
          ? `sort by : ${selectedSort}`
          : "sort by : relevance"}
      </MenuButton>
      <MenuList>
        {sorts.map((sort) => (
          <MenuItem onClick={() => handleSort(sort)} key={sort}>
            {sort}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortMenu;
