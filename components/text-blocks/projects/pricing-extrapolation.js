import { Heading, Box, Text, Link, Flex } from "@chakra-ui/react"
import SeparatedGroup from "../../separated-group.js"
import DetailInfo from "../../detail-info.js"

const PricingExtrapolation = () => {
    return (
        <Box>
            <Heading as="h3" variant="section-title">
                Automated Market Curve Extrapolation
            </Heading>
            <Flex gap="2" wrap="wrap" direction="row" alignItems="baseline">
                <SeparatedGroup separator="|">
                    <DetailInfo
                        url="https://www.enveloprisk.com"
                        variant="important"
                    >
                        Envelop Risk
                    </DetailInfo>
                    <DetailInfo url="https://www.python.org">
                        Python 3.10
                    </DetailInfo>
                    <DetailInfo url="https://plotly.com/dash/">
                        Dash Enterprise
                    </DetailInfo>
                    <DetailInfo url="https://pandas.pydata.org">
                        Pandas
                    </DetailInfo>
                </SeparatedGroup>
            </Flex>
            <Heading as="h4" variant="section-subtitle">
                Problem
            </Heading>
            <Text textAlign="justify">
                A dated excel file that could only perform one kind of market
                curve extrapolation was in use. This spreadsheet also restricted
                the user to a set number of layers and could not expand further.
                Everything was predefined as percentages, and did not account
                much for scaling of the primary portfolio.
            </Text>
            <Heading as="h4" variant="section-subtitle">
                Solution
            </Heading>
            <Text textAlign="justify">
                Based on a{" "}
                <Link
                    href="https://www.casact.org/sites/default/files/2021-02/2013_morel.pdf"
                    display="inline-flex"
                    alignItems="center"
                    variant="text-inline"
                >
                    paper
                </Link>{" "}
                written by David Morel of Willis Re. I used Dash Enterprise to
                build an interactive version of his paper, implementing the
                three base forms of market extrapolation outlined there. The
                tool allows for live editing of structures and automated pricing
                extrapolation.
            </Text>
        </Box>
    )
}

export default PricingExtrapolation