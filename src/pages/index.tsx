import Head from "next/head";
import MainSection from "~/components/MainSection/MainSection";

const Home = () => {
  return (
    <>
      <Head>
        <title>Rafael Golin</title>
        <meta name="description" content="developed by rafaelgolin" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <MainSection />
      </main>
    </>
  );
}

export default Home;
