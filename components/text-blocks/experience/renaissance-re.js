import { Box, Heading, UnorderedList, ListItem, Flex } from "@chakra-ui/react"
import DetailInfo from "../../detail-info"
import SeparatedGroup from "../../separated-group"

const RenaissanceRe = () => {
    return (
        <Box>
            <Heading as="h3" variant="section-title">
                RenaissanceRe
            </Heading>
            <Flex gap="2" wrap="wrap" direction="row" alignItems="baseline">
                <SeparatedGroup separator="|">
                    <DetailInfo variant="important">
                        Coporate Risk Analyst
                    </DetailInfo>
                    <DetailInfo>Crow Lane, Hamilton, Bermuda</DetailInfo>
                    <DetailInfo>Jun 2023 - Present</DetailInfo>
                </SeparatedGroup>
            </Flex>
            <UnorderedList mt={2}>
                <Heading as="h6" variant='section-subtitle'>
                    Responsibilities during busy season and renewals:
                </Heading>
                <ListItem mb={2}>
                    Interface with brokers regarding exposure and modelling data.
                </ListItem>
                <ListItem mb={2}>
                    Run RMS and AIR Vendor Catastrophe models and comparing against RenaissanceRe's internal
                    catastrophe model.
                </ListItem>
                <ListItem mb={2}>
                    Provide the following deliverables to underwriters:
                    <UnorderedList mt={2} fontSize={12}>
                        <ListItem>Meeting Prep Packets</ListItem>
                        <ListItem>Exposure Summaries and Analytics</ListItem>
                        <ListItem>Loss Trending</ListItem>
                        <ListItem>EP Curves (Both Vendor and Internal) at various zone / peril grains.</ListItem>
                    </UnorderedList>
                </ListItem>
                <Heading as="h6" variant='section-subtitle'>
                    Outside of busy season:
                </Heading>
                <ListItem mb={2}>
                    Advance new projects via prototyping and creating proof-of-concept tools.
                </ListItem>
                <ListItem mb={2}>
                    Creating scripts for document generation and automated reporting.
                </ListItem>
                <ListItem mb={2}>
                    Creating usability and convinience scripts to manage large data volumes from past deal submissions.
                </ListItem>
            </UnorderedList>
        </Box>
    )
}


export default RenaissanceRe