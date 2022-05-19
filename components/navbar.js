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
    IconButton
} from "@chakra-ui/react"
import ThemeToggleButton from "./theme-toggle-button"
import { HamburgerIcon } from "@chakra-ui/icons"
import { IoLogoGithub, IoLogoLinkedin, IoLogoMedium } from "react-icons/io5"

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
            style={{ backdropFilter: "blur(2px)" }}
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
                            Mammen Joseph
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
                    <Link
                        href="https://github.com/tm2josep"
                        path={path}
                        display="inline-flex"
                        alignItems="center"
                    >
                        <IoLogoGithub />
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/mammen-joseph/"
                        path={path}
                        display="inline-flex"
                        alignItems="center"
                    >
                        <IoLogoLinkedin />
                    </Link>
                    <Link
                        href="https://medium.com/@tmammenjoseph"
                        path={path}
                        display="inline-flex"
                        alignItems="center"
                    >
                        <IoLogoMedium />
                    </Link>
                </Stack>

                <Box flex={1} align="right">
                    <ThemeToggleButton />
                </Box>

                <Box flex={0} align="right">
                    <Box ml={2} display={{ base: "inline-block", md: "none" }}>
                        <Menu>
                            <MenuButton
                                as={IconButton}
                                icon={<HamburgerIcon />}
                                variant="outline"
                                aria-label="menu"
                            ></MenuButton>
                            <MenuList>
                                <NextLink href="/" passHref>
                                    <MenuItem as={Link}>About</MenuItem>
                                </NextLink>
                                <NextLink href="/experience" passHref>
                                    <MenuItem as={Link}>Experience</MenuItem>
                                </NextLink>
                                <NextLink href="/projects" passHref>
                                    <MenuItem as={Link}>Projects</MenuItem>
                                </NextLink>
                                <MenuItem
                                    as={Link}
                                    href="https://github.com/tm2josep"
                                >
                                    Github
                                </MenuItem>
                                <MenuItem
                                    as={Link}
                                    href="https://www.linkedin.com/in/mammen-joseph/"
                                >
                                    LinkedIn
                                </MenuItem>
                                <MenuItem
                                    as={Link}
                                    href="https://medium.com/@tmammenjoseph"
                                >
                                    Medium
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Navbar
