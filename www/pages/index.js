import React from "react";
import Head from "../components/Head";
import Hero from "../components/Hero";
import FieldsList from "../components/FieldsList";
import Commitment from "../components/Commitment";

const Index = props => {
  return (
    <React.Fragment>
      <Head title="FGV" />
      <Hero />
      <FieldsList {...props} />
      <Commitment />
    </React.Fragment>
  );
};

export default Index;
