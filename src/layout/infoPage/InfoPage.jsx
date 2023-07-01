/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import styled from 'styled-components'

import H1 from '../../typograph/H1'
import H3 from '../../typograph/H3'
import H5 from '../../typograph/H5'

import IconImage from '../../utils/iconImage/IconImage'

const Container = styled.div``

const MainContainer = styled.div`
  color: ${(props) => props.theme.primary};
  margin-top: 100px;
  margin-right: 80px;
  margin-left: 80px;
  margin-bottom: 100px;
  display: flex;
  border-radius: 20px 100px 20px 100px;
`

const TextContainer = styled.div`
  width: 1100px;
  background-color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 50px;
`

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  margin-left: 140px;
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
          <H1>"</H1>
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
