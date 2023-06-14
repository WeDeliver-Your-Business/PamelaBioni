import { useRouter } from 'next/router'

import styled from 'styled-components'

import IconImage from '../iconImage/IconImage'

const StyledLogo = styled.div`
  width: 308px;
  cursor: pointer;
`

const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  text-align: center;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  gap: 20px;
  color: ${(props) => props.theme.ColorWhite};

  li {
    cursor: pointer;
    transition: all 0.3s;
    position: relative;

    @media (max-width: 502px) {
      top: 45px;
    }
  }

  li:after {
    content: '';
    position: absolute;
    background-color: ${(props) => props.theme.ColorWhite};
    height: 2px;
    width: 0;
    left: 0;
    bottom: -10px;
    transition: 0.3s;
  }

  li:hover:after {
    width: 100%;
  }

  @media (max-width: 502px) {
    flex-flow: column;
    background: ${(props) => props.theme.NavBarBackground};
    color: ${(props) => props.theme.ColorWhite};
    position: fixed;
    backdrop-filter: blur(14px);
    opacity: 1;
    z-index: 10;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 40vh;
    width: 310px;
    gap: 10px;
    font-size: 35px;
    transition: transform 0.3s ease-in-out;
  }
  @media screen and (min-width: 767px) and (max-width: 1024px) {
    gap: 10px;
    margin-right: 10px;
  }
  span {
    @media (max-width: 502px) {
      color: ${(props) => props.theme.NavBarBackground};
    }
  }
`

const RightNavBar = ({ open }) => {
  const router = useRouter()
  const handleClickToNewProduct = () => {
    !open
    router.push('/')
  }
  const handleClicktoMyAdds = () => {
    !open
    router.push('/')
  }
  const handleClickToReports = () => {
    !open
    router.push('/')
  }

  return (
    <>
      <StyledLogo onClick={handleClicktoMyAdds}>
        <IconImage imageName="LogotipoNavbar" type="png" size="308px" height="103px" />
      </StyledLogo>
      <StyledUl open={open}>
        <li onClick={handleClicktoMyAdds}>Dra. Pâmela Bioni</li>
        <span> | </span>
        <li onClick={handleClickToNewProduct}>Áreas de atuação</li>
        <span> | </span>
        <li onClick={handleClicktoMyAdds}>Cuidados</li>
        <span> | </span>
        <li onClick={handleClickToReports}>Saiba mais</li>
        <span> | </span>
        <li onClick={handleClickToReports}>Contatos</li>
      </StyledUl>
    </>
  )
}

export default RightNavBar
