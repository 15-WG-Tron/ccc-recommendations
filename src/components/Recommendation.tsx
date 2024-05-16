import { RecommendationType } from "../App";
import {Card, CardContent, CardMedia, Typography, Button, CardActionArea, CardActions, Link, Container} from '@mui/material'

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
            <Link href={item.url} underline="none" >
              <Card sx={{margin: 2, width: 'auto'}}>
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
              </Link>
          </Container>
            )
          } else {
            return (
               <Container key={item.name}>
              <Link href={item.url} underline="none">

            <Card sx={{margin: 2, width: 'auto'}}>
                <CardActionArea>

                  <CardContent>
                    <Typography variant='h5' sx={{textAlign: 'center'}}>
                      {item.name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Container>
            )
        }
              })}
      </Container>
  )
}

export default RecommedationInformation
