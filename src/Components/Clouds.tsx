import { Box } from "@mui/material"

interface cloudProps {
    cloudOneTop: string,
    cloudOneRight: string,
    cloudTwoTop: string,
    cloudTwoRight: string,
    cloudThreeTop: string,
    cloudThreeRight: string,
}

const Clouds:React.FC<cloudProps> = ({cloudOneTop, cloudOneRight, cloudTwoTop, cloudTwoRight, cloudThreeTop, cloudThreeRight}) => {

  return (
    <Box>
        {/* Cloud 1 */}
    <Box sx={{
      position: 'relative',
      top: cloudOneTop,
      right: cloudOneRight,
      width: '280px',
      height: '80px',
      backgroundColor: '#A14EFF',
      borderRadius: '80px',
      zIndex: '-1'
    }}>
      <Box sx={{
          position: 'absolute',
          top: '-30px',
          left: '40px',
          width: '80px',
          height: '70px',
          backgroundColor: '#A14EFF',
          borderRadius: '50%',
          boxShadow: '90px 0 0 30px #A14EFF'
      }}/>
    </Box>
        {/* Cloud 2 */}
    <Box sx={{
      position: 'relative',
      top: cloudTwoTop,
      right: cloudTwoRight,
      width: '280px',
      height: '80px',
      backgroundColor: '#E46DFE',
      borderRadius: '80px',
      zIndex: '-1'
    }}>
      <Box sx={{
          position: 'absolute',
          top: '-30px',
          left: '40px',
          width: '80px',
          height: '70px',
          backgroundColor: '#E46DFE',
          borderRadius: '50%',
          boxShadow: '90px 0 0 30px #E46DFE'
      }}/>
    </Box>
        {/* Cloud 3 */}
    <Box sx={{
      position: 'relative',
      top: cloudThreeTop,
      right: cloudThreeRight,
      width: '280px',
      height: '80px',
      backgroundColor: '#FFE2F7',
      borderRadius: '80px',
      zIndex: '-1'
    }}>
      <Box sx={{
          position: 'absolute',
          top: '-30px',
          left: '40px',
          width: '80px',
          height: '70px',
          backgroundColor: '#FFE2F7',
          borderRadius: '50%',
          boxShadow: '90px 0 0 30px #FFE2F7'
      }}/>
    </Box>
    </Box>
  )
}

export default Clouds