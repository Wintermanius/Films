import { FC } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const LogoStyled = styled.div``

const LinkStyled = styled(Link)`
  border: 1px solid rgba(223, 207, 119, 0.36);
  border-radius: 8px;
  width: 93px;
  height: 54px;
  color: #D9CD8D;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  text-decoration: none;
  transition: color 0.2s, border-color 0.2s;

  &[href] {
    &:hover, &:focus {
      border-color: rgba(84, 80, 62, 0.36);
      color: #54503E;
    }
  }

  &--light {
    border-color: rgba(223, 207, 119, 0.36);
    color: #D9CD8D;
  }
`

const Letter = styled.span<{ index: number, key: number }>`
  font-size: ${(props) => props.index === 1 ? 30 : 26}px;
  transform: ${(props) => {
    switch (props.index) {
      case 0:
        return 'rotate(-9deg) translateY(5px)'
      case 2:
        return 'rotate(8deg) translateY(5px)'
      default:
        return 'none'
    }
  }};
`

const Logo: FC = () => {
  return (
    <LogoStyled>
      <LinkStyled to="/">
        {Array(3).fill('').map((_, index) => <Letter index={index} key={index}>{index === 1 ? 'T' : 'W'}</Letter>)}
      </LinkStyled>
    </LogoStyled>
  )
}

export default Logo
