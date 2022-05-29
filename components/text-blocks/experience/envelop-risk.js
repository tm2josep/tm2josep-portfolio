import { Box, Heading, Flex, UnorderedList, ListItem } from "@chakra-ui/react"
import DetailInfo from "../../detail-info"
import SeparatedGroup from "../../separated-group"

const EnvelopRisk = () => {
    return (
        <Box>
            <Heading as="h3" variant="section-title">
                Envelop Risk
            </Heading>
            <Flex gap="2" wrap="wrap" direction="row" alignItems="baseline">
                <SeparatedGroup separator="|">
                    <DetailInfo variant="important">
                        Underwriting Assistant
                    </DetailInfo>
                    <DetailInfo>Hamilton, Bermuda</DetailInfo>
                    <DetailInfo>May - Aug 2021</DetailInfo>
                    <DetailInfo>May - Dec 2020</DetailInfo>
                    <DetailInfo>Nov - Dec 2019</DetailInfo>
                </SeparatedGroup>
            </Flex>
            <UnorderedList mt={2}>
                <ListItem mb={2}>
                    Built a market curve pricing extrapolation tool using a
                    spline curve approach.
                </ListItem>
                <ListItem mb={2}>
                    Built a portfolio peer finder and mock generator for model
                    verification.
                </ListItem>
                <ListItem mb={2}>
                    Labelled and analyzed claims data to understand newer loss
                    trends.
                </ListItem>
                <ListItem mb={2}>
                    Cleaned and organized portfolio data to run through
                    Envelop&apos;s AI based model.
                </ListItem>
            </UnorderedList>
        </Box>
    )
}

export default EnvelopRisk