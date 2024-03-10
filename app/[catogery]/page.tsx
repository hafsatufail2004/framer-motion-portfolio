"use client";

import CatogeryPage from "./catogeryPage";

const Catogery = ({ params }: { params: { catogery: string } }) => {
  return <CatogeryPage params={params} />;
};

export default Catogery;
