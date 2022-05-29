import { Box, Heading, UnorderedList, ListItem, Flex } from "@chakra-ui/react"
import DetailInfo from "../../detail-info"
import SeparatedGroup from "../../separated-group"

const AareasInteractive = () => {
    return (
        <Box>
            <Heading as="h3" variant="section-title">
                Aareas Interactive
            </Heading>
            <Flex gap="2" wrap="wrap" direction="row" alignItems="baseline">
                <SeparatedGroup separator="|">
                    <DetailInfo variant="important">
                        Junior Software Engineer
                    </DetailInfo>
                    <DetailInfo>North York, ON, Canada</DetailInfo>
                    <DetailInfo>Jan - April 2019</DetailInfo>
                </SeparatedGroup>
            </Flex>
            <UnorderedList mt={2}>
                <ListItem mb={2}>
                    Developed a tool to plan home exterior and interior designs
                    in 3D, via a modern web browser.
                </ListItem>
                <ListItem mb={2}>
                    Wrote scripts to track, catalogue, and verify 3D assets to
                    ensure viability for the home design tool.
                </ListItem>
            </UnorderedList>
        </Box>
    )
}

export default AareasInteractive
