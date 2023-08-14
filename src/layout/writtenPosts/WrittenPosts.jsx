import styled from 'styled-components'
import { useState } from 'react'

import H1 from '../../typograph/H1'
import H5 from '../../typograph/H5'
import H6 from '../../typograph/H6'

import IconImage from '../../utils/iconImage/IconImage'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import H4 from '../../typograph/H4'

const PostModel1 = styled.div`
  display: flex;
  height: 130vh;
  border-radius: 20px 100px 0px 0px;

  align-items: center;

  background-color: ${(props) => props.theme.primary};

  h1 {
    font-size: 48px;
    text-align: center;
  }

  h5 {
    text-align: center;
  }

  @media (max-width: 502px) {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    height: 270vh;
    padding-top: 110px;
    text-align: center;

    img {
      display: none;
    }
  }
`

const TextPostContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1300px;
  padding-left: 100px;
  gap: 10px;

  @media (max-width: 502px) {
    display: flex;
    width: 100%;
    height: 200vh;
    flex-direction: column;
    padding-left: 0;
    padding: 10px;
  }
`

const TextBody = styled.div`
  display: flex;
  align-items: center;

  h6 {
    padding: 25px 27px 5px 30px;
  }
`

const ImagePostContainer = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-left: 150px;

  @media screen and (max-width: 844px) {
    display: none;
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
`

const PostModel2 = styled.div`
  display: flex;
  padding-top: 10px;
  height: 100vh;
  border-radius: 20px 100px 0px 0px;
  align-items: center;
  margin-top: -130px;
  background-color: ${(props) => props.theme.secondary};
  text-align: center;
  color: ${(props) => props.theme.ColorWhite};

  h1 {
    font-size: 48px;
  }

  @media (max-width: 502px) {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    height: 270vh;
    padding-top: 110px;
  }
`

const PostModel3 = styled.div`
  display: flex;
  padding-top: 10px;
  height: 100vh;
  border-radius: 20px 100px 0px 0px;
  align-items: center;
  margin-top: -130px;
  background-color: ${(props) => props.theme.ColorWhite};
  text-align: center;
  color: ${(props) => props.theme.secondary};

  h1 {
    font-size: 48px;
  }

  @media (max-width: 502px) {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    height: 270vh;
    padding-top: 110px;
  }
`

export default function WrittenPosts() {
  const [isFilled, setIsFilled] = useState(false)
  const [isSecondFilled, setIsSecondFilled] = useState(false)
  const [isThirdFilled, setIsThirdFilled] = useState(false)

  const handleFirstClick = () => {
    setIsFilled(!isFilled)
  }

  const handleSecondClick = () => {
    setIsSecondFilled(!isSecondFilled)
  }

  const handleThirdClick = () => {
    setIsThirdFilled(!isThirdFilled)
  }

  return (
    <>
      <PostModel1>
        <TextPostContainer>
          <H1>Quando procurar um mastologista?</H1>
          <H5>
            A Mastologista é a especialista que cuida da saúde das mamas e deve ser procurada nas
            seguintes situações:
          </H5>
          <TextBody>
            <IconImage imageName="PamIcon" type="png" />
            <H6>
              Quando houver sintomas mamários, como mudança de cor ou textura da pele, palpação de
              nódulo ou caroço, saída de secreção pelo mamilo, retração na aréola e/ou mamilo ou dor
              persistente.
            </H6>
          </TextBody>
          <TextBody>
            <IconImage imageName="PamIcon" type="png" />
            <H6>
              Acompanhamento de rotina, quando serão realizados o exame físico e exames de imagem
              para prevenção contra o câncer de mama. Em caso de exames com resultados
              alterados/anormais, ou biópsia, a mastologista poderá te ajudar na interpretação
              desses resultados e definir qual a melhor conduta em cada caso.
            </H6>
          </TextBody>
          <TextBody>
            <IconImage imageName="PamIcon" type="png" />
            <H6>
              Por fim, quando houver histórico de câncer de mama na família, principalmente parentes
              de primeiro grau, como mãe, irmã e filha, a mastologista deve ser procurada para
              avaliação do seu risco individual e determinação da melhor estratégia para prevenção e
              rastreamento.
            </H6>
          </TextBody>
          <TextBody>
            <IconImage imageName="PamIcon" type="png" />
            <H6>
              É importante lembrar que essas são apenas algumas indicações gerais. Se você tiver
              alguma preocupação relacionada às suas mamas, é sempre recomendado consultar uma
              mastologista para uma avaliação adequada e orientação personalizada.
            </H6>
          </TextBody>
        </TextPostContainer>
        <ImagePostContainer>
          <IconImage imageName="Care1" type="png" />
          <CardIcon>
            {isFilled ? (
              <AiFillHeart size="35px" onClick={handleFirstClick} />
            ) : (
              <AiOutlineHeart size="35px" onClick={handleFirstClick} />
            )}
          </CardIcon>
        </ImagePostContainer>
      </PostModel1>
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
            É uma condição comum, ocorrendo principalmente dos 30 aos 50 anos. Geralmente é benigno
            e não está associado a aumento no risco para câncer de mama. Podem variar de tamanho,
            desde muito pequeno e múltiplos até cistos volumosos que se tornam palpáveis. Podem
            estar relacionados às oscilações hormonais do ciclo menstrual, causando aumento da dor
            ou sensibilidade mamária no período menstrual e pré-menstrual.
          </H6>
          <H4>
            Os nódulos sólidos são massas originadas da proliferação do próprio tecido mamário.
          </H4>
          <H6>
            Podem ser benignos ou malignos. Um nódulo geralmente pode ser percebido através da
            palpação quando atinge tamanho superior a 1cm. As características do nódulo nos exames
            de imagem vão determinar se ele é provavelmente benigno ou se é suspeito, e associado ao
            histórico da paciente, será decidida a conduta de acompanhamento ou realização de
            biópsia.
          </H6>
          <H6>
            Embora a maioria dos nódulos mamários seja benigna, é importante que qualquer nódulo
            seja avaliado por uma mastologista para determinar sua natureza.
          </H6>
        </TextPostContainer>
      </PostModel2>
      <PostModel3>
        <TextPostContainer>
          <H1>Quando devo fazer exames de mama?</H1>
          <H4>
            Os exames de imagem da mama são realizados basicamente em duas situações: para
            rastreamento ou diagnóstico.
          </H4>
          <H6>
            Rastreamento é quando não há nenhuma queixa ou sintoma aparente (como nódulo palpável) e
            realiza-se exame específico para descobrir o câncer de mama na sua fase inicial. O exame
            de escolha para rastreamento é a mamografia, sendo indicada a sua realização uma vez ao
            ano, a partir dos 40 anos, conforme orientação da Sociedade Brasileira de Mastologia,
            Federação Brasileira das Associações de Ginecologia e Obstetrícia e o Colégio Brasileiro
            de Radiologia.
          </H6>
          <H6>
            Quando a mulher apresenta histórico familiar de câncer de mama, deve consultar com uma
            mastologista para definir qual a melhor idade para iniciar o rastreamento, quais exames
            devem ser realizados e qual a periodicidade deles, além de outras orientações e cuidados
            conforme cada caso.
          </H6>
          <H6>
            Exames complementares, como ecografia ou ultrassonografia e ressonância magnética das
            mamas, podem ser solicitadas em caso de alteração da mamografia inicial ou para
            avaliação adicional, como em casos de mamas densas.
          </H6>
          <H6>
            Independentemente da idade, se for percebida alguma alteração nas mamas (como nódulo,
            alteração da pele, saída de secreção pelo mamilo, retração ou abaulamento) por você ou
            pelo seu médico a mamografia e/ou ultrassonografia poderá ser solicitada para
            complementar avaliação.
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
    </>
  )
}
