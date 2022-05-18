import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react"

const styles = {}

const components = {
    Heading: {
        variants: {
            "section-title": {
                textDecoration: "underline",
                fontSize: 26,
                textUnderlineOffset: 6,
                textDecorationColor: "#525252",
                textDecorationThickness: 4,
                marginTop: 3,
                marginBottom: 4
            }
        }
    },
    Link: {}
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
