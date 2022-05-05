import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react'
import { ReactQueryDevtools} from 'react-query/devtools';

// css global da aplicação
import { theme } from '../styles/theme';
import { SidebarDrawerProvider } from '../contexts/SidebarDrawerContext';

function MyApp({ Component, pageProps } : AppProps) {

  return (     

      <ChakraProvider resetCSS theme={theme}> 
        <SidebarDrawerProvider>
          <Component {...pageProps} />
        </SidebarDrawerProvider>
      </ChakraProvider>

  )
}

export default MyApp
