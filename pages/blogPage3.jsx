import styled from 'styled-components'
import { useState, useEffect } from 'react'

// import Navbar from '../src/layout/navbar/Navbar'
import NavbarToBlogPage from '../src/layout/navbarToBlogPages/NavbarToBlogPage'
// import WrittenPosts from '../src/layout/writtenPosts/WrittenPosts'
import CarePage from '../src/layout/carePage/CarePage'
import ContactPage from '../src/layout/contactPage/ContactPage'
import CarePageToMobile from '../src/layout/carePage/CarePageToMobile'

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

const PostModel3 = styled.div`
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
  margin-top: 10px;
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
      text-align: center;
      font-size: 21px;
      line-height: 50px;
    }
  }

  @media (max-width: 502px) {
    display: flex;
    width: 100%;
    height: 230vh;
    flex-direction: column;
    padding-left: 0;
    padding: 10px;
    margin-top: -100px;
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

  @media screen and (max-width: 1644px) {
    display: none;
  }
`

const CareAndContactMainContainer = styled.div`
  margin-top: 300px;

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
    margin-top: -150px;
  }

  @media (max-width: 502px) {
    margin-top: -20px;
  }

  @media (max-width: 390px) {
    margin-top: -800px;
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
  const [isThirdFilled, setIsThirdFilled] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  const handleThirdClick = () => {
    setIsThirdFilled(!isThirdFilled)
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
          <PostModel3>
            <TextPostContainer>
              <H1>Quando devo fazer exames de mama?</H1>
              <H4>
                Os exames de imagem da mama são realizados basicamente em duas situações: para
                rastreamento ou diagnóstico.
              </H4>
              <H6>
                Rastreamento é quando não há nenhuma queixa ou sintoma aparente (como nódulo
                palpável) e realiza-se exame específico para descobrir o câncer de mama na sua fase
                inicial. O exame de escolha para rastreamento é a mamografia, sendo indicada a sua
                realização uma vez ao ano, a partir dos 40 anos, conforme orientação da Sociedade
                Brasileira de Mastologia, Federação Brasileira das Associações de Ginecologia e
                Obstetrícia e o Colégio Brasileiro de Radiologia.
              </H6>
              <H6>
                Quando a mulher apresenta histórico familiar de câncer de mama, deve consultar com
                uma mastologista para definir qual a melhor idade para iniciar o rastreamento, quais
                exames devem ser realizados e qual a periodicidade deles, além de outras orientações
                e cuidados conforme cada caso.
              </H6>
              <H6>
                Exames complementares, como ecografia ou ultrassonografia e ressonância magnética
                das mamas, podem ser solicitadas em caso de alteração da mamografia inicial ou para
                avaliação adicional, como em casos de mamas densas.
              </H6>
              <H6>
                Independentemente da idade, se for percebida alguma alteração nas mamas (como
                nódulo, alteração da pele, saída de secreção pelo mamilo, retração ou abaulamento)
                por você ou pelo seu médico a mamografia e/ou ultrassonografia poderá ser solicitada
                para complementar avaliação.
              </H6>
            </TextPostContainer>
            <ImagePostContainer>
              <IconImage imageName="Care3" type="png" />
              <CardIcon>
                {isThirdFilled ? (
                  <AiFillHeart size="35px" onClick={handleThirdClick} />
                ) : (
                  <AiOutlineHeart size="35px" onClick={handleThirdClick} />
                )}
              </CardIcon>
            </ImagePostContainer>
          </PostModel3>
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
