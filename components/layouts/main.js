import Head from "next/head"
import { Box, Container } from "@chakra-ui/react"
import Navbar from "../navbar"

const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8} overflowX="hidden">
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Mammen Joseph - Homepage</title>
            </Head>
            <Navbar path={router.asPath} />
            <Container maxW="container.xl" pt={14}>
                {children}
            </Container>
        </Box>
    )
}

export default Main
