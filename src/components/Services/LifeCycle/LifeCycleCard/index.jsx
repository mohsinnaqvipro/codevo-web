import React from "react";

import { InnerLayout, LifeNo, LifeTitle, LifeDetailes } from "./styles";

const LifeCycleCard = ({ SrNo, title, detailes }) => {
  return (
    <InnerLayout>
      <LifeNo>{SrNo}</LifeNo>
      <LifeTitle>{title}</LifeTitle>
      <LifeDetailes>{detailes}</LifeDetailes>
    </InnerLayout>
  );
};

export default LifeCycleCard;
