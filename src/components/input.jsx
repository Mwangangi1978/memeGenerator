import React from 'react';
import { Input } from '@chakra-ui/react';

const Form = (props)=>{
    return(
        <Input variant='outline' 
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
            name={props.name}
            style={{
                marginLeft:'10px',
                marginRight: '10px',
        }} />
    )
}

export default Form;
