import { ChakraProvider } from "@chakra-ui/react"
import Layout from "../components/layouts/main"
import theme from "../theme/index"
import { AnimatePresence } from "framer-motion"
import { useEffect } from "react"
import "../public/vanta.css"

const Website = ({ Component, pageProps, router }) => {
    useEffect(() => {
        const threeScript = document.createElement("script")
        threeScript.setAttribute("id", "threeScript")
        threeScript.setAttribute(
            "src",
            "https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"
        )
        document.getElementsByTagName("head")[0].appendChild(threeScript)
        return () => {
            if (threeScript) {
                threeScript.remove()
            }
        }
    }, [])
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
