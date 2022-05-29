import { useEffect, useState, useRef } from "react"
import WAVES from "vanta/dist/vanta.waves.min"
import * as THREE from "three"
import { Box } from "@chakra-ui/react"

const VantaBackdrop = ({ children, ...props }) => {
    const [vantaEffect, setVantaEffect] = useState(0)
    const vantaRef = useRef(null)
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(
                WAVES({
                    el: vantaRef.current,
                    THREE,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    color: 0x5172d,
                    shininess: 31.0,
                    waveHeight: 35.0,
                    waveSpeed: 1.05,
                    zoom: 0.65
                })
            )
        }

        return () => {
            if (vantaEffect) {
                vantaEffect.destroy()
            }
        }
    }, [vantaEffect])
    return (
        <Box ref={vantaRef} {...props}>
            {children}
        </Box>
    )
}

export default VantaBackdrop
