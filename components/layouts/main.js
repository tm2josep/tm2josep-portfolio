import Head from "next/head"
import { Box, Container, useColorMode } from "@chakra-ui/react"
import ThemeToggleButton from "../theme-toggle-button"
import Navbar from "../navbar"

const Main = ({ children, router }) => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <title>Mammen Joseph - Homepage</title>
            </Head>
            <Navbar path={router.asPath} />
            <Container maxW="container.md" pt={14}>
                {children}
            </Container>
        </Box>
    )
}

export default Main
