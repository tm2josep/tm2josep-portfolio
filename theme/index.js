import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react"

const styles = {
    div: {
        overflowX: "hidden"
    },
    canvas: {
        width: "100%"
    }
}

const components = {
    Heading: {
        variants: {
            "title-no-offset": {
                textDecoration: "underline",
                fontSize: 26,
                textUnderlineOffset: 6,
                textDecorationColor: "#525252",
                textDecorationThickness: 4,
                marginTop: 2,
                marginBottom: 2,
                lineHeight: 2
            },
            "section-title": {
                textDecoration: "underline",
                fontSize: 26,
                textUnderlineOffset: 6,
                textDecorationColor: "#525252",
                textDecorationThickness: 4,
                marginTop: 2,
                marginBottom: 2,
                marginLeft: -5,
                lineHeight: 2
            },
            "section-subtitle": {
                textDecoration: "underline",
                fontSize: 20,
                textUnderlineOffset: 2,
                textDecorationColor: "#525252",
                textDecorationThickness: 2,
                marginTop: 2,
                marginBottom: 2
            }
        }
    },
    Badge: {
        variants: {
            info: {
                marginTop: 2,
                marginBottom: 2,
                marginLeft: 1
            },
            important: {
                color: "cyan.800",
                marginTop: 2,
                marginBottom: 2,
                marginLeft: 1,
                _dark: {
                    color: "cyan.400"
                }
            },
            plain: {
                margin: 0,
                padding: 0
            }
        }
    },
    Link: {
        variants: {
            "text-inline": {
                textDecoration: "underline",
                textDecorationColor: "#525252",
                fontWeight: 900
            },
            "badge-inline": {
                textDecoration: "underline",
                textDecorationColor: "#525252",
                fontWeight: 800
            }
        }
    }
}

const fonts = {
    heading: "Times New Roman, serif",
    body: "Arial, sans-serif"
}

const colors = {}

const config = {
    initialColorMode: "dark",
    useSystemColorMode: false,
    semanticTokens: {
        colors: {
            active: {
                default: "white"
            },
            active_bg: {
                default: "cyan.400"
            }
        }
    }
}

const theme = extendTheme(
    { config, styles, components, fonts, colors },
    withDefaultColorScheme({ colorScheme: "blue" })
)

export default theme
