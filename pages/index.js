import { Container } from "@chakra-ui/react"
import CellAutomataArt from "../components/graphics/langton-ant.js"
import Section from "../components/section"
import LogoWall from "../components/graphics/logo-wall.js"
import ProfileCard from "../components/profile-card.js"
import Summary from "../components/text-blocks/summary.js"

const Page = () => {
    return (
        <Container mt={3}>
            <Section delay={0.3}>
                <ProfileCard />
            </Section>
            <Section delay={0.6}>
                <Summary />
            </Section>
            <Section delay={0.9}>
                <LogoWall />
            </Section>
            <Section delay={1.2}>
                <CellAutomataArt />
            </Section>
        </Container>
    )
}

export default Page
