import VantaBackdrop from "./graphics/vanta-backdrop"
import { Box, Heading, chakra, Image } from "@chakra-ui/react"

const ProfileImage = chakra(Image, {
    shouldForwardProp: prop => ["width", "height", "src", "alt"].includes(prop)
})

const ProfileCard = () => {
    return (
        <VantaBackdrop pt={10}>
            <Box
                display={{ md: "flex" }}
                p={5}
                height="min-content"
                color="white"
            >
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
            </Box>
        </VantaBackdrop>
    )
}

export default ProfileCard
