import React from "react";
import Header from "../../components/Header";
import Body from "../../components/Body";
import Footer from "../../components/Footer";
import { BodySection } from "./styles";

function Home() {
  return (
    <BodySection>
      <Header />
      <Body />
      <Footer />
    </BodySection>
  );
}

export default Home;
