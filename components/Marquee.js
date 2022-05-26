import { Box, chakra } from "@chakra-ui/react"
import { motion, isValidMotionProp } from "framer-motion"

const AnimatedBox = chakra(motion.div, {
    shouldForwardProp: prop => isValidMotionProp(prop) || prop === "children"
})

const marqueeVariants = {
    animate: {
        x: ["100%", "-500%"],
        transition: {
            x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 10,
                ease: "linear"
            }
        }
    }
}

export default function Marquee({ children }) {
    return (
        <Box overflow="hidden">
            <AnimatedBox {...marqueeVariants}>{children}</AnimatedBox>
        </Box>
    )
}
