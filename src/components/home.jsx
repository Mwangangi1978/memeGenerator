import React from 'react';
import Header from './header'
import { Flex, Spacer,Text } from '@chakra-ui/react';
import Form from './input'
import MemeButton from './button'



const Home = ()=>{
    return(
        <Flex flexDir={'column'}>
            <Header/>
            <Flex>
                <Form/>
                <Spacer/>
                <Form/>
            </Flex>
            <MemeButton/>
        </Flex>
    )
};

export default Home;