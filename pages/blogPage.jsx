import styled from 'styled-components'

import Navbar from '../src/layout/navbar/Navbar'
import WrittenPosts from '../src/layout/writtenPosts/WrittenPosts'
import CarePage from '../src/layout/carePage/CarePage'
import ContactPage from '../src/layout/contactPage/ContactPage'

import { useState, useEffect } from 'react'

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

function MainPage() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <>
      {loading ? (
        <LoaderContainer>
          <Loader />
          <p>Carregando...</p>
        </LoaderContainer>
      ) : (
        <>
          <div id="navBar">
            <Navbar />
          </div>
          <div id="introText">
            <WrittenPosts />
          </div>
          <div id="carePage">
            <CarePage />
          </div>
          <div id="contactPage">
            <ContactPage />
          </div>
        </>
      )}
    </>
  )
}

export default MainPage
