import React, {useState, useEffect, useRef} from 'react';
import Header from './header'
import { Flex, Spacer,Text ,Image, Box, Button} from '@chakra-ui/react';
import { ArrowDownIcon } from '@chakra-ui/icons';
import Form from './input'
import MemeButton from './button'
import html2canvas from 'html2canvas';




const Home = ()=>{
    const [data, setData] = useState({
        topText: "",
        bottomText: "",
        image:"http://i.imgflip.com/1bij.jpg"
    })
    const [info, setInfo] = useState({});
    const [isFilled, setisFilled] = useState(false)
    

    

    const memeContainerRef = useRef(null);

    useEffect(()=>{
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
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
    const downloadMeme = () => {
        const downloadButton = document.getElementById('downloadButton');
    
        // Hide the download button during image capture
        downloadButton.style.display = 'none';
    
        html2canvas(memeContainerRef.current, { useCORS: true }).then((canvas) => {
            // Show the download button after image capture
            downloadButton.style.display = 'block';

            const link = document.createElement('a');
            link.href = canvas.toDataURL();
            link.download = 'meme.png';
            link.click();
        }); 
      };

      const handleShow =()=>{
        if(data.topText || data.bottomText){
            setisFilled(true)
        }
        else{
            setisFilled(false)
        }
      }

    return(
        <Flex flexDir={'column'}>
            <Header/>
            <Flex>
                <Form 
                    placeholder="Top Text" 
                    name="topText" 
                    value={data.topText} 
                    onChange={(event) => {
                        handleChange(event);
                        handleShow();
                    }}
                />
                <Spacer/>
                <Form  
                    placeholder="Bottom Text"  
                    name="bottomText" 
                    value={data.bottomText} 
                    onChange={(event) => {
                        handleChange(event);
                        handleShow();
                    }}
                />
            </Flex>
            
            <MemeButton onClick={getMemeImage}/>
           
            
            <Box alignSelf={'center'} margin={'20px'} maxWidth={'auto'} maxHeight={'auto'} ref={memeContainerRef}>
                <div className="meme">
                    <Image
                        objectFit='cover'
                        src={data.image}
                    />
                    <h2 className="meme--text top">{data.topText}</h2>
                    <h2 className="meme--text bottom">{data.bottomText}</h2>
                    {isFilled &&
                        <Button
                            id="downloadButton"
                            position="absolute"
                            top={0}
                            right={0}
                            borderRadius="full"
                            bgColor="#805AD5"
                            color="white"
                            size="sm"
                            onClick={downloadMeme}
                        >
                            <ArrowDownIcon />
                        </Button>
                    }
                </div>
            </Box>
        </Flex>
    )
};

export default Home;