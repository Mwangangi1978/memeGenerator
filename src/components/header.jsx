import React from 'react';
import { Flex, Spacer,Text } from '@chakra-ui/react';

const Header = ()=>{
    return(
        <nav 
        style={{
            marginBottom: '20px',
            backgroundColor:'#805AD5'
            
        }}>
            <Flex 
                flexDirection='row' 
                alignItems='center'
                width= 'auto'
                borderBottom='black solid 0.1rem'
                marginLeft={'1rem'}
                marginRight={'1rem'}
            >
                <img src="/download.jpg"
                    style={{
                        width: '3rem',
                        height: '3rem'
                    }}
                ></img>
                <Spacer />
                <Text style={{fontWeight: 'bold', fontSize: 'lg', color:'white'}}>Meme Generator</Text>
                <Spacer />
                <Text style={{fontSize: 'md', color: 'white'}}>Project 3</Text>
            </Flex>
        </nav>
    )
}

export default Header;