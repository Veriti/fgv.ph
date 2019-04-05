import { useContext } from "react";
import styled from "@emotion/styled";
import { Field, Input, Container, Button } from "./Shared";

export default () => {
  return (
    <Hero>
      <Cover image="./static/images/hero-home.jpg" />
      <Content>
        <Entry>
          <HeroTitle>
            Your Premier Engineering Supply Solutions Specialist
          </HeroTitle>
          <Lead>
            Get practical advice through our years of experience in research, evaluation, budget, and technical expertise.
          </Lead>
        </Entry>
        <Form>
          <CTATitle>Too busy? Let us call you instead.</CTATitle>
          <p>
            Simply leave your contact details below and we&apos;ll ring you as soon as we can!
          </p>
          <Field>
            <Input type="text" placeholder="Name" />
          </Field>
          <Field>
            <Input type="text" placeholder="Telephone" />
          </Field>
          <Field>
            <SubmitButton large>Save My Contact Details</SubmitButton>
          </Field>
          <Disclaimer>We may contact you occassionally for deals but also respect your time and privacy. To opt-out of our list, you can simply state your request during the call.
          </Disclaimer>
        </Form>
      </Content>
    </Hero>
  );
};

const Hero = styled.div`
  display: flex;
  padding: 40px 0;
  width: 100%;
  position: relative;
  align-items: center;

  @media (min-width: 1024px) {
    height: 500px;
    padding: 0;
  }
`;
const Cover = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  background-image: url(${p => (p.image ? p.image : null)});
  background-size: cover;
  background-position: 50%;
`;
const Content = styled(Container)`
  position: relative;

  @media (min-width: 768px) {
    text-align: center;
  }

  @media (min-width: 1024px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: left;
  }

  @media (min-width: 1024px) {
    justify-content: space-between;
  }
`;
const Entry = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    max-width: 500px;
    margin: 0 auto;
  }

  @media (min-width: 1024px) {
    margin: 0;
  }
`;
const HeroTitle = styled.h2`
  font-size: 32px;
  line-height: 1;
  margin: 20px 0;

  @media (min-width: 768px) {
    font-size: 42px;
  }

  @media (min-width: 1024px) {
    font-size: 42px;
  }

  @media (min-width: 1200px) {
    font-size: 48px;
  }
`;
const Form = styled.div`
  background: #eee;
  width: 100%;
  padding: 20px;
  border-radius: 3px;
  color: #666;
  box-sizing: border-box;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);

  @media (min-width: 768px) {
    max-width: 400px;
    margin: 0 auto;
  }
  @media (min-width: 1024px) {
    margin: 0;
  }
`;
const Lead = styled.p`
  font-size: 18px;
  line-height: 1.4;
`;
const SubmitButton = styled(Button)`
  margin-bottom: 10px;
`
const CTATitle = styled.p`
  font-weight: bold;
  font-size: 18px;
`
const Disclaimer = styled.p`
  font-size: 13px;
  text-align: center;
`
