import React, { useContext } from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import { css } from "@emotion/core";
import { Section, Container, SectionHeader } from "./Shared";
import { AppContext } from "./App";

export default ({ fields }) => {
  const { theme } = useContext(AppContext);

  return (
    <SectionLight>
      <Container>
        <SectionHeader>
          <h2>Hands-on Expertise You Can Trust</h2>
          <p>
            We understand the complexity of getting a project set up and the
            amount of time, dedication and effort invested on a project
            especially when it comes to establishing a sound budget. That’s why
            we’ve compiled the best of what we’ve personally had success with so
            you don’t have to.
          </p>
        </SectionHeader>
        <Cards>
          {fields.map(cat => {
            return (
              <Card key={cat.id}>
                <CardHeader>
                  <CardCover image={cat.thumbnail} />
                  <CardTitle>{cat.title}</CardTitle>
                </CardHeader>
                <CardBody>{cat.description}</CardBody>
                <CardFooter>
                  <ButtonSet>
                    <Link
                      as={`/${cat.slug}`}
                      href={`/field?field_id=${cat.slug}`}
                      passHref
                    >
                      <ButtonText>View Recommendations</ButtonText>
                    </Link>
                  </ButtonSet>
                </CardFooter>
              </Card>
            );
          })}
        </Cards>
      </Container>
    </SectionLight>
  );
};

const SectionLight = styled(Section)`
  background: #eee;
  overflow: auto;
  color: #333;

  @media (min-width: 768px) {
    padding-bottom: 40px;
  }
`;
const CardStyles = css`
  margin-bottom: 20px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  transition: transform 0.2s;
  backface-visibility: hidden;
  background: white;

  @media (min-width: 768px) {
    flex-basis: 32%;
  }

  &:hover {
    transform: translateY(-4px);
  }
`;
const Cards = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  &:after {
    content: "";
    height: 0;
    ${CardStyles};
  }
`;
const Card = styled.div`
  ${CardStyles};
`;
const CardHeader = styled.div`
  position: relative;
`;
const CardCover = styled.div`
  background-image: ${p => (p.image ? `url(${p.image})` : `none`)};
  background-size: cover;
  background-repeat: no-repeat;

  &::before {
    content: "";
    padding-bottom: 90%;
    width: 100%;
    display: block;
  }
`;
const CardTitle = styled.h4`
  position: absolute;
  bottom: 10px;
  margin: 0;
  padding: 0 20px;
  color: white;
  font-size: 22px;
  width: 100%;
  box-sizing: border-box;
`;
const CardBody = styled.div`
  padding: 20px;
  font-size: 14px;
  line-height: 1.4;
  flex: 1 0 auto;
`;
const CardFooter = styled.div`
  padding: 0 20px;

  &:before {
    content: "";
    width: 100%;
    height: 1px;
    background: #ddd;
    display: block;
  }
`;
const ButtonSet = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 16px 0;
`;
const ButtonText = ({ children, ...props }) => {
  const { theme } = useContext(AppContext);

  return (
    <TextButton theme={theme} {...props}>
      {children}
    </TextButton>
  );
};
const TextButton = styled.a`
  text-decoration: none;
  font-weight: bold;
  display: inline-block;
  text-transform: uppercase;
  font-size: 13px;
  color: ${p => (!p.theme ? `#333` : p.theme.colors.primary)};
  border-bottom: 1px solid transparent;

  &:hover {
    border-color: ${p => (!p.theme ? `#333` : p.theme.colors.primary)};
  }
`;
