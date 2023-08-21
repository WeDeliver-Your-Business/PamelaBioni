import styled from 'styled-components'

import H1 from '../../typograph/H1'
import H3 from '../../typograph/H3'
import H5 from '../../typograph/H5'

import IconImage from '../../utils/iconImage/IconImage'

// const Container = styled.div`
//   /* @media screen and (min-width: 1024px) {
//     width: 100%;
//   } */
// `

const MasterContainer = styled.div`
  display: flex;
  color: ${(props) => props.theme.primary};
  margin-top: -90px;
  display: flex;
  padding-top: 100px;

  @media screen and (max-width: 1024px) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`

const MainContainer = styled.div`
  color: ${(props) => props.theme.primary};
  margin-top: -90px;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  padding-top: 100px;
`

const QuotContainer = styled.div`
  display: flex;
  margin-left: 70px;
  margin-top: -30px;
  margin-bottom: -50px;
`

const TextContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 100px;
  margin-top: -70px;
  width: 100%;
`

const SecondaryContainer = styled.div`
  display: flex;
  width: 100%;
  display: flex;
  align-items: top;
  justify-content: center;

  @media (max-width: 1024px) {
    /* width: 360px; */
    margin-top: -160px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  margin-right: 50px;

  @media (max-width: 1502px) {
    width: 360px;
    margin-left: 15px;
    margin-top: 5px;
  }
`

const CRMText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  text-align: end;
  margin-left: 165px;

  @media (max-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 0px;
  }
`

function InfoPage() {
  return (
    <>
      <MasterContainer>
        <MainContainer>
          <QuotContainer>
            <H1>{`"`}</H1>
          </QuotContainer>
          <TextContainer>
            <H3>
              A mastologia é a especialidade médica que se dedica ao estudo das glândulas mamárias,
              previnindo, diagnosticando, tratando e reabilitando todas as doenças de mama.
            </H3>
            <H3>
              Acredito na medicina baseada em evidências científicas de alta qualidade,
              proporcionando um atendimento personalizado que respeita a individualidade de cada
              paciente.
            </H3>
            <H3>
              Seja bem-vinda (o) ao meu site, aqui você conhecerá um pouco mais de mim e do meu
              trabalho.
            </H3>
          </TextContainer>
        </MainContainer>
        <SecondaryContainer>
          <ImageContainer>
            <IconImage imageName="FirstPhoto" type="png" />
            <CRMText>
              <H5>CRM DF 28.981</H5>
              <H5>RQE 20.062 / 20.063</H5>
            </CRMText>
          </ImageContainer>
        </SecondaryContainer>
      </MasterContainer>
    </>
  )
}

export default InfoPage
