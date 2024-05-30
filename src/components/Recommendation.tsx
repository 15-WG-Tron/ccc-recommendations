import { RecommendationType } from "../App";
import {Card, CardContent, Typography, CardActionArea, Container} from '@mui/material'

type RecommedationProps = {
  recommadtionList: RecommendationType[]
}

const RecommedationInformation: React.FC<RecommedationProps> = ({recommadtionList}) => {

  return (
      <Container sx={{display: 'flex', flexWrap: 'wrap', flexDirection: 'row'}}>
        {recommadtionList.map((item) => {
          if (item.recType === 'book') {
            return (
          <Container key={item.name}>
              <Card sx={{marginY: 2, width: 'auto', padding: 2}}>
                <CardActionArea>

                  <CardContent>
                    <Typography variant='h5' sx={{textAlign: 'center'}}>
                      {item.name}
                    </Typography>
                    <Typography sx={{textAlign: 'center'}}>
                      {`By: ${item.author}`}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
          </Container>
            )
          } else {
            return (
               <Container key={item.name}>

            <Card sx={{marginY: 2, width: 'auto', padding: 2}}>
                <CardActionArea>

                  <CardContent>
                    <Typography variant='h5' sx={{textAlign: 'center'}}>
                      {item.name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
          </Container>
            )
        }
              })}

      </Container>
  )
}

export default RecommedationInformation
