import { extendTheme, ChakraProvider, useColorMode } from "@chakra-ui/react"
import Layout from "../components/layouts/main"
import theme from "../theme/index"
import { AnimatePresence } from "framer-motion"

const Website = ({ Component, pageProps, router }) => {
    return (
        <ChakraProvider theme={theme}>
            <Layout router={router}>
                <AnimatePresence exitBeforeEnter initial={true}>
                    <Component {...pageProps} key={router.route} />
                </AnimatePresence>
            </Layout>
        </ChakraProvider>
    )
}

export default Website
