import { Heading, Box, Text, Flex } from "@chakra-ui/react"
import SeparatedGroup from "../../separated-group.js"
import DetailInfo from "../../detail-info.js"

const DocumentGenerator = () => {
    return (
        <Box>
            <Heading as="h3" variant="section-title">
                Document Generator
            </Heading>
            <Flex gap="2" wrap="wrap" direction="row" alignItems="baseline">
                <SeparatedGroup separator="|">
                    <DetailInfo url="https://www.bmo.com" variant="important">
                        BMO
                    </DetailInfo>
                    <DetailInfo url="https://angular.io">Angular 2+</DetailInfo>
                    <DetailInfo url="https://www.npmjs.com/package/pdf-gen">
                        PDF Gen
                    </DetailInfo>
                </SeparatedGroup>
            </Flex>
            <Heading as="h4" variant="section-subtitle">
                Problem
            </Heading>
            <Text textAlign="justify">
                The website builder project being built at BMO used JSON files
                to build a series of web-forms that took in user information.
                The forms often required sensitive information like credit card
                info, social insurance numbers, and more. The issue was that
                documents had to be generated from this information in a secure
                way, and the repeated transfer of information over the network
                increased this risk.
            </Text>
            <Heading as="h4" variant="section-subtitle">
                Solution
            </Heading>
            <Text textAlign="justify">
                It was the opinion of my manager at BMO that client side
                generation of documentation could reduce the security risk
                posed. I built a series of adaptor classes and document
                generators that could take in the information from both the JSON
                configuration, and the user input data, to generate the required
                documents in the browser itself. Leveraging the Angular
                framework and a few document generation libraries, the solution
                could generate both excel and pdf files.
            </Text>
        </Box>
    )
}

export default DocumentGenerator