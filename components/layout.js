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

export default function Layout({ children, inPage, randomClass }) {
  console.log("layout.js: home?", inPage);
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Blog and Portfolio site of Afshin Mokhtari, Software Engineer"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <link
          rel="preload"
          href="/fonts/BarlowCondensed-Regular.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/BarlowCondensed-Bold.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/BarlowCondensed-Italic.ttf"
          as="font"
          crossOrigin=""
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Flex
        direction="column"
        align="center"
        maxW={{ xl: "1152px" }}
        m="0 auto"
      >
        <Progress size="xs" isIndeterminate />
        <PageHeader inPage={inPage} randomClass={randomClass} />
        <Progress size="xs" isIndeterminate />
        <main style={{ width: "100%" }}>{children}</main>
        {inPage !== "home" && (
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
