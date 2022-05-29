import {
    Box,
    Container,
    Heading,
    Image,
    Text,
    chakra,
    Flex,
    Link
} from "@chakra-ui/react"
import CellAutomataArt from "../components/langtonAnt.js"
import Section from "../components/section"
import VantaBackdrop from "../components/vantaBackdrop.js"

const ProfileImage = chakra(Image, {
    shouldForwardProp: prop => ["width", "height", "src", "alt"].includes(prop)
})

const CompanyLogo = ({ href, src, alt }) => {
    return (
        <Link href={href}>
            <Image
                mb={2}
                borderRadius="6px"
                src={src}
                maxHeight="100"
                maxWidth="200"
                alt={alt}
            ></Image>
        </Link>
    )
}

const IntroCard = () => {
    return (
        <Box display={{ md: "flex" }} p={5} height="min-content" color="white">
            <Box flexGrow={1}>
                <Heading as="h2" variant="page-title" >
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
    )
}

const Page = () => {
    return (
        <Container mt={3}>
            <Section delay={0.3}>
                <VantaBackdrop pt={10}>
                    <IntroCard />
                </VantaBackdrop>
            </Section>
            <Section delay={0.9}>
                <Heading
                    as="h4"
                    variant="title-no-offset"
                >
                    Summary
                </Heading>
                <Text textAlign="justify">
                    New graduate from the honours co-op mechanical engineering
                    program of the University of Waterloo. Have experience from
                    multiple internships in software development for actuarial
                    automation, tooling for reinsurance underwriting, data
                    visualization, and data labelling. Currently have the right
                    to live and work in Canada, the United Kingdom, and Bermuda.
                </Text>
            </Section>
            <Section delay={0.6}>
                <Flex
                    wrap="wrap"
                    align="center"
                    justify="space-evenly"
                    width="full"
                >
                    <CompanyLogo
                        href="https://www.renre.com"
                        src="/images/CompanyLogos/RenaissanceReLogo.png"
                        alt="Company Logo: RenaissanceRe"
                    ></CompanyLogo>
                    <CompanyLogo
                        href="https://www.enveloprisk.com"
                        src="/images/CompanyLogos/EnvelopLogo.png"
                        alt="Company Logo: Envelop"
                    ></CompanyLogo>
                    <CompanyLogo
                        href="https://paper.co"
                        src="/images/CompanyLogos/PaperCoLogo.png"
                        alt="Company Logo: PaperCo"
                    ></CompanyLogo>
                    <CompanyLogo
                        href="https://aareas.com"
                        src="/images/CompanyLogos/AareasInteractiveLogo.png"
                        alt="Company Logo: AareasInteractive"
                    ></CompanyLogo>
                    <CompanyLogo
                        href="https://www.bmo.com/main/personal"
                        src="/images/CompanyLogos/BMOLogo.png"
                        alt="Company Logo: BMO"
                    ></CompanyLogo>
                    <CompanyLogo
                        href="https://uwaterloo.ca/conrad-school-entrepreneurship-business/"
                        src="/images/CompanyLogos/ConradCentreLogo.png"
                        maxWidth="200"
                    ></CompanyLogo>
                </Flex>
            </Section>
            <Section delay={1.2}>
                <CellAutomataArt />
            </Section>
        </Container>
    )
}

export default Page
