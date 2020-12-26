import { Flex, Text, Center, Box, Heading, Button } from "@chakra-ui/react";
import DarkModeSwitch from "./DarkModeSwitch";

const MenuItems = ({ children }) => (
  <Text mt={{ base: 4, md: 0 }} mr={6} display="block" color="black">
    {children}
  </Text>
);



function PageHeader(props) {
  const [show, setShow] = React.useState(false);
  const [randomClass, setRandomClass] = React.useState(
    () => { return 'tileImage' + Math.floor(Math.random() * Math.floor(9))}
  )
  const handleToggle = () => setShow(!show);
  console.log('randomClass ', randomClass)
  return (
    <Flex
      as="header"
      justify="space-between"
      wrap="wrap"
      bg="yellow.500"
      color="white"
      m="0 auto"
      w="100%"
      borderRadius="sm"
      {...props}
    >
      <Flex w="100%" height="4" className={randomClass}></Flex>
      <Flex align="center" mx={5} my={3} direction="column" alignItems="left">
        <Heading as="h1" size="lg" letterSpacing={"-.1rem"} color="gray.900">
          Afshin.me
        </Heading>
        <Heading as="h4" size="md">
          Software Engineer
        </Heading>
      </Flex>
      <Box
        as="nav"
        display={{ base: "block", md: "none" }}
        onClick={handleToggle}
        mt={5} mr={3}
      >
        <svg
          fill="black"
          width="12px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>

      <Box
        as="nav"
        display={{ sm: show ? "block" : "none", md: "flex" }}
        width={{ sm: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
      >
        <MenuItems>About</MenuItems>
        <MenuItems>This</MenuItems>
        <MenuItems>Blog</MenuItems>
      </Box>

      <Box
        display={{ sm: show ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
        <DarkModeSwitch mr={5} mt={3}/>
      </Box>
    </Flex>
  );
}

export default PageHeader;
