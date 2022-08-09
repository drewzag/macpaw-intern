import styled from 'styled-components'
import {ReactComponent as VoteTable} from '../assets/vote-table.svg'

const NavButton = styled.button<{backgroundColor: string, borderColor: string}>`
position: relative;
box-sizing: border-box;
width: 140px;
height: 200px;
border-radius: 20px;
border: 4px solid ${props => props.borderColor};
background-color: ${props => props.backgroundColor};
`

export const Navigation = () => {

  return <>
  <div>Navigation</div>
  <div className='vote'>
  <NavButton backgroundColor='#B4B7FF' borderColor='rgba(255, 255, 255, 0.6)'>
  <VoteTable />
  </NavButton>
  </div>
  </>
}
