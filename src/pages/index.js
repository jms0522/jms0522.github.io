import React from "react";
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Minsoo Git-Blog" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        {/* <ArticlesSection sectionId="articles" heading="Latest Articles" sources={['Medium']} /> */}
        <AboutSection sectionId="about" heading="💬 About Me" />
        <InterestsSection sectionId="details" heading="⚒️ Skills" />
        <ProjectsSection sectionId="features" heading="📊 Projects" />
        <ContactSection sectionId="github" heading="📌 Issues" />
      </Page>
    </>
  );
}
