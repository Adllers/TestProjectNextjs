import { Box, Flex, SimpleGrid, Text, Heading, Image } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { SideBar } from "../components/Sidebar";
import { useState, useEffect } from 'react'; 

interface ProductProps {
    id: number;
    name: string;
    imageURL: string;
    listPrice: number;
    salePrice: number;
}

export default function Home() {

  const [products, setProducts] = useState<ProductProps[]>([]);

  useEffect(() => {

    const getAllProducts = async () => {
        
        let response = await fetch('/api/products').then(resp => resp.json());
            
        if (response) {
            setProducts(response);
        }  

        console.log(products);
    }

    getAllProducts();

  }, []);

  return (
    <Flex direction="column" h="100vh">
        <Header />

        <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
            <SideBar/>

            <SimpleGrid flex="1" gap="4" minChildWidth="320px" alignItems="flex-start">


                {products.map(product => (

                    <Box
                        p={["6","8"]}
                        bg="gray.800"
                        borderRadius={8}
                        pb="4"
                    >

                        <Flex justify='center' align='center'>
                            <Box as='article' maxW='sm' p='12' borderWidth='1px' rounded='md'>

                                <Box  fontSize="20" fontWeight='bold' justifyContent="center" alignItems="center">
                                        { product.name }
                                </Box>

                                <Heading size='md' my='2'>
                                    <Box justifyContent="center" alignItems="center" >
                                        <Image src={product.imageURL} width="150" height="150" alt="Sem Foto"/>
                                    </Box>   
                                </Heading>

                                <Text  mt='4' justifyContent="center" alignItems="center">
                                    <s>De { product.listPrice } reais</s>
                                </Text>

                                <Box color='blue.400' fontWeight='bold' fontSize="24" justifyContent="center" alignItems="center">
                                    por { product.salePrice} reais
                                </Box>

                                <Text fontSize="14" mb='1' mt='3' justifyContent="center" alignItems="center">
                                    Em até 10x sem juros!
                                </Text>

                            </Box>
                        </Flex>
                    
                    </Box>
                ))}
                

            </SimpleGrid>
        </Flex>
    </Flex>
  )  
}