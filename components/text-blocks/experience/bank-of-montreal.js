import { Box, Heading, UnorderedList, ListItem, Flex } from "@chakra-ui/react"
import DetailInfo from "../../detail-info"
import SeparatedGroup from "../../separated-group"

const BankOfMontreal = () => {
    return (
        <Box>
            <Heading as="h3" variant="section-title">
                Bank of Montreal
            </Heading>
            <Flex gap="2" wrap="wrap" direction="row" alignItems="baseline">
                <SeparatedGroup separator="|">
                    <DetailInfo variant="important">
                        Software Developer
                    </DetailInfo>
                    <DetailInfo>Toronto, ON, Canada</DetailInfo>
                    <DetailInfo>Sep - Dec 2017</DetailInfo>
                </SeparatedGroup>
            </Flex>
            <UnorderedList mt={2}>
                <ListItem mb={2}>
                    Built and designed a JSON based website builder to match BMO
                    branding and style guidelines.
                </ListItem>
                <ListItem mb={2}>
                    Created a document generator based on the website builder to
                    create on-demand documentation.
                </ListItem>
                <ListItem mb={2}>
                    Adapted the document generator to work client-side, limiting
                    the transfer of sensitive data - increasing security.
                </ListItem>
            </UnorderedList>
        </Box>
    )
}

export default BankOfMontreal
