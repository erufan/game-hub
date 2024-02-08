import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        isChecked={"dark" === colorMode}
        colorScheme="green"
        onChange={toggleColorMode}
      />
      <Text>dark mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
