import {
    Box,
    Container,
    Heading,
    Image,
    useColorMode,
    chakra
} from "@chakra-ui/react"

const ProfileImage = chakra(Image, {
    shouldForwardProp: prop => ["width", "height", "src", "alt"].includes(prop)
})

const Page = () => {
    const { colorMode } = useColorMode()

    return (
        <Container>
            <Box
                borderRadius="lg"
                bg={"blue.500"}
                color={"white"}
                p={3}
                mb={6}
                align="center"
            >
                Hi! I'm an Analyst based in Bermuda.
            </Box>

            <Box display={{ md: "flex" }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Mammen Joseph
                    </Heading>
                    <p>Analyst - Corporate Risk @ Renaissance Re</p>
                </Box>
                <Box
                    flexShrink={0}
                    mt={{ base: 4, md: 0 }}
                    ml={{ md: 6 }}
                    textAlign="center"
                >
                    <Box
                        borderColor={colorMode === "light" ? "black" : "white"}
                        borderWidth={2}
                        borderStyle="solid"
                        w="100px"
                        h="100px"
                        display="inline-block"
                        borderRadius="full"
                        overflow="hidden"
                    >
                        <ProfileImage
                            src="/images/headshot.jpg"
                            alt="Profile image"
                            borderRadius="full"
                            width="100%"
                            height="100%"
                        />
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}

export default Page
