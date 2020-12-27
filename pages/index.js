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
  AvatarGroup,
  Avatar,
} from "@chakra-ui/react";

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
          <Heading as="h6" size="md" >
            These days I focus on <strong>Web Development</strong> especially on
            the frontend with <strong>Javascript and React-JS</strong>.
          </Heading>
          <p></p>
          <AvatarGroup size="lg" max={12}>
            <Avatar name="React-JS" src="/img/tech/react2.jpg" />
            <Avatar name="Next-JS" src="/img/tech/nextjs.png" />
            <Avatar name="Javascript" src="/img/tech/js.png" />
            <Avatar name="HTML5" src="/img/tech/html5.png" />
            <Avatar name="CSS3" src="/img/tech/css3.png" />
          </AvatarGroup>
        </Flex>
        <Box
          maxW="3xl"
          m="0 auto"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
        >
          <p>It is now essentially 2021.</p>
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
