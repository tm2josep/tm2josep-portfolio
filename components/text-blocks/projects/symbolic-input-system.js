import { Heading, Box, Text, Flex } from "@chakra-ui/react"
import SeparatedGroup from "../../separated-group.js"
import DetailInfo from "../../detail-info.js"

const SymbolicInputSystem = () => {
    return (
        <Box>
            <Heading as="h3" variant="section-title">
                Symbolic Input System
            </Heading>
            <Flex gap="2" wrap="wrap" direction="row" alignItems="baseline">
                <SeparatedGroup separator="|">
                    <DetailInfo url="https://paper.co" variant="important">
                        Paper Edu
                    </DetailInfo>
                    <DetailInfo url="http://asciimath.org">
                        AsciiMath
                    </DetailInfo>
                    <DetailInfo url="https://katex.org">Katex</DetailInfo>
                </SeparatedGroup>
            </Flex>
            <Heading as="h4" variant="section-subtitle">
                Problem
            </Heading>
            <Text textAlign="justify">
                Current symbolic editing systems allow for creation of equations
                by clicking series of buttons and filling in values in a
                form-like approach. This works for tasks that don&apos;t require
                speed, but in the context of a tutoring platform that required
                speed, this was in-feasible.
            </Text>
            <Heading as="h4" variant="section-subtitle">
                Solution
            </Heading>
            <Text textAlign="justify">
                The solution I developed re-framed the buttons of modern
                symbolic editors as template replacers. By injecting a string of
                AsciiMath (a simplified symbolic expression language) into a
                text field upon clicking of a button, it is intuitive that
                replacing values or editing parts of that string would change
                the output. The AsciiMath rendering could produce LaTeX or
                MathJax, both of which would not work for the output needed for
                the tutoring platform. MathJax was slow enough to be infeasible,
                and Latex is no better to read than AsciiMath. KaTeX was chosen
                as the renderer for the project because it was fast enough to
                keep up with the demands of a platform like this one.
            </Text>
        </Box>
    )
}

export default SymbolicInputSystem