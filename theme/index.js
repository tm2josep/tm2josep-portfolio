import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react"
import styles from "./styles"

const config = {
    initialColorMode: "dark",
    useSystemColorMode: false,
    semanticTokens: {
        colors: {
            active: {
                default: 'white',
            },
            active_bg: {
                default: 'cyan.400',
            },
        }
    }
}

const theme = extendTheme(
    {
        ...config,
        styles
    },
    withDefaultColorScheme({ colorScheme: 'blue' })
)

export default theme
