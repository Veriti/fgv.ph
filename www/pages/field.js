import React from "react";
import Head from "../components/Head";
import Breadcrumbs from "../components/Breadcrumbs";
import PageHeader from "../components/PageHeader";
import ProductList from "../components/ProductList";
import Badges from "../components/Badges";

const Page = (props) => {
  return (
    <React.Fragment>
      <Head title="FGV" />
      <Breadcrumbs {...props} />
      <PageHeader {...props} />
      <ProductList {...props} />
      <Badges {...props} />
    </React.Fragment>
  );
};

export default Page;
