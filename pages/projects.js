import { Container, Heading, Text, Link, Badge, Flex } from "@chakra-ui/react"
import Section from "../components/section.js"

const LinkBadge = ({ url, children }) => {
    return (
        <Badge variant="subtle" colorScheme="blue">
            <Link
                href={url}
                display="inline-flex"
                alignItems="center"
                variant="badge-inline"
            >
                {children}
            </Link>
        </Badge>
    )
}

const Page = () => {
    return (
        <Container>
            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    The Allocation Language
                </Heading>
                <Flex gap="2" wrap="wrap" direction="row">
                    <Badge variant="subtle" colorScheme="blue">
                        Personal Project
                    </Badge>
                    <LinkBadge url="https://www.python.org">
                        Python 3.10
                    </LinkBadge>
                    <LinkBadge url="https://pypi.org/project/rply/">
                        RPLY
                    </LinkBadge>
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
                <Flex gap="2" wrap="wrap" direction="row">
                    <LinkBadge url="https://www.enveloprisk.com">
                        Envelop Risk
                    </LinkBadge>
                    <LinkBadge url="https://www.python.org">
                        Python 3.10
                    </LinkBadge>
                    <LinkBadge url="https://plotly.com/dash/">
                        Dash Enterprise
                    </LinkBadge>
                    <LinkBadge url="https://pandas.pydata.org">
                        Pandas
                    </LinkBadge>
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
        </Container>
    )
}

export default Page
