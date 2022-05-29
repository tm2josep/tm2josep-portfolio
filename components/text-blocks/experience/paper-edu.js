import { Box, Heading, UnorderedList, ListItem, Flex } from "@chakra-ui/react"
import DetailInfo from "../../detail-info"
import SeparatedGroup from "../../separated-group"

const PaperEdu = () => {
    return (
        <Box>
            <Heading as="h3" variant="section-title">
                Paper Edu (Gradeslam)
            </Heading>
            <Flex gap="2" wrap="wrap" direction="row" alignItems="baseline">
                <SeparatedGroup separator="|">
                    <DetailInfo variant="important">
                        Software Developer
                    </DetailInfo>
                    <DetailInfo>Montreal, QC, Canada</DetailInfo>
                    <DetailInfo>May - Aug 2018</DetailInfo>
                </SeparatedGroup>
            </Flex>
            <UnorderedList mt={2}>
                <ListItem mb={2}>
                    Designed and developed an intuitive input system for
                    mathematical equations and chemical reactions
                </ListItem>
                <ListItem mb={2}>
                    Created middleware for a messaging system to increase
                    logging, error-handling and - in-turn - bug prevention.
                </ListItem>
                <ListItem mb={2}>
                    Large team web development of a 24/7 online tutoring
                    platform.
                </ListItem>
            </UnorderedList>
        </Box>
    )
}


export default PaperEdu