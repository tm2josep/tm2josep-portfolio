import { Container } from "@chakra-ui/react"
import Section from "../components/section"
import AareasInteractive from "../components/text-blocks/experience/aareas-interactive"
import BankOfMontreal from "../components/text-blocks/experience/bank-of-montreal"
import ConradCentre from "../components/text-blocks/experience/conrad-bets-centre"
import EnvelopRisk from "../components/text-blocks/experience/envelop-risk"
import PaperEdu from "../components/text-blocks/experience/paper-edu"
import RenaissanceRe from "../components/text-blocks/experience/renaissance-re.js"

const Page = () => {
    return (
        <Container>
            <Section delay={0.2}>
                <RenaissanceRe />
            </Section>
            <Section delay={0.4}>
                <EnvelopRisk />
            </Section>
            <Section delay={0.6}>
                <AareasInteractive />
            </Section>
            <Section delay={0.8}>
                <PaperEdu />
            </Section>
            <Section delay={1.0}>
                <BankOfMontreal />
            </Section>
            <Section delay={1.2}>
                <ConradCentre />
            </Section>
        </Container>
    )
}

export default Page
