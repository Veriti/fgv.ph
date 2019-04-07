import styled from "@emotion/styled";
import { withRouter } from "next/router";
import Link from "next/link";
import { Container } from "./Shared";

export default withRouter(({ fields, products, router }) => {
  const field = fields.find(cat => cat.slug === router.query.field_id);

  return (
    <BadgeList>
      <Container>
        <Badges>
          {field.badges.map((badge, i) => 
            <Badge key={i} src={badge} />
          )}
          <Disclaimer>This website do not own the brands or logos used on these products and or awards. Inappropriate redistribution or use of which is still subject to the brand&apos;s terms.</Disclaimer>
        </Badges>
      </Container>
    </BadgeList>
  );
});

const BadgeList = styled.div`
  background: #cecece;
`
const Badges = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 10px;
`
const Badge = styled.img`
  margin: 10px 0;
`
const Disclaimer = styled.p`
  text-align: center;
  font-size: 12px;
  color: #666;
  width: 80%;
  max-width: 600px;
  margin: 20px auto 10px;
`
