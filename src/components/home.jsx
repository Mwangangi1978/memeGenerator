import React, {useState, useEffect} from 'react';
import Header from './header'
import { Flex, Spacer,Text ,Image, Box} from '@chakra-ui/react';
import Form from './input'
import MemeButton from './button'





const Home = ()=>{
    const [data, setData] = useState({
        topText: "",
        bottomText: "",
        image:"http://i.imgflip.com/1bij.jpg"
    })
    const [info, setInfo] = useState({})

    useEffect(()=>{
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            console.log(data)
            setInfo(data)
        }
        getMemes()
    },[])
    
    const getMemeImage =() => {
        const memesArray = info.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setData(prevData => ({
            ...prevData,
            image: url
        }))
    }
    const handleChange = (event)=>{
        const{name, value} = event.target
        return(
            setData(prevData => ({
                ...prevData,
                [name]: value
                
            })) 
        )
    }

    return(
        <Flex flexDir={'column'}>
            <Header/>
            <Flex>
                <Form placeholder="Top Text" name="topText" value={data.topText} onChange={handleChange}/>
                <Spacer/>
                <Form  placeholder="Bottom Text"  name="bottomText" value={data.bottomText} onChange={handleChange}/>
            </Flex>

            <MemeButton onClick={getMemeImage}/>
           
            
            <Box alignSelf={'center'} margin={'20px'} maxWidth={'auto'} maxHeight={'auto'}>
                <div className="meme">
                    <Image
                        objectFit='cover'
                        src={data.image}
                    />
                    <h2 className="meme--text top">{data.topText}</h2>
                    <h2 className="meme--text bottom">{data.bottomText}</h2>
                </div>
            </Box>
        </Flex>
    )
};

export default Home;