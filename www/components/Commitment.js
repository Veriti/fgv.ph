import styled from "@emotion/styled";
import { Section, SectionHeader, Container } from "./Shared";
import * as Icon from "./ui";

export default () => {
  return (
    <PictureSection image="static/images/bg-commitment.jpg">
      <Container>
        <SectionHeader>
          <h2>Why Choose FGV?</h2>
        </SectionHeader>
        <Features>
        <Feature>
          <FeatureTitle>
            <FeatureIcon><Icon.Feature1 /></FeatureIcon>
            <span>Comprehensive Technical Assistance</span>
          </FeatureTitle>
          <p>Our solutions specialists will provide you an in-depth technical knowledge tailored specifically to your project.</p>
        </Feature>
        <Feature>
          <FeatureTitle>
            <FeatureIcon><Icon.Feature2 /></FeatureIcon>
            <span>Cost Effective Quality Products</span>
          </FeatureTitle>
          <p>Every product we recommend are of the highest value for your money. If our recommendations fall short of expectations, chances are, everything else in the market would.</p>
        </Feature>
        <Feature>
          <FeatureTitle>
            <FeatureIcon><Icon.Feature3 /></FeatureIcon>
            <span>Superb Aftersales Service</span>
          </FeatureTitle>
          <p>We don&apos;t just make sure you make the right choices, we ensure you make happy decisions. We believe in making impressions, but not as much as making them last.</p>
        </Feature>
        </Features>
      </Container>
    </PictureSection>
  )
}

const PictureSection = styled(Section)`
  background-image: ${p => p.image ? `url(${p.image})` : `none`};
  background-size: cover;
  background-position: 50%;
  padding-bottom: 40px;

  @media (min-width: 768px) {
    padding-bottom: 0;
    display: flex;
    align-items: center;
    height: 460px;
  }
`
const Feature = styled.div`
  padding: 0 20px;

  @media (min-width: 768px) {
    flex-basis: 33.33%;
  }
`
const Features = styled.div`
  @media (min-width: 768px) {
    display: flex;
    align-items: stretch;
    box-sizing: border-box;
  }
`
const FeatureTitle = styled.h4`
  display: flex;
  align-items: center;
  font-size: 20px;
  margin: 0;

  & span {
    margin-left: 8px;
  }
`
const FeatureIcon = styled.div`
  flex-shrink: 0;
`
