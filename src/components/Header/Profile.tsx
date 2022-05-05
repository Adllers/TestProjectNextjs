import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean;
}

export default function profile({ showProfileData = true}: ProfileProps) {
    return (
        <Flex align="center">
            {showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text>Cliente Teste</Text>   
                    <Text color="gray.300" fontSize="small">cliente@test.com.br</Text> 
                </Box> 
            )} 

            <Avatar size="md" name="Cliente Teste"/>   
        </Flex>
    );
}