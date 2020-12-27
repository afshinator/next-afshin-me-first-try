import Link from "next/link";
import Head from "next/head";
import Layout from "../components/layout";

export async function getStaticProps() {
  const randomClass =  "tileImage" + Math.floor(Math.random() * Math.floor(10));

  return {
    props: {
      randomClass
    }
  }
}


export default function AboutPage({randomClass}) {
  console.log('aobut page',randomClass)
  return (
    <>
      <Layout inPage="about" randomClass={randomClass}>
        <Head>
          <title>About Afshin</title>
        </Head>
        <h1>About Afsheezy</h1>
        <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
      </Layout>
    </>
  );
}
