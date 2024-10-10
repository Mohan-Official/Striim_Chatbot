import './App.css'
import { Box, styled } from '@mui/material'
import Historybar from './components/HistoryBar/Historybar'
import Maincontainer from './components/MainContainer/Maincontainer'

function App() {
  const Landingpage = styled(Box)({
    display: 'grid',
    gridTemplateColumns: '1fr 3fr', 
    height: '100vh',
    // width:'100%',
    // padding: '10px',
    // backgroundColor:'red',
  })

  // Historybar styled with rounded corners
  const HistorybarContainer = styled(Box)({
    borderRadius: '10px 0 0 10px',
    height: '100%',
    overflow:'hidden'
  })

  // Maincontainer styled with rounded corners
  const MaincontainerBox = styled(Box)({
    borderRadius: '0 10px 10px 0',
    height: '100%',
    overflow:'hidden'
  })

  return (
    <Landingpage>
      <HistorybarContainer>
        <Historybar />
      </HistorybarContainer>
      <MaincontainerBox>
        <Maincontainer />
      </MaincontainerBox>
    </Landingpage>
  )
}

export default App
