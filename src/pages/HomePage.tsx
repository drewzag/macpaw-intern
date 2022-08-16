import styled from 'styled-components'
import GirlAndPat from '../assets/girl-and-pet.png'

const Wrapper = styled.div`
  margin: 20px 0 20px 20px;
  position: relative;
  .background {
    position: absolute;
    top: 50%;
    left: 52%;
    transform: translate(-50%, -50%);
    width: 89%;
    height: 93%;
    background-color: #fbe0dc;
    border-radius: 20px;
    z-index: -1;
  }
  img {
    width: 100%;
  }
`

export const HomePage = () => {
  return (
    <>
      <Wrapper>
        <div className='container'>
          <div className='background'></div>
          <img src={GirlAndPat} alt='girl and pat' />
        </div>
      </Wrapper>
    </>
  )
}
