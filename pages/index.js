import {
    Box,
    Container,
    Heading,
    Image,
    Text,
    useColorMode,
    chakra,
    HStack
} from "@chakra-ui/react"
import CellAutomataArt from "../components/langtonAnt.js"
import Marquee from "../components/Marquee.js"
import Section from "../components/section"

const ProfileImage = chakra(Image, {
    shouldForwardProp: prop => ["width", "height", "src", "alt"].includes(prop)
})

const Page = () => {
    const { colorMode } = useColorMode()

    return (
        <Container>
            <Section delay={0.3}>
                <Box display={{ md: "flex" }} mt={50}>
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
                            borderColor={
                                colorMode === "light" ? "black" : "white"
                            }
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
            </Section>
            <Section delay={0.6}>
                <Marquee>
                    <HStack>
                        <Image
                            src="/images/CompanyLogos/EnvelopLogo.png"
                            height="100px"
                            alt="Company Logo: Envelop"
                        ></Image>
                        <Image
                            src="/images/CompanyLogos/AareasInteractiveLogo.png"
                            height="100px"
                            alt="Company Logo: AareasInteractive"
                        ></Image>
                        <Image
                            src="/images/CompanyLogos/PaperCoLogo.png"
                            height="100px"
                            alt="Company Logo: PaperCo"
                        ></Image>
                        <Image
                            src="/images/CompanyLogos/BMOLogo.png"
                            height="100px"
                            alt="Company Logo: BMO"
                        ></Image>
                        <Image
                            src="/images/CompanyLogos/ConradCentreLogo.png"
                            height="100px"
                            alt="Company Logo: ConradCentre"
                        ></Image>
                        <Image
                            src="/images/CompanyLogos/RenaissanceReLogo.png"
                            height="100px"
                            alt="Company Logo: RenaissanceRe"
                        ></Image>
                    </HStack>
                </Marquee>
            </Section>
            <Section delay={0.9}>
                <Heading as="h4" variant="title-no-offset">
                    Summary
                </Heading>
                <Text textAlign="justify">
                    New graduate from the honours co-op mechanical engineering
                    program of the University of Waterloo. Have extensive
                    experience from multiple internships in software development
                    for actuarial automation, tooling for reinsurance
                    underwriting, data visualization, and data labelling.
                    Current rights to live and work include Canada, the United
                    Kingdom, and Bermuda.
                </Text>
            </Section>
            <Section delay={1.2}>
                <CellAutomataArt />
            </Section>
        </Container>
    )
}

export default Page
