import { Container, Heading, Text, Link, Flex } from "@chakra-ui/react"
import Section from "../components/section.js"
import SeparatedGroup from "../components/SeparatedGroup.js"
import DetailInfo from "../components/DetailInfo.js"
const Page = () => {
    return (
        <Container>
            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    The Allocation Language
                </Heading>
                <Flex gap="2" wrap="wrap" direction="row" alignItems="baseline">
                    <SeparatedGroup separator="|">
                        <DetailInfo>Personal Project</DetailInfo>
                        <DetailInfo url="https://www.python.org">
                            Python 3.10
                        </DetailInfo>
                        <DetailInfo url="https://pypi.org/project/rply/">
                            RPLY
                        </DetailInfo>
                    </SeparatedGroup>
                </Flex>
                <Heading as="h4" variant="section-subtitle">
                    Problem
                </Heading>
                <Text textAlign="justify">
                    Current (re)insurance policies are outlined in verbose
                    documents that define their behavior. This behavior is given
                    in various forms of technical jargon, with many terms that
                    mean the same thing. This problem exists in other industries
                    as well, but is particularly pronounced in the (re)insurance
                    industry. For example; the term &quot;limit&quot; is often
                    synonymous with &quot;limit of liability&quot;, &quot;line
                    size&quot;, &quot;exposure&quot;, and more. More peculiarly,
                    these additional terms can be used to mean something else
                    entirely. This inconsistency leads to the need for
                    qualifying terms in legal contracts to define exactly what
                    each term means, and this legalese is required for{" "}
                    <em>every</em> contract.
                </Text>
                <Heading as="h4" variant="section-subtitle">
                    Solution
                </Heading>
                <Text textAlign="justify">
                    The allocation language is my attempt as solving this
                    problem. The crux of the problem described above is the
                    inconsistency in language. I don&apos;t see a problem with
                    this on it&apos;s own, except that there needs to be
                    legalese appended to contracts to ensure deterministic
                    behavior for the contract. To solve this, I built a
                    programming language that operates in much the same way that
                    SQL does - except that instead of being used to query and
                    transform arbitrary sets of data, the allocation language is
                    tailored to take in some set of losses at any level of the
                    tower, and transform them in such away that liabilities are
                    &apos;allocated&apos; accordingly. With a programming
                    language, this behavior is deterministic. More information
                    can be found on my{" "}
                    <Link
                        href="https://tmammenjoseph.medium.com/why-and-how-i-tried-to-make-a-programming-language-8d102c5bc2e0"
                        display="inline-flex"
                        alignItems="center"
                        variant="text-inline"
                    >
                        Medium blog
                    </Link>
                    .
                </Text>
            </Section>
            <Section delay={0.4}>
                <Heading as="h3" variant="section-title">
                    Automated Market Curve Extrapolation
                </Heading>
                <Flex gap="2" wrap="wrap" direction="row" alignItems="baseline">
                    <SeparatedGroup separator="|">
                        <DetailInfo url="https://www.enveloprisk.com">
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
                    A dated excel file that could only perform one kind of
                    market curve extrapolation was in use. This spreadsheet also
                    restricted the user to a set number of layers and could not
                    expand further. Everything was predefined as percentages,
                    and did not account much for scaling of the primary
                    portfolio.
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
                    written by David Morel of Willis Re. I used Dash Enterprise
                    to build an interactive version of his paper, implementing
                    the three base forms of market extrapolation outlined there.
                    The tool allows for live editing of structures and automated
                    pricing extrapolation.
                </Text>
            </Section>
            <Section delay={0.4}>
                <Heading as="h3" variant="section-title">
                    Symbolic Input System
                </Heading>
                <Flex gap="2" wrap="wrap" direction="row" alignItems="baseline">
                    <SeparatedGroup separator="|">
                        <DetailInfo url="https://paper.co">
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
                    Current symbolic editing systems allow for creation of
                    equations by clicking series of buttons and filling in
                    values in a form-like approach. This works for tasks that
                    don't require speed, but in the context of a tutoring
                    platform that required speed, this was in-feasible.
                </Text>
                <Heading as="h4" variant="section-subtitle">
                    Solution
                </Heading>
                <Text textAlign="justify">
                    The solution I developed re-framed the buttons of modern
                    symbolic editors as template replacers. By injecting a
                    string of AsciiMath (a simplified symbolic expression
                    language) into a text field upon clicking of a button, it is
                    intuitive that replacing values or editing parts of that
                    string would change the output. The AsciiMath rendering
                    could produce LaTeX or MathJax, both of which would not work
                    for the output needed for the tutoring platform. MathJax was
                    slow enough to be infeasible, and Latex is no better to read
                    than AsciiMath. KaTeX was chosen as the renderer for the
                    project because it was fast enough to keep up with the
                    demands of a platform like this one.
                </Text>
            </Section>
        </Container>
    )
}

export default Page
