import styled from 'styled-components'
import { useState, useEffect } from 'react'

// import Navbar from '../src/layout/navbar/Navbar'
import NavbarToBlogPage from '../src/layout/navbarToBlogPages/NavbarToBlogPage'
// import WrittenPosts from '../src/layout/writtenPosts/WrittenPosts'
import CarePage from '../src/layout/carePage/CarePage'
import CarePageToMobile from '../src/layout/carePage/CarePageToMobile'
import ContactPage from '../src/layout/contactPage/ContactPage'

import H1 from '../src/typograph/H1'
import H4 from '../src/typograph/H4'
import H6 from '../src/typograph/H6'

import IconImage from '../src/utils/iconImage/IconImage'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  height: 100vh;

  p {
    font-size: 21px;
    font-weight: bold;
  }
`

const Loader = styled.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid ${(props) => props.theme.secondary};
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

const PostModel2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 130vh;
  border-radius: 20px 100px 0px 0px;
  margin-bottom: -270px;

  align-items: center;

  background-color: ${(props) => props.theme.ColorWhite};

  h1 {
    font-size: 48px;
    text-align: center;
  }

  h5 {
    text-align: center;
  }

  @media (max-width: 1662px) {
    display: flex;
    width: 100%;
    flex-direction: column;
    padding-top: 230px;
    text-align: center;
    margin-bottom: 20px;

    img {
      display: none;
    }

    h1 {
      font-size: 32px;
      text-align: center;
      line-height: normal;
      padding: 20px;
      margin-top: -350px;
    }

    h5 {
      text-align: center;
    }
  }

  @media (max-width: 1002px) {
    display: flex;
    width: 100%;
    flex-direction: column;
    padding-top: 430px;
    text-align: center;
    margin-bottom: 20px;

    img {
      display: none;
    }

    h1 {
      font-size: 32px;
      text-align: center;
      line-height: normal;
      padding: 20px;
      margin-top: -350px;
    }

    h5 {
      text-align: center;
    }
  }

  @media (max-width: 851px) {
    display: flex;
    width: 100%;
    flex-direction: column;
    padding-top: 550px;
    text-align: center;
    margin-bottom: 20px;

    img {
      display: none;
    }

    h1 {
      font-size: 32px;
      text-align: center;
      line-height: normal;
      padding: 20px;
      margin-top: -350px;
    }

    h5 {
      text-align: center;
    }
  }

  @media (max-width: 751px) {
    display: flex;
    width: 100%;
    flex-direction: column;
    padding-top: 950px;
    text-align: center;
    margin-bottom: 20px;

    img {
      display: none;
    }

    h1 {
      font-size: 32px;
      text-align: center;
      line-height: normal;
      padding: 20px;
      margin-top: -350px;
    }

    h5 {
      text-align: center;
    }
  }

  @media (max-width: 502px) {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    height: 230vh;
    padding-top: 660px;
    text-align: center;
    font-family: 'Lato', sans-serif;
    font-style: italic;

    img {
      display: none;
    }

    h1 {
      font-size: 32px;
      text-align: center;
      line-height: normal;
      padding: 20px;
    }

    h5 {
      text-align: center;
    }
  }

  @media (max-width: 390px) {
    display: flex;
    width: 100%;
    flex-direction: column;
    height: 345vh;
    text-align: center;

    img {
      display: none;
    }

    h1 {
      font-size: 32px;
      text-align: center;
      line-height: normal;
      padding: 20px;

      margin-top: -600px;
    }

    h5 {
      text-align: center;
    }
  }
`

const TextPostContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* padding-left: 100px; */
  gap: 10px;
  margin-top: -150px;
  text-align: center;
  padding: 40px;

  h6 {
    text-align: justify;
  }

  @media (max-width: 1502px) {
    display: flex;
    width: 100%;
    flex-direction: column;
    padding-top: 100px;
    padding-left: 0;
    text-align: center;
    align-items: center;

    img {
      display: none;
    }

    h1 {
      font-size: 32px;
      text-align: center;
      line-height: normal;
      padding: 20px;
    }

    h4 {
      line-height: normal;
      font-size: 21px;
      margin: 10px 0px 10px 0px;
    }
  }

  @media (max-width: 502px) {
    display: flex;
    width: 100%;
    height: 230vh;
    flex-direction: column;
    padding-left: 0;
    padding: 10px;
  }
`

const ImagePostContainer = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-left: 150px;
  margin-right: 150px;

  @media screen and (max-width: 844px) {
    margin-left: 0;
  }
`

const CardIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 50px;
  width: 35px;
  margin-left: 150px;

  cursor: pointer;

  @media screen and (max-width: 1044px) {
    display: none;
  }
`

const CareAndContactMainContainer = styled.div`
  @media (max-width: 1602px) {
    margin-top: -300px;
  }

  @media (max-width: 1002px) {
    margin-top: -100px;
  }

  @media (max-width: 851px) {
    margin-top: -50px;
  }

  @media (max-width: 502px) {
    margin-top: -400px;
  }

  @media (max-width: 390px) {
    margin-top: -1100px;
  }
`

const ToDisplayOnMobileOnly = styled.div`
  display: none;

  @media (max-width: 502px) {
    display: flex;
    width: 100%;
    height: 200vh;
    flex-direction: column;
  }
`

function MainPage() {
  const [loading, setLoading] = useState(true)
  const [isSecondFilled, setIsSecondFilled] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  const handleSecondClick = () => {
    setIsSecondFilled(!isSecondFilled)
  }

  return (
    <>
      {loading ? (
        <LoaderContainer>
          <Loader />
          <p>Carregando...</p>
        </LoaderContainer>
      ) : (
        <>
          <NavbarToBlogPage />
          <PostModel2>
            <ImagePostContainer>
              <IconImage imageName="Care2" type="png" />
              <CardIcon>
                {isSecondFilled ? (
                  <AiFillHeart size="35px" onClick={handleSecondClick} />
                ) : (
                  <AiOutlineHeart size="35px" onClick={handleSecondClick} />
                )}
              </CardIcon>
            </ImagePostContainer>
            <TextPostContainer>
              <H1>Qual a diferença entre nódulo e cisto mamário?</H1>
              <H4>Cistos são dilatações dos ductos preenchidas por líquido.</H4>
              <H6>
                É uma condição comum, ocorrendo principalmente dos 30 aos 50 anos. Geralmente é
                benigno e não está associado a aumento no risco para câncer de mama. Podem variar de
                tamanho, desde muito pequeno e múltiplos até cistos volumosos que se tornam
                palpáveis. Podem estar relacionados às oscilações hormonais do ciclo menstrual,
                causando aumento da dor ou sensibilidade mamária no período menstrual e
                pré-menstrual.
              </H6>
              <H4>
                Os nódulos sólidos são massas originadas da proliferação do próprio tecido mamário.
              </H4>
              <H6>
                Podem ser benignos ou malignos. Um nódulo geralmente pode ser percebido através da
                palpação quando atinge tamanho superior a 1cm. As características do nódulo nos
                exames de imagem vão determinar se ele é provavelmente benigno ou se é suspeito, e
                associado ao histórico da paciente, será decidida a conduta de acompanhamento ou
                realização de biópsia.
              </H6>
              <H6>
                Embora a maioria dos nódulos mamários seja benigna, é importante que qualquer nódulo
                seja avaliado por uma mastologista para determinar sua natureza.
              </H6>
            </TextPostContainer>
          </PostModel2>
          <CareAndContactMainContainer>
            <div id="careAndBlog">
              <CarePage />
            </div>
            <div id="contactPage">
              <ContactPage />
            </div>
          </CareAndContactMainContainer>
          <ToDisplayOnMobileOnly>
            <CarePageToMobile />
            {/* <ContactPageToMobile /> */}
          </ToDisplayOnMobileOnly>
        </>
      )}
    </>
  )
}

export default MainPage
