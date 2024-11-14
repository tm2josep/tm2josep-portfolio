import { Box, Text, Heading, chakra, Image, Container } from "@chakra-ui/react"
import Section from "./section"

const ProfileImage = chakra(Image, {
    shouldForwardProp: prop => ["width", "height", "src", "alt"].includes(prop)
})

const ProfileCard = () => {
    return (
        <Container display={{ md: "flex" }} height="min-content">
            <Box flexGrow={1} textAlign={{ base: "center", md: "justify" }}>
                <Heading as="h2" variant="page-title">
                    Mammen Joseph
                </Heading>
                <Section delay={0.3}>
                    <Text>BASc. Mechanical Eng. University of Waterloo</Text>
                    <Text>Python | SQL | Javascript</Text>
                </Section>
            </Box>
            <Box
                flexShrink={0}
                mt={{ base: 4, md: 0 }}
                ml={{ md: 6 }}
                textAlign="center"
            >
                <Box
                    borderWidth={2}
                    borderStyle="solid"
                    w="100px"
                    h="100px"
                    display="inline-block"
                    borderRadius="full"
                    borderColor="white"
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
        </Container>
    )
}

export default ProfileCard
