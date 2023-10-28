"use cleint";

import {
  MainLayout,
  InnerLayout,
  ValuesHading,
  Culture,
  ValuesText,
} from "./styles";

const Values = () => {
  return (
    <MainLayout>
      <InnerLayout>
        <ValuesHading>
          {`Our `}
          <Culture>{"Culture "}</Culture>
          {` & Core `}
          <Culture>{"Values"}</Culture>
        </ValuesHading>
        <ValuesText>{`Our values are at the heart of what we do and we’re all about getting the job done whilst having fun with no workplace politics. Only with voracious dedication, and excellence, we can build something unprecedented and intuitive.`}</ValuesText>
      </InnerLayout>
    </MainLayout>
  );
};

export default Values;
