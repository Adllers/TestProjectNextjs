import { Box, Flex, SimpleGrid, TableContainer, Table, Thead, Td, Tr, Th, Tfoot, Tbody, useToast, TableCaption, Icon, Text } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { SideBar } from "../components/Sidebar";
import { useState, useEffect, useCallback } from 'react'; 
import { BsHeartFill, BsTrashFill, BsCashCoin } from 'react-icons/bs'

interface ProductProps {
    id: number;
    name: string;
    imageURL: string;
    listPrice: number;
    salePrice: number;
}

export default function Favorites() {

  const [productsFavorite, setProductsFavorite] = useState<ProductProps[]>([]);

  const toast = useToast();

  useEffect(() => {

    const getAllProducts = async () => {
        
        const products = JSON.parse(localStorage.getItem('favoritesProductsList'));

        console.log(products);

        setProductsFavorite(products);

        console.log(productsFavorite)
    }

    getAllProducts();

  }, []);

  const deleteFavoriteProduct = useCallback(async (product: ProductProps ) => {

    try {
        
        console.log('delete')
       
    } catch (error) {

        console.log(error);

    }

  },[]);



  return (
    <Flex direction="column" h="100vh">
        <Header />

        

        <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
            
            <SideBar/>

            
            <SimpleGrid flex="1" gap="4" minChildWidth="320px" alignItems="flex-start" mt='35'>
                    
            
                    <TableContainer>

                    <Text fontSize={["2xl", "3xl"]} fontWeight="bold" letterSpacing="tight" w="64"> 
                        Meus Favoritos
                    </Text>

                        <Table variant='simple' mt='5'>
                            <TableCaption>Meus Produtos Favoritos</TableCaption>
                            <Thead>
                            <Tr>
                                <Th>Nome</Th>
                                <Th>Preço</Th>
                                <Th>Opções</Th>
                            </Tr>
                            </Thead>
                            <Tbody>

                            
                                
                                
                            {productsFavorite.map(product => (   
                                    <Tr>
                                        <Td>{product.name}</Td>
                                        <Td>{product.salePrice} RS</Td>
                                        <Td>
                                            <Flex>
                                                <Box>
                                                    <Icon as={BsCashCoin} color={"blue.400"} fontSize="23"/>
                                                </Box>
                                                <Box as="button" marginLeft='2'>
                                                    <Icon onClick={() => deleteFavoriteProduct(product)} as={BsTrashFill} color={"blue.400"} fontSize="23"/>
                                                </Box>     
                                            </Flex>
                                        </Td>
                                    </Tr>
                            ))}    

                                
                            
                            
                            </Tbody>
                            <Tfoot>
                            <Tr>
                                <Th>Nome</Th>
                                <Th>Preço</Th>
                                <Th>Opções</Th>
                            </Tr>
                            </Tfoot>
                        </Table>
                    </TableContainer> 
                    
                 

            </SimpleGrid>
            
        </Flex>
    </Flex>
  )  
}


