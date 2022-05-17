import NextLink from "next/link"
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue
} from "@chakra-ui/react"
import ThemeToggleButton from "./theme-toggle-button"
import { HamburgerIcon } from "@chakra-ui/icons"

const LinkItem = ({ href, path, children }) => {
    const active = path === href
    return (
        <NextLink href={href}>
            <Link
                p={2}
                bg={active ? "active_bg" : "inactive_bg"}
                color={active ? "active" : "inactive"}
                borderRadius={"md"}
            >
                {children}
            </Link>
        </NextLink>
    )
}

const Navbar = props => {
    const { path } = props

    return (
        <Box
            position="fixed"
            as="nav"
            w="100%"
            style={{ backdropFilter: "blur(20px)" }}
            zIndex={1}
            {...props}
        >
            <Container
                display="flex"
                p={2}
                maxW="container.md"
                wrap="wrap"
                align="center"
                justify="space-between"
            >
                <Flex align="center" mr={5}>
                    <Link href="/">
                        <Heading as="h1" size="lg" letterSpacing={"tighter"}>
                            T. Mammen Joseph
                        </Heading>
                    </Link>
                </Flex>

                <Stack
                    direction={{ base: "column", md: "row" }}
                    display={{ base: "none", md: "flex" }}
                    width={{ base: "full", md: "auto" }}
                    alignItems="center"
                    flexGrow={1}
                    mt={{ base: 4, nmd: 0 }}
                >
                    <LinkItem href="/experience" path={path}>
                        Experience
                    </LinkItem>
                    <LinkItem href="/projects" path={path}>
                        Projects
                    </LinkItem>
                </Stack>
                <Box flex={1} align="right">
                    <ThemeToggleButton />
                </Box>
            </Container>
        </Box>
    )
}

export default Navbar
