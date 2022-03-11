import { useState } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layouts/main'
import Fonts from '../components/fonts'
import theme from '../lib/theme'
import { DogInfo } from '../lib/dog-context'
import { AnimatePresence } from 'framer-motion'

const Website = ({ Component, pageProps, router }) => {
  const [sel, setSel] = useState({})
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout router={router}>
        <AnimatePresence exitBeforeEnter initial={true}>
          <DogInfo.Provider value={{ info: sel, setInfo: setSel }}>
            <Component {...pageProps} key={router.route} />
          </DogInfo.Provider>
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  )
}

export default Website

