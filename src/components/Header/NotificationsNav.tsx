import { HStack, Icon, Box, Link } from "@chakra-ui/react";
import { RiShoppingCartLine, RiUser3Line } from "react-icons/ri";
import { BsHeartFill } from "react-icons/bs";


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
            <Link href="/favorites">
                <Box as="button">
                    <Icon as={BsHeartFill} color={"blue.400"} fontSize="20"/>
                </Box> 
            </Link>
            <Icon as={RiShoppingCartLine} fontSize="20"/>
        </HStack>

    );
}