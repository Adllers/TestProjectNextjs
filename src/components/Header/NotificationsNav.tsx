import { HStack, Icon } from "@chakra-ui/react";
import { RiShoppingCartLine, RiUser3Line } from "react-icons/ri";


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
            <Icon as={RiUser3Line} fontSize="20"/> 
            <Icon as={RiShoppingCartLine} fontSize="20"/>
        </HStack>

    );
}