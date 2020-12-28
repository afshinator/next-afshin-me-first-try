import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
// import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from "../lib/posts";
import {
  Container,
  Box,
  Text,
  Heading,
  Flex,
  Stack,
  StackDivider,
  AvatarGroup,
  Avatar,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { async } from "./about";

/* When I generated the random number in the PageHeader, I got a
  ugly warning in console about classes not matching between screen
  refreshes.  getStaticProps seems to be the right way to do it with
  statically rendered pages */
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const randomClass = "tileImage" + Math.floor(Math.random() * Math.floor(10));

  return {
    props: {
      allPostsData,
      randomClass,
    },
  };
}

export default function Home({ allPostsData, randomClass }) {
  return (
    <Layout inPage="home" randomClass={randomClass}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <Flex maxW="2xl" m="0 auto" mt={10}>
          <Heading as="h6" size="md" fontWeight="regular" px={4}>
            Welcome to my blog / portfolio / playground.
          </Heading>
        </Flex>
        <Flex maxW="2xl" m="0 auto" mt={10}>
          <Heading as="h6" size="md" fontWeight="regular" px={4}>
            My professional focus is on{" "}
            <strong style={{ fontWeight: 700 }}>Web Development</strong>,
            especially on the frontend with{" "}
            <strong style={{ fontWeight: 700 }}>Javascript and React-JS</strong>
            ✨ I've also been doing mobile apps with React Native for a few
            years now.
          </Heading>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { scale: 0.2, opacity: 0, x: 1200, y: -400 },
              visible: {
                scale: 1,
                opacity: 1,
                x: 0,
                y: 0,
                transition: { delay: 0.5, duration: 1 },
              },
            }}
          >
            <AvatarGroup
              width={[
                "100%", // 0-30em
                "50%", // 30em-48em
                "25%", // 48em-62em
                "15%", // 62em+
              ]}
              max={12}
            >
              <Avatar name="Javascript" src="/img/tech/js.png" />
              <Avatar name="React-JS" src="/img/tech/react2.jpg" />
              <Avatar name="Next-JS" src="/img/tech/nextjs.png" />
              <Avatar name="HTML5" src="/img/tech/html5.png" />
              <Avatar name="CSS3" src="/img/tech/css3.png" />
            </AvatarGroup>
          </motion.div>
        </Flex>
        <Box
          maxW="3xl"
          m="0 auto"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          mt={10}  boxShadow="md" 
        >
          <Stack spacing={3} p={5}>
            <Text fontSize="3xl">
              🎅 Happy Holidays 🎄 - We're almost to 2021 🎉
            </Text>
            <Text fontSize="lg">
              New for this year is another incarnation of my website.
            </Text>

            <Text fontSize="lg">
              This time we have Next.js under the hood, with emotion for
              css-in-js goodness, Chakra-UI for some prefad React-JS components
              and more.
            </Text>
            <Text fontSize="lg">
              I'm going to be putting up my old blog posts, as well as some
              links to projects.
            </Text>
          </Stack>
          <hr />
          <Stack
            spacing={3}
            p={5}
          >
            <Text fontSize="lg">
              I'll be migrating over my old blog posts and linking to some
              projects as I build out this site over time.
            </Text>
          </Stack>
        </Box>
      </section>
    </Layout>
  );
}

/* 
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul >
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>

*/
