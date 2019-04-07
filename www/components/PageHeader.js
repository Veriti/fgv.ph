import styled from "@emotion/styled";
import * as FieldIcon from "./ui";
import { withRouter } from "next/router";

export default withRouter(({ fields, router }) => {
  const page = fields.find(cat => cat.slug === router.query.field_id);

  return (
    <PageHeader>
      <Container>
        <Icon>
          <FieldIcon.Drainage />
        </Icon>
        <Split />
        <Entry>
          <PageTitle>{page.title}</PageTitle>
          <p>
            {page.description}
          </p>
        </Entry>
      </Container>
    </PageHeader>
  );
});

const PageHeader = styled.header`
  background: #cecece;
  padding: 40px 0;
`;
const Icon = styled.div`
  font-size: 100px;
  align-self: center;

  & svg {
    display: block;
  }
`;
const Split = styled.div`
  width: 2px;
  background: #666;
  margin: 0 30px;
`;
const Entry = styled.div`
  color: #333;

  & p {
    font-size: 14px;
  }
`;
const PageTitle = styled.h1`
  margin: 10px 0;
`;
const Container = styled.div`
  width: 100%;
  padding: 0 20px;
  max-width: 650px;
  margin: 0 auto;
  box-sizing: border-box;

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;
