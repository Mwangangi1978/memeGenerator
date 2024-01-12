import React from 'react'
import { Button } from '@chakra-ui/react'
import { PlusSquareIcon } from '@chakra-ui/icons'

const MemeButton =({onClick})=>{
    return(
        <Button colorScheme='purple' variant={'solid'} leftIcon={<PlusSquareIcon/>} margin='0.625rem'onClick={onClick} >Generate new Image</Button>
    )
}

export default MemeButton;