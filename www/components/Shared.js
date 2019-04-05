import { useContext } from 'react';
import { css } from '@emotion/core'; 
import styled from '@emotion/styled';
import { AppContext } from "./App";

export const Container = styled.div`
  padding: 0 20px;
  width: 100%;
  box-sizing: border-box;

  @media (min-width: 1024px) {
    margin: 0 auto;
    max-width: 1024px;
  }

  @media (min-width: 1200px) {
    padding-left: 0;
    padding-right: 0;
  }
`
export const Field = styled.div``
export const Input = styled.input`
  appearance: none;
  border: 1px solid #ddd;
  background: white;
  width: 100%;
  padding: 0 10px;
  margin: 0 0 10px;
  height: 40px;
  box-sizing: border-box;
  outline: none;
  font-size: 14px;

  &:focus {
    border-color: #81bd5b;
  }
`
export const TextArea = styled.textarea`
  appearance: none;
  border: 1px solid #ddd;
  background: white;
  width: 100%;
  padding: 10px;
  margin: 0 0 10px;
  box-sizing: border-box;
  outline: none;
  font-size: 14px;
  display: block;
`
const Button_Large = css`
  font-size: 16px;
  height: 56px;
`
const BrandButton = styled.button`
  appearance: none;
  border: 0 none;
  background: ${p => p.theme ? p.theme.colors.primary : `#1D800E`};  
  color: white;
  display: flex;
  align-items: center;
  height: 40px;
  font-weight: bold;
  font-size: 14px;
  text-transform: uppercase;
  width: 100%;
  justify-content: center;
  border-radius: 2px;
  outline: none;
  cursor: pointer;

  &:focus, &:hover {
    background: linear-gradient(180deg, #499B3D 0%, #56B248 100%);
  }

  ${p => p.large ? Button_Large : null}
`
export const Button = props => {
  const { theme } = useContext(AppContext);

  return (
    <BrandButton theme={theme} {...props} />
  )
}
export const Section = styled.div``
export const SectionHeader = styled.header`
  padding-top: 40px;
  padding-bottom: 20px;
  text-align: center;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;

  @media (min-width: 1024px) {
    max-width: 800px;
  }

  & h2 {
    font-size: 28px;
    margin: 20px 0;

    @media (min-width: 768px) {
      font-size: 32px;
    }
  }

  & p {
    line-height: 1.4;
  }
`

