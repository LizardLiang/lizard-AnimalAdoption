import { useState } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layouts/main'
import Fonts from '../components/fonts'
import theme from '../lib/theme'
import { DogInfo } from '../lib/dog-context'
import { AnimatePresence } from 'framer-motion'

const Website = ({ Component, pageProps, router }) => {
  const [animalList, setAnimalList] = useState([])
  const [sel, setSel] = useState({})
  const handleSelection = newSel => {
    newSel.animal_age =
      newSel.animal_age === '' ? 'UNDEFINE' : newSel.animal_age
    setSel(newSel)
  }
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout router={router}>
        <AnimatePresence exitBeforeEnter initial={true}>
          <DogInfo.Provider
            value={{
              info: sel,
              setInfo: handleSelection,
              animalList: animalList,
              setAnimalList: setAnimalList
            }}
          >
            <Component {...pageProps} key={router.route} />
          </DogInfo.Provider>
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  )
}

export default Website

