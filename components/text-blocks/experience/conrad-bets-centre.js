import { Box, Heading, UnorderedList, ListItem, Flex } from "@chakra-ui/react"
import DetailInfo from "../../detail-info"
import SeparatedGroup from "../../separated-group"

const ConradCentre = () => {
    return (
        <Box>
            <Heading as="h3" variant="section-title">
                Conrad Business, Entrepreneurship and Technology Centre
            </Heading>
            <Flex gap="2" wrap="wrap" direction="row" alignItems="baseline">
                <SeparatedGroup separator="|">
                    <DetailInfo variant="important">BETS Intern</DetailInfo>
                    <DetailInfo>Waterloo, ON, Canada</DetailInfo>
                    <DetailInfo>Jan - Apr 2017</DetailInfo>
                </SeparatedGroup>
            </Flex>
            <UnorderedList mt={2}>
                <ListItem mb={2}>
                    First Rotation: Notes n&apos; Electrons - Helped develop a
                    metronome that listens to the user and provides feedback.
                </ListItem>
                <ListItem mb={2}>
                    Second Rotation: AVRO Life Science - Assisted the research
                    and development of a pediatric trans-dermal antihistamine
                    drug delivery skin patch.
                </ListItem>
                <ListItem mb={2}>
                    Third Rotation: Borealis wind - Helped prototype and wrote a
                    field test report for a wind turbine blade deicing retrofit
                </ListItem>
            </UnorderedList>
        </Box>
    )
}

export default ConradCentre