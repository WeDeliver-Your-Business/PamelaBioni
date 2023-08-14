import styled, { keyframes } from 'styled-components'

const Rotate = keyframes`
    0% {
        transform: rotate(0)
    }
    100% {
        transform: rotate(360deg);
    }
`

const AppLoading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  width: 100%;
  height: 100%;
  position: fixed;
`

const LoadingCircle = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  border: 8px solid white;

  border-left: 8px solid red;

  animation-name: ${Rotate};
  animation-duration: 1s;
  animation-iteration-count: infinite;
`

const Loading = () => {
  return (
    <AppLoading className="loading-overlay">
      <LoadingCircle />
    </AppLoading>
  )
}

export default Loading
