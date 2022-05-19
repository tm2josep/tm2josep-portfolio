import { Box, Container, Heading, Text } from "@chakra-ui/react"
import CellAutomataArt from "../components/langtonAnt.js"
import Section from "../components/section"

const Page = () => {
    return (
        <Container>
            <Section delay={0.3}>
                <Text justifyContent={"center"} mt={100}>
                    Uh oh! Something's gone wrong. Whatever you were trying to
                    get to may not exist anymore. Feel free to look around my
                    website though!
                </Text>
            </Section>
        </Container>
    )
}

export default Page
