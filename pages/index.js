import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
// import utilStyles from '../styles/utils.module.css'

import { getSortedPostsData } from "../lib/posts";
import DarkModeSwitch from "./../components/DarkModeSwitch";
import { Text, Heading, Flex, Stack } from "@chakra-ui/react";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    // <Layout home>
    <>
      <Head>
        <title>{siteTitle}</title>
        <link
          rel="preload"
          href="/fonts/BarlowCondensed-Regular.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <section>
        <DarkModeSwitch />
        <p >
          Lets see what this looks like when Ichange the font - Afshin.me
        </p>
        <p style={{ fontFamily: "BarlowCondensed" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>
    </>
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
