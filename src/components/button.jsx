import React from 'react'
import { Button } from '@chakra-ui/react'
import { PlusSquareIcon } from '@chakra-ui/icons'

const MemeButton =()=>{
    return(
        <Button colorScheme='purple' variant={'solid'} leftIcon={<PlusSquareIcon/>} margin='0.625rem' >Generate new Image</Button>
    )
}

export default MemeButton;