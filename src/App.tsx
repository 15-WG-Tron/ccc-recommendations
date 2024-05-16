import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Link, Container } from '@mui/material';
import RecommedationInformation from './components/Recommendation';



export type RecommendationType = {
  name: string,
  author?: string
  url?: string,
  recType: string
}

const recommendations: RecommendationType[] = [
  {name: "The Dichotomy of Leadership", author: "Jocko Wilink & Leif Babin", url: "https://www.amazon.com/Dichotomy-Leadership-Balancing-Challenges-Ownership/dp/1250195772", recType: "book" },
  {name: "Legacy", author: "James W. Kerr", url: "https://www.amazon.com/Legacy-James-Kerr/dp/147210353X", recType: "book" }, 
    {name: "The 21 Irrefutable Laws of Leadership", author: "John Maxwell", url: "https://www.amazon.com/21-Irrefutable-Laws-Leadership-Anniversary/dp/0785288376", recType: 'book' }, 
  {name: 'Atomic Habits', author: 'James Clear', url: 'https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299', recType: 'book'}, {name: 'The Kill Chain', author: 'Christian Brose', url: 'https://www.amazon.com/Kill-Chain-Defending-America-High-Tech/dp/031653353X', recType: 'book'}, {name: 'Start with Why', author: 'Simon Sinek', url: 'https://www.amazon.com/Start-Why-Leaders-Inspire-Everyone/dp/1591846447', recType: 'book' }, {name: 'The Total Money Makeover', author: 'Dave Ramsey', url: 'https://www.amazon.com/Total-Money-Makeover-Classic-Financial/dp/1595555277', recType: 'book'}, {name: 'Eat Smarter', author: 'Shawn Stevenson', url: 'https://www.amazon.com/Eat-Smarter-Metabolism-Upgrade-Transform-ebook/dp/B07W3M55SP', recType: 'book' }, {
    name: 'Call Sign Chaos', author: 'Jim Mattis & Bing West', url: 'https://www.amazon.com/Call-Sign-Chaos-Learning-Lead/dp/0812996836', recType: 'book'
  }, {name: 'Dare to Lead', author: 'Brene Brown', url: 'https://www.amazon.com/Dare-Lead-Brave-Conversations-Hearts/dp/0399592520', recType: 'book'}, {name: 'Limitless', author: 'Jim Kwik', url: 'https://www.amazon.com/Limitless-Upgrade-Anything-Faster-Exceptional/dp/1401958230', recType: 'book'}, {name: 'Boundaries', author: 'Dr. Henry Cloud', url: 'https://www.amazon.com/Boundaries-Updated-Expanded-When-Control/dp/0310351804', recType: 'book'}, {name: 'The Power of Positive Leadership', author: 'Jon Gordan', url: 'https://www.amazon.com/Power-Positive-Leadership-Transform-Organizations/dp/1119351979', recType: 'book' }, {name: 'Craig Groeschel Leadershp Podcast', url: 'https://www.craiggroeschel.com/leadershippodcast', recType: 'podcast' }, {name: 'Dr. Stephen Cabral Health Podcast', url: 'https://stephencabral.com/podcasts/', recType: 'podcast' }, {name: 'The Ramsey Show Podcast', url: 'https://www.ramseysolutions.com/shows/the-ramsey-show', recType: 'podcast'}, {name: 'Maxwell Leadership Podcast', url: 'https://www.maxwellleadership.com/podcast/', recType: 'podcast' }, {name: 'Jocko Podcast', url: 'https://jockopodcast.com/', recType: 'podcast' }, {name: 'The Secret to Success Podcast', url: 'https://www.s2spodcast.com/', recType: 'podcast' }, {name: 'Serendipity With Inky Johnson', url: 'https://www.inkyjohnson.com/', recType: 'podcast'  }
]

const bookList = recommendations.filter(item => item.recType === 'book')
const podcastList = recommendations.filter(item => item.recType === 'podcast')

console.log(bookList)

function App() {
  
  return (
    <Container className='container'>
     
      <Typography variant='h3' sx={{marginY: 2, textAlign: 'center'}}>15th Wing Command Chief's Recommendations</Typography>
      <Typography variant='h4' sx={{textAlign: 'center'}}>"Success leaves clues"</Typography>
      <Typography variant='h5' sx={{textAlign: 'center', marginBottom: 3}}>- Jim Kwik</Typography>
      <Typography variant='h4' sx={{textAlign: 'center', textDecoration: 'underline'}}>Books</Typography>
        <RecommedationInformation recommadtionList={bookList} />
      <Typography variant='h4' sx={{textAlign: 'center', textDecoration: 'underline', marginTop: 2}}>Podcasts</Typography>
        <RecommedationInformation recommadtionList={podcastList} />

    </Container>
  )
 
}

export default App
