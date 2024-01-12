import React, {useState} from 'react';
import Header from './header'
import { Flex, Spacer,Text ,Image, Box} from '@chakra-ui/react';
import Form from './input'
import MemeButton from './button'
import data from '../memesData'




const Home = ()=>{
    const [url, setUrl] = useState(null)
    function getMemeImage() {
        const memesArray = data.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setUrl(url)
    }
    

    return(
        <Flex flexDir={'column'}>
            <Header/>
            <Flex>
                <Form placeholder="Top Text"/>
                <Spacer/>
                <Form  placeholder="Bottom Text"/>
            </Flex>
            <MemeButton onClick={getMemeImage}/>
            <Box alignSelf={'center'} margin={'20px'} maxWidth={'auto'} maxHeight={'auto'}>
                <Image
                    objectFit='cover'
                    src={url}
                />
            </Box>
        </Flex>
    )
};

export default Home;