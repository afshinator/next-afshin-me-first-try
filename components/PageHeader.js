import { Flex, Text, Center, Box, Heading, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import DarkModeSwitch from "./DarkModeSwitch";
import Link from "next/link";

const MenuItems = (props) => {
  const { children, inPage } = props;
  if (inPage === props.children.toLowerCase()) {
    return (
      <Text mt={{ base: 4, md: 0 }} mr={6} display="block" color="red.700">
        {props.children}
      </Text>
    );
  }
  return (
    <motion.div
      whileHover={{
        scale: 1.2,
        transition: { duration: 0.2 },
      }}
    >
      <Link href={`/${props.children.toLowerCase()}`}>
        <Text mt={{ base: 4, md: 0 }} mr={6} display="block" color="black">
          <a>{props.children}</a>
        </Text>
      </Link>
    </motion.div>
  );
};

function PageHeader(props) {
  const [show, setShow] = React.useState(false);
  const [randomClass, setRandomClass] = React.useState(() => {
    return "tileImage" + Math.floor(Math.random() * Math.floor(10));
  });
  const handleToggle = () => setShow(!show);

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
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { scale: 0.8, opacity: 0 },
            visible: { scale: 1, opacity: 1, transition: { delay: 1 } },
          }}
        >
          <Heading as="h1" size="3xl" letterSpacing={"-.1rem"} color="my.900">
            Afshin.me
          </Heading>
        </motion.div>
        <Heading as="h4" size="md" style={{ letterSpacing: "4px" }}>
          Software Engineer
        </Heading>
      </Flex>
      <Box
        as="nav"
        display={{ base: "block", md: "none" }}
        onClick={handleToggle}
        mt={5}
        mr={3}
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
        <MenuItems {...props}>About</MenuItems>
        <MenuItems {...props}>This</MenuItems>
        <MenuItems {...props}>Blog</MenuItems>
      </Box>

      <Box
        display={{ sm: show ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
        <DarkModeSwitch mr={5} mt={3} />
      </Box>
    </Flex>
  );
}

export default PageHeader;
