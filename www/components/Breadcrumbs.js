import styled from "@emotion/styled";
import { Container } from "./Shared";
import Link from "next/link";
import * as UIIcon from "./ui";
import { withRouter } from "next/router";

export default withRouter(({ fields, router }) => {
  const field = fields.find(cat => cat.slug === router.query.field_id)

  return (
    <BreadCrumbs>
      <Container>
        <NavGroup>
          <NavItem href="/" passHref />
          <NavItem>{field.title}</NavItem>
        </NavGroup>
      </Container>
    </BreadCrumbs>
  );
});

const NavItem = ({ children, href, subpage, ...props }) => {
  if (!href) {
    return (
      <Item>
        {href !== "/" && <Delimiter>/</Delimiter>}
        {children}
      </Item>
    );
  }

  return (
    <Item>
      <Link href={href} passHref>
        <Nav>
          {href === "/" && <UIIcon.Home />}
          {children}
        </Nav>
      </Link>
    </Item>
  );
};

const BreadCrumbs = styled.div`
  background: #1D800E;
  height: 40px;
  display: flex;
  align-items: center;
`;
const NavGroup = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  padding: 0;
  margin: 0;
`;
const Item = styled.li`
  color: #6cab6c;
  display: flex;
  align-items: center;

  & a {
    color: white;
    text-decoration: none;
  }
`;
const Nav = styled.a`
  display: flex;
`;
const Delimiter = styled.span`
  margin: 0 8px;
`
