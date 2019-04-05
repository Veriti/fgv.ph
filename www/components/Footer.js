import styled from "@emotion/styled";
import { Section, Container } from "./Shared";

export default () => {
  return (
    <Footer>
      <Container>
        <Copy>
          Copyright &copy; 2019 FGV Engineering Supplies & Solutions  |  www.fgv.ph  
          <br/>
          made with ♥ at veriticreatives.com
        </Copy>
      </Container>
    </Footer>
  )
}

const Footer = styled(Section)`
  padding: 20px 0;
`
const Copy = styled.p`
  font-size: 14px;
  text-align: center;
  color: #999;
`
