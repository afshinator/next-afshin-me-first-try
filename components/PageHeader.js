import { Flex, Text, Center, Box, Heading, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import DarkModeSwitch from "./DarkModeSwitch";
import Link from "next/link";

const MenuItems = (props) => {
  const { children, inPage } = props;
  if (inPage === props.children.toLowerCase()) {
    return (
      <Text mt={{ base: 4, md: 0 }} mr={6} display="block" fontSize="xl" color="red.700">
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
        <Text mt={{ base: 4, md: 0 }} mr={6} display="block" fontSize="xl" color="black">
          <a>{props.children}</a>
        </Text>
      </Link>
    </motion.div>
  );
};

const WithAnimation = ({ inPage, children }) => {
  if (inPage !== "home") return children;
  else
    return (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { scale: 0.8, opacity: 0 },
          visible: { scale: 1, opacity: 1, transition: { delay: 0.2 } },
        }}
      >
        {children}
      </motion.div>
    );
};

function PageHeader(props) {
  const [show, setShow] = React.useState(false);
  const { randomClass } = props;
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
    >
      <Flex w="100%" height="4" className={randomClass}></Flex>
      <Flex align="center" mx={5} my={3} direction="column" alignItems="left">
        <WithAnimation {...props}>
          <Link href={"/"}>
            <Heading as="h1" size="3xl" letterSpacing={"-.1rem"} color="my.900">
              <a>Afshin.me</a>
            </Heading>
          </Link>
        </WithAnimation>
        <Heading as="h4" size="lg">
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
        justifyContent="space-evenly"
        flexGrow={1}
        ml={5}
      >
        <MenuItems {...props}>About</MenuItems>
        <MenuItems {...props}>This</MenuItems>
        <MenuItems {...props}>Blog</MenuItems>
      </Box>

      <Box
        display={{ sm: show ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
        <DarkModeSwitch mr={5} mt={8} />
      </Box>
      <Flex w="100%" mt={2} height="4" className={randomClass}></Flex>
    </Flex>
  );
}

export default PageHeader;
