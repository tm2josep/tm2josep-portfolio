import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react"

const config = {
    initialColorMode: "dark",
    useSystemColorMode: false,
    fonts: {
        heading: "Times New Roman, serif",
        body: "Arial, sans-serif"
    },
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
    {
        ...config
    },
    withDefaultColorScheme({ colorScheme: "blue" })
)

export default theme
