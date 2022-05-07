import { HStack, Icon, Box } from "@chakra-ui/react";
import { RiShoppingCartLine } from "react-icons/ri";
import { GiHeartStake } from "react-icons/gi";


export default function NotificationNav() {
    
    return (

        <HStack 

            spacing={["6", "8"]} 
            mx={["6", "8"]}  
            pr={["6", "8"]}  
            py="1" 
            color="gray.300"
            borderRightWidth={1}
            borderColor="gray.700"

        >   
            

            <Box as="button" marginTop={2}>
                <Icon as={GiHeartStake} color={"blue.400"} fontSize="20"/>
            </Box> 
            <Icon as={RiShoppingCartLine} fontSize="20"/>
        </HStack>

    );
}