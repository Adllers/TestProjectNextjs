import { Box, Flex, SimpleGrid, Text, Heading, Image, Icon, Link, Center} from "@chakra-ui/react";
import { Header } from "../components/Header";
import { SideBar } from "../components/Sidebar";
import { useState, useEffect, useCallback } from 'react'; 
import { BsHeartFill } from 'react-icons/bs'
import { GiHeartStake } from 'react-icons/gi'

interface ProductProps {
    id: number;
    name: string;
    imageURL: string;
    listPrice: number;
    salePrice: number;
    favorite: boolean;
}

export async function getStaticProps() {

    const getProducts = {
        method: "GET",
    };

    const apiProducts = await fetch('http://localhost:3000/api/products', getProducts).then(resp => resp.json());


        return {

            revalidate: 30,

            props: {
                apiProducts,
                teste: Math.random()
            }
        }

}

export default function Home(props) {

  const [products, setProducts] = useState<ProductProps[]>([]);

  const { apiProducts } = props;

  const { teste } = props;
 
  
  useEffect(() => {

    setProducts(apiProducts);
    
  }, [apiProducts]);


  const favoriteProduct = useCallback(async (product: ProductProps ) => {

    try {

        product.favorite = !product.favorite;
        
        const update = {
            method: "PUT",
            body: JSON.stringify(product),
        };

        const newListProducts = await fetch('/api/products', update).then(resp => resp.json());
        
        setProducts(newListProducts);

    
    } catch (error) {

        console.log(error);

    }

  },[]);


  return (

    <Flex direction="column" h="100vh">
        <Header />

        <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">

            <SideBar/>
            
            <SimpleGrid flex="1" gap="4" minChildWidth="320px" alignItems="flex-start">

                {products?.map(product => (

                    <Box
                        key={`${product.id}-${product.imageURL}`}
                        p={["6","8"]}
                        bg="gray.800"
                        borderRadius={8}
                        pb="4"
                    >

                        <Flex justify='center' align='center'>
                            <Box as='article' maxW='sm' p='12' borderWidth='1px' borderRadius='lg' rounded='md'>

                                <Box  display='flex' flexDirection='row' justifyContent='space-between' fontSize="20" fontWeight='bold'  alignItems="baseline" >
                                        { product.name }
                                        <Box >
                                            <Box as="button" onClick={() => favoriteProduct(product)} >
                                                
                                                {product.favorite == true
                                                    ?
                                                    <Icon as={GiHeartStake} color={"blue.400"} fontSize={30}/>
                                                    :
                                                    <Icon as={BsHeartFill} color={"blue.400"} fontSize={30}/>
                                                }

                                            </Box>
                                        </Box>
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
            <Center flexDirection='column'>                                  
                <Box>
                    It is just a test! Static Page for 30 seconds: <Text color={"blue.400"}>{teste}</Text>
                </Box>
                <Box>
                    Code at Github: <Text color={"blue.400"}><Link href='https://github.com/Adllers/TestProjectNextjs'>https://github.com/Adllers/TestProjectNextjs </Link></Text>  
                </Box>
            </Center>
    </Flex>
  )  
}


