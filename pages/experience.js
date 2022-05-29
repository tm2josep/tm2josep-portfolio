import {
    Container,
    Heading,
    Flex,
    UnorderedList,
    ListItem
} from "@chakra-ui/react"
import DetailInfo from "../components/detail-info"
import Section from "../components/section"
import SeparatedGroup from "../components/separated-group"
import AareasInteractive from "../components/text-blocks/experience/aareas-interactive"
import BankOfMontreal from "../components/text-blocks/experience/bank-of-montreal"
import ConradCentre from "../components/text-blocks/experience/conrad-bets-centre"
import EnvelopRisk from "../components/text-blocks/experience/envelop-risk"
import PaperEdu from "../components/text-blocks/experience/paper-edu"

const Page = () => {
    return (
        <Container>
            <Section delay={0.2}>
                <EnvelopRisk />
            </Section>
            <Section delay={0.4}>
                <AareasInteractive />
            </Section>
            <Section delay={0.6}>
                <PaperEdu />
            </Section>
            <Section delay={0.8}>
                <BankOfMontreal />
            </Section>
            <Section delay={1.0}>
                <ConradCentre />
            </Section>
        </Container>
    )
}

export default Page
