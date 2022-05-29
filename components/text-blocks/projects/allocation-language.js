import { Heading, Box, Text, Link, Flex } from "@chakra-ui/react"
import SeparatedGroup from "../../separated-group.js"
import DetailInfo from "../../detail-info.js"

const AllocationLanguage = () => {
    return (
        <Box>
            <Heading as="h3" variant="section-title">
                The Allocation Language
            </Heading>
            <Flex gap="2" wrap="wrap" direction="row" alignItems="baseline">
                <SeparatedGroup separator="|">
                    <DetailInfo variant="important">
                        Personal Project
                    </DetailInfo>
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
                Current (re)insurance policies are outlined in verbose documents
                that define their behavior. This behavior is given in various
                forms of technical jargon, with many terms that mean the same
                thing. This problem exists in other industries as well, but is
                particularly pronounced in the (re)insurance industry. For
                example; the term &quot;limit&quot; is often synonymous with
                &quot;limit of liability&quot;, &quot;line size&quot;,
                &quot;exposure&quot;, and more. More peculiarly, these
                additional terms can be used to mean something else entirely.
                This inconsistency leads to the need for qualifying terms in
                legal contracts to define exactly what each term means, and this
                legalese is required for <em>every</em> contract.
            </Text>
            <Heading as="h4" variant="section-subtitle">
                Solution
            </Heading>
            <Text textAlign="justify">
                The allocation language is my attempt at solving this problem.
                The crux of the problem described above is the inconsistency in
                language. I don&apos;t see a problem with this on it&apos;s own,
                except that there needs to be legalese appended to contracts to
                ensure deterministic behavior for the contract. To solve this, I
                built a programming language that operates in much the same way
                that SQL does - except that instead of being used to query and
                transform arbitrary sets of data, the allocation language is
                tailored to take in some set of losses at any level of the
                tower, and transform them in such away that liabilities are
                &apos;allocated&apos; accordingly. With a programming language,
                this behavior is deterministic. More information can be found on
                my{" "}
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
        </Box>
    )
}

export default AllocationLanguage
