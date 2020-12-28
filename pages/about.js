import Link from "next/link";
import Head from "next/head";
import Layout from "../components/layout";
import {
  Avatar,
  AvatarGroup,
  Box,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import App from "./_app";

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
        <Box
          maxW="4xl"
          m="0 auto"
          borderWidth="1px"
          borderRadius="lg"
          p={15}
          my={15}
        >
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
              But I've been in development so long that I have experience with a
              variety of technlogies, on and off the web.
            </Heading>
          </Flex>
          <Flex maxW="2xl" m="0 auto" mt={10}>
            <Heading as="h5" size="lg" fontStyle="italic" px={4}>
              Recent engineering efforts
            </Heading>
            <Heading as="h6" size="md" fontWeight="regular" px={4}>
              I've focused professionaly in the fields of medicine and social
              good with tech. I was the principal mobile engineer on a
              mindfulness mobile apps at{" "}
              <Link href={"https://whil.com"}>
                <a>whil.com</a>
              </Link>
              , and at{" "}
              <Link href={"https://doc.ai"}>
                <a>doc.ai</a>
              </Link>{" "}
              where our goal was to address disease prevention using AI and ML.
              Most recently I've been diving into Machine Learning projects
              around health data and pursuing some ideas about how to leverage
              that data.
            </Heading>
          </Flex>
          <Flex maxW="2xl"  m="0 auto" mt={10}>
            <Heading as="h6" size="md" fontWeight="regular" px={4}>
              I like to learn. The computer industry is ever-changing and
              education is the key to staying to on top. Recently, life gave us
              the 😷Covid-19 lemon🍋, I've decided to make lemonade by taking
              the opportunity to learn the following this year:
              <Flex direction="row">
                <Box ml={5} mt={5} fontStyle="italic">
                  <ul>
                    <li>Gatsby-JS</li>
                    <li>Next-JS</li>
                    <li>React Hooks</li>
                    <li>Web animations</li>
                    <li>Mobile animations</li>
                    <li>TypeScript</li>
                    <li>a bit of Figma</li>
                    <li>and more</li>
                  </ul>
                </Box>
                <Box ml={10} flex={1}>
                  <Box fontStyle="italic">
                    And on the stack to learn:
                    <ul>
                      <li>CSS Grid</li>
                      <li>Svelte</li>
                    </ul>
                  </Box>
                  <Box w={200}>
                    <Image
                      src="/img/jamstack.png"
                      borderRadius="lg"
                      alt="JAMstack"
                      mt={5}
                    />
                  </Box>
                </Box>
              </Flex>
            </Heading>
            <Heading as="h5" size="lg" fontStyle="italic" px={4}>
              Knowledge is Power
            </Heading>
          </Flex>
        </Box>
        <Box
          maxW="4xl"
          m="0 auto"
          borderWidth="1px"
          borderRadius="lg"
          p={15}
          my={15}
        >
          <Heading as="h4" size="2xl" fontWeight="regular" px={4}>
            Natural Medicine
          </Heading>
        </Box>
        <Box
          maxW="4xl"
          m="0 auto"
          borderWidth="1px"
          borderRadius="lg"
          p={15}
          my={15}
        >
          <Heading as="h4" size="2xl" fontWeight="regular" px={4}>
            Music & Drums
          </Heading>
          <Flex maxW="2xl" m="0 auto" mt={10}>
            <Heading as="h5" size="lg" fontStyle="italic" px={4}>
              wham bam!
            </Heading>
            <Heading as="h6" size="md" fontWeight="regular" px={4}>
              Coming Soon!
            </Heading>
          </Flex>
        </Box>
      </Layout>
    </>
  );
}
