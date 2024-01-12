import React from 'react';
import { Input } from '@chakra-ui/react';

const Form = (props)=>{
    return(
        <Input variant='outline' placeholder={props.placeholder}style={{
            marginLeft:'10px',
            marginRight: '10px',
        }} />
    )
}

export default Form;
