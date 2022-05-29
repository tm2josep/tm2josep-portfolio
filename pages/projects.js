import { Container } from "@chakra-ui/react"
import Section from "../components/section.js"
import AllocationLanguage from "../components/text-blocks/projects/allocation-language.js"
import PricingExtrapolation from "../components/text-blocks/projects/pricing-extrapolation.js"
import SymbolicInputSystem from "../components/text-blocks/projects/symbolic-input-system.js"
import DocumentGenerator from "../components/text-blocks/projects/document-generator.js"

const Page = () => {
    return (
        <Container>
            <Section delay={0.2}>
                <AllocationLanguage />
            </Section>
            <Section delay={0.4}>
                <PricingExtrapolation />
            </Section>
            <Section delay={0.4}>
                <SymbolicInputSystem />
            </Section>
            <Section delay={0.4}>
                <DocumentGenerator />
            </Section>
        </Container>
    )
}

export default Page
