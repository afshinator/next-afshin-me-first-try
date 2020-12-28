import Link from "next/link";
import Head from "next/head";
import Layout from "../components/layout";
import { Avatar, AvatarGroup, Box, Flex, Heading } from "@chakra-ui/react";

export async function getStaticProps() {
  const randomClass = "tileImage" + Math.floor(Math.random() * Math.floor(10));

  return {
    props: {
      randomClass,
    },
  };
}

const widthArray = [
  "100%", // 0-30em
  "50%", // 30em-48em
  "25%", // 48em-62em
  "15%", // 62em+
];
export default function AboutPage({ randomClass }) {
  console.log("aobut page", randomClass);
  return (
    <>
      <Layout inPage="about" randomClass={randomClass}>
        <Head>
          <title>About Afshin</title>
        </Head>
        <Heading as="h1" size="xl" fontWeight="regular" px={4}>
          About Afsheezy
        </Heading>
        <Box maxW="4xl" m="0 auto" borderWidth="1px" borderRadius="lg" p={15} my={15}>
          <Heading as="h4" size="2xl" fontWeight="regular" px={4}>
            Technology
          </Heading>
          <Flex maxW="2xl" m="0 auto" mt={10}>
            <Heading as="h6" size="md" fontWeight="regular" px={4}>
              My professional focus is on{" "}
              <strong style={{ fontWeight: 700 }}>Web Development</strong>,
              especially on the frontend with{" "}
              <strong style={{ fontWeight: 700 }}>
                Javascript and React-JS
              </strong>
              ✨
            </Heading>
            <AvatarGroup width={widthArray} max={12}>
              <Avatar name="Javascript" src="/img/tech/js.png" />
              <Avatar name="React-JS" src="/img/tech/react2.jpg" />
              <Avatar name="Next-JS" src="/img/tech/nextjs.png" />
              <Avatar name="HTML5" src="/img/tech/html5.png" />
              <Avatar name="CSS3" src="/img/tech/css3.png" />
            </AvatarGroup>
          </Flex>
          <Flex maxW="2xl" m="0 auto" mt={10}>
            <AvatarGroup max={12}>
              <Avatar name="Backbone-JS" src="/img/tech/backbone.jpg" />
              <Avatar name="JQuery" src="/img/tech/jquery.png" />
              <Avatar name="Ruby on Rails" src="/img/tech/ror.png" />
              <Avatar name="WordPress" src="/img/tech/wp.jpg" />
              <Avatar name="php" src="/img/tech/php.png" />
              <Avatar name="Python" src="/img/tech/python.png" />
            </AvatarGroup>
            <Heading as="h6" size="md" fontWeight="regular" px={4}>
              But I've been in development so long that I have experience
              with a variety of technlogies, on and off the web.
            </Heading>
          </Flex>
        </Box>
      </Layout>
    </>
  );
}
