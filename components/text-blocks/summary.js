import { Heading, Text, Box } from "@chakra-ui/react"

const Summary = () => {
    return (
        <Box>
            <Heading as="h4" variant="title-no-offset">
                Summary
            </Heading>
            <Text textAlign="justify">
                New graduate from the honours co-op mechanical engineering
                program of the University of Waterloo. Have experience from
                multiple internships in software development for actuarial
                automation, tooling for reinsurance underwriting, data
                visualization, and data labelling. Currently have the right to
                live and work in Canada, the United Kingdom, and Bermuda.
            </Text>
        </Box>
    )
}

export default Summary
