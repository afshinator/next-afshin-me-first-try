import Head from "next/head";
// import styles from './layout.module.css'
// import utilStyles from '../styles/utils.module.css'
import Link from "next/link";
import {
  Flex,
  Text,
  Container,
  Box,
  Heading,
  Button,
  Progress,
} from "@chakra-ui/react";

import PageHeader from "./PageHeader";

const name = "Shinators";
export const siteTitle = "Next.js Website soon come";

export default function Layout({ children, home }) {
  console.log("layout.js: home?", home);
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Flex
        direction="column"
        align="center"
        maxW={{ xl: "1200px" }}
        m="0 auto"
      >
      <Progress size="xs" isIndeterminate />
        <PageHeader />
        <Box padding="4" bg="gray.100">
          There are many benefits to a joint design and development system. Not
          only does it bring benefits to the design team.
        </Box>
        {home ? (
          <>
            <img src="/images/profile.jpg" alt={name} />
            <h1>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img src="/images/profile.jpg" alt={name} />
              </a>
            </Link>
            <h2>
              <Link href="/">
                <a>{name}</a>
              </Link>
            </h2>
          </>
        )}

        <main>{children}</main>
        {!home && (
          <div>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      </Flex>
    </>
  );
}
