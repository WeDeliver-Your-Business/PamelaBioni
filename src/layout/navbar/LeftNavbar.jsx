import styled from 'styled-components'
import { Link } from 'react-scroll'

const StyledUl = styled.ul`
  width: 50%;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  background-color: ${(props) => props.theme.background};

  li {
    cursor: pointer;
    transition: all 0.3s;
    position: relative;
  }

  li:after {
    content: '';
    position: absolute;
    background-color: ${(props) => props.theme.primary};
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
    display: flex;
    justify-content: left;
    width: 80%;
    padding: 10px 0;
  }

  @media (max-width: 360px) {
    display: flex;
    justify-content: left;
    width: 100%;
    padding: 10px 0;
    margin-left: 20px;
  }
`

const LeftNav = () => {
  return (
    <StyledUl>
      <li>
        <Link to="intro" smooth={true} offset={0} duration={800}>
          <p>Bruno Patrício - Web Dev</p>
        </Link>
      </li>
    </StyledUl>
  )
}

export default LeftNav
