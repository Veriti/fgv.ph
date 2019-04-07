import styled from "@emotion/styled";
import { Section, Container, Field, Input, TextArea, Button } from "./Shared";
import * as UIIcon from "./ui";

export default ({ industries }) => {
  return (
    <Prefooter>
      <Row>
        <Column>
          <Title>
            <span>Send Us An Inquiry</span>
          </Title>
          <form action="">
            <Field>
              <Input type="text" placeholder="Name" />
            </Field>
            <Field>
              <Input type="text" placeholder="Email" />
            </Field>
            <Field>
              <TextArea placeholder="Message" />
            </Field>
            <Field>
              <SubmitButton type="submit">Submit Inquiry</SubmitButton>
            </Field>
          </form>
        </Column>
        <Column>
          <Title>
            <span>Contact Us</span>
          </Title>

          <InfoDescription>Our lines are always open to accomodate any inquiry. You can reach us on any of the following:</InfoDescription>

          <InfoGroup>
            <Icon><UIIcon.Mail /></Icon>
            froilanvillareal88@gmail.com</InfoGroup>
          <InfoGroup>
            <Icon><UIIcon.Location /></Icon>
            #38 Sto. Nino St. Talanay A1<br/> Batasan Hills, Quezon City<br/> Philippines 1126
          </InfoGroup>
          <InfoGroup>
            <Icon><UIIcon.Phone color="#111" /></Icon>
            <div>
              <Info>(+02) 342-5144</Info>
              <Info>Smart: <a href="tel:+639474046188">+63 947 4046188</a></Info>
              <Info>Sun: <a href="tel:+639228710543">+63 922 8710543</a></Info>
              <Info>Globe: <a href="tel:+639178905142">+63 917 8905142</a></Info>
            </div>
          </InfoGroup>
        </Column>
        <Column smfull>
          <Title>
            <span>Industries</span>
          </Title>
          { industries.map(tag => (
            <Tag key={tag.id}>{tag.title}</Tag>
          )) }
        </Column>
      </Row>
    </Prefooter>
  )
}

const Prefooter = styled(Section)`
  background: #cecece;
  color: #111;
  padding: 40px 0;
`
const Row = styled(Container)`
  @media(min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media(min-width: 1024px) {
    justify-content: space-between;
  }
`
const Column = styled.div`
  margin: 40px 0;

  @media(min-width: 768px) {
    flex-basis: 35%;
    margin: 0 20px;
  }

  @media(min-width: 1024px) {
    flex-basis: 31%;
    margin: 0;
  }

  ${p => p.smfull ? `
    @media(min-width: 768px) {
      flex-basis: 75%;
      text-align: center;
    }
    @media(min-width: 1024px) {
      flex-basis: 31%;
      text-align: left;
    }
  ` : null}
`
const Icon = styled.div`
  margin-right: 8px;
  font-size: 20px;
`
const Title = styled.h4``
const SubmitButton = styled(Button)``
const Tag = styled.span`
  border: 2px solid #333;
  padding: 0 20px;
  border-radius: 36px;
  display: inline-flex;
  height: 36px;
  align-items: center;
  margin: 0 8px 8px 0;
  font-size: 14px;
  font-weight: bold;
`
const InfoDescription = styled.div`
  font-size: 14px;
  margin-bottom: 10px;
`
const InfoGroup = styled.div`
  font-size: 14px;
  margin-bottom: 10px;
  display: flex;
`
const Info = styled.div`
  & a {
    text-decoration: none;
    color: inherit;
    font-weight: bold;
  }
`
