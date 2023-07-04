import styled from 'styled-components'

import H1 from '../../typograph/H1'
import H3 from '../../typograph/H3'
import H5 from '../../typograph/H5'

import IconImage from '../../utils/iconImage/IconImage'

const Container = styled.div`
  @media screen and (min-width: 1024px) {
    width: 100%;
  }
`

const MainContainer = styled.div`
  color: ${(props) => props.theme.primary};
  margin-top: -30px;
  margin-bottom: 100px;
  display: flex;
  padding-top: 100px;

  @media screen and (min-width: 1024px) {
    width: 100%;
    margin-top: -50px;
    padding-left: 25px;
  }
`

const TextContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media screen and (min-width: 1024px) and (max-width: 1439px) {
    padding-right: 10px;

    & > h3 {
      font-size: 36px;
      line-height: 50px;
    }
  }
`

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  margin-right: 50px;

  @media screen and (min-width: 1024px) and (max-width: 1439px) {
    margin-top: 10px;
  }
`

const CRMText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  text-align: end;
  margin-left: 165px;
`

function InfoPage() {
  return (
    <>
      <Container>
        <MainContainer>
          <H1>{`"`}</H1>
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
          <ImageContainer>
            <IconImage imageName="FirstPhoto" type="png" />
            <CRMText>
              <H5>CRM DF 28.981</H5>
              <H5>RQE 20.062 20.063</H5>
            </CRMText>
          </ImageContainer>
        </MainContainer>
      </Container>
    </>
  )
}

export default InfoPage
