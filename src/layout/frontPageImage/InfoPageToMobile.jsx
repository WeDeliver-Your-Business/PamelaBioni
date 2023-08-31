import styled from 'styled-components'

import H1 from '../../typograph/H1'
import H5 from '../../typograph/H5'

const MainContainer = styled.div`
  color: ${(props) => props.theme.secondary};
  margin-top: -330px;
  /* margin-bottom: 100px; */
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  padding-top: 100px;
  background-color: ${(props) => props.theme.primary};
  /* border-radius: 20px 100px 20px 100px; */
  width: 100%;

  border-radius: 20px 100px 0px 0px;
`

const QuotContainer = styled.div`
  display: flex;
  margin-left: 30px;
  margin-top: -30px;
  margin-bottom: -50px;
`

const TextContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 50px;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: -70px;
  width: 100%;

  h5 {
    font-family: 'Lato', sans-serif;
    font-style: italic;
  }
`

function InfoPageToMobile() {
  return (
    <>
      <MainContainer>
        <QuotContainer>
          <H1>{`"`}</H1>
        </QuotContainer>
        <TextContainer>
          <H5>
            A mastologia é a especialidade médica que se dedica ao estudo das glândulas mamárias,
            previnindo, diagnosticando, tratando e reabilitando todas as doenças de mama.
          </H5>
          <H5>
            Acredito na medicina baseada em evidências científicas de alta qualidade, proporcionando
            um atendimento personalizado que respeita a individualidade de cada paciente.
          </H5>
          {/* <H5>
            Seja bem-vinda (o) ao meu site, aqui você conhecerá um pouco mais de mim e do meu
            trabalho.
          </H5> */}
        </TextContainer>
      </MainContainer>
    </>
  )
}

export default InfoPageToMobile
