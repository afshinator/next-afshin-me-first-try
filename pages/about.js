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
import { the } from "./../.next/static/chunks/main";

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
            <Text as="h6" size="md" fontWeight="regular" px={4}>
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
            </Text>
          </Flex>
          <Flex maxW="2xl" m="0 auto" mt={10}>
            <Text as="h6" size="md" fontWeight="regular" px={4}>
              I like to learn. The computer industry is ever-changing and
              education is the key to staying to on top. Recently, life gave us
              the 😷Covid-19 lemon🍋, I've decided to make lemonade by taking
              the opportunity to learn the following this year:
              <Flex direction="row">
                <Box ml={35} mt={5} fontStyle="italic">
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
                      src="/img/learn.gif"
                      borderRadius="lg"
                      alt="keep learning!"
                      mt={5}
                    />
                  </Box>
                </Box>
              </Flex>
            </Text>
            <Heading as="h5" size="lg" fontStyle="italic" px={4}>
              Knowledge is Power
            </Heading>
          </Flex>
        </Box>

        <Box my="3rem">
          <Image
            m="0 auto"
            src="/img/me3.png"
            borderRadius="lg"
            alt="Me at a company retreat"
          />
          <Flex justifyContent="center">
            <Text>Company retreat in Sonoma County California, 2018</Text>
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
            Health & Healing with natural medicine
          </Heading>
          <Flex maxW="2xl" m="0 auto" mt={10}>
            <Heading as="h5" size="lg" fontStyle="italic" px={4}>
              I have a Masters degree in Traditional Medicine
            </Heading>
            <Flex flexDir="column">
              <Text size="md" fontWeight="regular" px={4}>
                I was a primary care provider in California for about 8 years
                practicing acupuncture and herbology ☯️. Before that I spent
                some years studying bodywork as well as Traditional Chinese
                Medicine and traditional medicines of other old cultures.
              </Text>
              <Text size="md" fontWeight="regular" px={4} mt={4}>
                If you had sciatica I was <italic>the</italic> guy to go to!
                (and still am) Soon I'll be adding all my old blog posts related
                to natural medicine to this site. 🚧
              </Text>
              <Text size="md" fontWeight="regular" px={4} mt={4}>
                I'm also a big fan of taiji (aka Tai Chi). Its an amazing art
                that requires you to learn to relax without being limp, teaches
                you the value of devotion, is one of the best ways to exercise
                your lymphatic system and therefore your immune system, and much
                more.
              </Text>
            </Flex>
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
            Music & Drums
          </Heading>
          <Flex maxW="2xl" m="0 auto" mt={10}>
            <Flex flexDir="column">
              <Text size="md" fontWeight="regular" px={4}>
                I've been playing music as a percussionist since the early 90's.
                I love hand drums especially and I play for all kinds of dance
                classes; especially related to African dance. 💃🏽 Its ecstatic!
              </Text>
              <Text size="md" fontWeight="regular" px={4} mt={4}></Text>
              <Box w={200}>
                <Image
                  src="/img/afshinwithdjembe.jpg"
                  borderRadius="lg"
                  alt="Afshin playing djembe at a club"
                  ml={5}
                />
              </Box>
            </Flex>
            <Heading as="h5" size="lg" fontStyle="italic" px={4}>
              I'm a percussionist and a lover of rhythm
            </Heading>
          </Flex>
        </Box>
      </Layout>
    </>
  );
}
