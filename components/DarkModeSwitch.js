
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { IconButton, useColorMode } from '@chakra-ui/react';


const DarkModeSwitch = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      aria-label="toggle dark switch"
      onClick={toggleColorMode}
      icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
      // colorScheme="blue"
      size="lg"
      variant="outline"
      isRound
      {...props}
    />
  );
};

export default DarkModeSwitch;
