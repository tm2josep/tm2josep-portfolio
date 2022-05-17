import { Box, Container, Heading } from "@chakra-ui/react"

const Page = () => {
    return (
        <Container>
            {/* <Box borderRadius="lg" bg={"blue"} color={"white"} p={3} mb={6} align="center">
                Hi! I'm an Analyst based in Bermuda.
            </Box> */}

            <Box display={{md:"flex"}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Mammen Joseph
                    </Heading>
                    <p>Analyst - Corporate Risk @ Renaissance Re</p>
                </Box>

            </Box>
        </Container>
    )
}

export default Page
