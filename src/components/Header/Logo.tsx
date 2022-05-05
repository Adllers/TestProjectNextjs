import { Text } from '@chakra-ui/react';

export default function Logo() {

    return (
        // sm será 2xl e maior que sm sera 3xl
        <Text fontSize={["2xl", "3xl"]} fontWeight="bold" letterSpacing="tight" w="64"> 
            <Text as="span" ml="1" color="blue.500">@ </Text>
            Shop
        </Text>
    );

}