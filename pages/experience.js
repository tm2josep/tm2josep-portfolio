import {
    Container,
    Heading,
    Flex,
    UnorderedList,
    ListItem,
    Badge
} from "@chakra-ui/react"
import Section from "../components/section"

const Page = () => {
    return (
        <Container>
            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    Envelop Risk
                </Heading>
                <Flex gap="2" wrap="wrap" direction="row">
                    <Badge variant="subtle" colorScheme="blue">Underwriting Assistant</Badge>
                    <Badge variant="subtle" colorScheme="blue">Hamilton, Bermuda</Badge>
                    <Badge variant="subtle" colorScheme="blue">May - Aug 2021</Badge>
                    <Badge variant="subtle" colorScheme="blue">May - Dec 2020</Badge>
                    <Badge variant="subtle" colorScheme="blue">Nov - Dec 2019</Badge>
                </Flex>
                <UnorderedList mt={2}>
                    <ListItem>
                        Built a market curve pricing extrapolation tool using a
                        spline curve approach.
                    </ListItem>
                    <ListItem>
                        Built a portfolio peer finder and mock generator for
                        model verification.
                    </ListItem>
                    <ListItem>
                        Labelled and analyzed claims data to understand newer
                        loss trends.
                    </ListItem>
                    <ListItem>
                        Cleaned and organized portfolio data to run through
                        Envelop&apos;s AI based model.
                    </ListItem>
                </UnorderedList>
            </Section>
            <Section delay={0.4}>
                <Heading as="h3" variant="section-title">
                    Aareas Interactive
                </Heading>
                <Flex gap="2" wrap="wrap" direction="row">
                    <Badge variant="subtle" colorScheme="blue">Junior Software Engineer</Badge>
                    <Badge variant="subtle" colorScheme="blue">North York, ON, Canada</Badge>
                    <Badge variant="subtle" colorScheme="blue">Jan - April 2019</Badge>
                </Flex>
                <UnorderedList mt={2}>
                    <ListItem>
                        Developed a tool to plan home exterior and interior
                        designs in 3D, via a modern web browser.
                    </ListItem>
                    <ListItem>
                        Wrote scripts to track, catalogue, and verify 3D assets
                        to ensure viability for the home design tool.
                    </ListItem>
                </UnorderedList>
            </Section>
            <Section delay={0.6}>
                <Heading as="h3" variant="section-title">
                    Paper Edu (Gradeslam)
                </Heading>
                <Flex gap="2" wrap="wrap" direction="row">
                    <Badge variant="subtle" colorScheme="blue">Software Developer</Badge>
                    <Badge variant="subtle" colorScheme="blue">Montreal, QC, Canada</Badge>
                    <Badge variant="subtle" colorScheme="blue">May - Aug 2018</Badge>
                </Flex>
                <UnorderedList mt={2}>
                    <ListItem>
                        Designed and developed an intuitive input system for
                        mathematical equations and chemical reactions
                    </ListItem>
                    <ListItem>
                        Created middleware for a messaging system to increase
                        logging, error-handling and - in-turn - bug prevention.
                    </ListItem>
                    <ListItem>
                        Large team web development of a 24/7 online tutoring
                        platform.
                    </ListItem>
                </UnorderedList>
            </Section>
            <Section delay={0.8}>
                <Heading as="h3" variant="section-title">
                    Bank of Montreal
                </Heading>
                <Flex gap="2" wrap="wrap" direction="row">
                    <Badge variant="subtle" colorScheme="blue">Software Developer</Badge>
                    <Badge variant="subtle" colorScheme="blue">Toronto, ON, Canada</Badge>
                    <Badge variant="subtle" colorScheme="blue">Sep - Dec 2017</Badge>
                </Flex>
                <UnorderedList mt={2}>
                    <ListItem>
                        Built and designed a JSON based website builder to match
                        BMO branding and style guidelines.
                    </ListItem>
                    <ListItem>
                        Created a document generator based on the website
                        builder to create on-demand documentation.
                    </ListItem>
                    <ListItem>
                        Adapted the document generator to work client-side,
                        limiting the transfer of sensitive data - increasing
                        security.
                    </ListItem>
                </UnorderedList>
            </Section>
            <Section delay={1.0}>
                <Heading as="h3" variant="section-title">
                    Conrad Business, Entrepreneurship and Technology Centre
                </Heading>
                <Flex gap="2" wrap="wrap" direction="row">
                    <Badge variant="subtle" colorScheme="blue">BETS Intern</Badge>
                    <Badge variant="subtle" colorScheme="blue">Waterloo, ON, Canada</Badge>
                    <Badge variant="subtle" colorScheme="blue">Jan - Apr 2017</Badge>
                </Flex>
                <UnorderedList mt={2}>
                    <ListItem>
                        First Rotation: Notes n&apos; Electrons - Helped develop a
                        metronome that listens to the user and provides
                        feedback.
                    </ListItem>
                    <ListItem>
                        Second Rotation: AVRO Life Science - Assisted the
                        research and development of a pediatric trans-dermal
                        antihistamine drug delivery skin patch.
                    </ListItem>
                    <ListItem>
                        Third Rotation: Borealis wind - Helped prototype and
                        wrote a field test report for a wind turbine blade
                        deicing retrofit
                    </ListItem>
                </UnorderedList>
            </Section>
        </Container>
    )
}

export default Page
