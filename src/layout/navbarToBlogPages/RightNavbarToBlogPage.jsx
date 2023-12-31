import { useRouter } from 'next/router'
import { Link } from 'react-scroll'

import styled from 'styled-components'

import IconImage from '../../utils/iconImage/IconImage'

const StyledLogo = styled.div`
  width: 308px;
  cursor: pointer;
  background-color: ${(props) => props.theme.NavBarBackground};

  @media screen and (max-width: 844px) {
    width: 100%;
    display: flex;
  }
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

    @media (max-width: 1044px) {
      top: 45px;
      margin-top: 70px;
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

  @media (max-width: 1044px) {
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
    height: 100vh;
    width: 310px;
    gap: 10px;
    font-size: 35px;
    transition: transform 0.3s ease-in-out;
  }

  span {
    @media (max-width: 1044px) {
      color: ${(props) => props.theme.NavBarBackground};
      margin-top: 20px;
    }
  }
`

const RightNavBarToMobile = ({ open }) => {
  const router = useRouter()

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
        <IconImage imageName="LogotipoNavbar" type="png" size="308px" height="100px" />
      </StyledLogo>
      <StyledUl open={open}>
        <li onClick={handleClicktoMyAdds}>Dra. Pâmela Bioni</li>
        <span> | </span>
        <li onClick={handleClicktoMyAdds}>
          <Link to="careAndBlog" smooth={true} offset={-100} duration={800}>
            Cuidados
          </Link>
        </li>
        <span> | </span>
        <li onClick={handleClickToReports}>
          <Link to="careAndBlog" smooth={true} offset={670} duration={800}>
            Saiba mais
          </Link>
        </li>
        <span> | </span>
        <li onClick={handleClickToReports}>
          <Link to="contactPage" smooth={true} offset={1870} duration={800}>
            Contatos
          </Link>
        </li>
      </StyledUl>
    </>
  )
}

export default RightNavBarToMobile
