import Head from "next/head";
import React, { useMemo } from "react";
import Section from "~/components/Section";
import { SECTIONS } from "~/components/Sections/types";

const Home = () => {
  const renderSections = useMemo(
    () =>
      SECTIONS.map((section) => (
        <Section key={section.title} title={section.title}>
          {section.element}
        </Section>
      )),
    []
  );

  return (
    <>
      <Head>
        <title>Rafael Golin</title>
        <meta name="description" content="developed by rafaelgolin" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{renderSections}</main>
    </>
  );
};

export default Home;
