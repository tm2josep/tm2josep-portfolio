import React, { useEffect, useRef } from "react"
import LangtonsAnt from "../cellAutomata/LangtonsAnt"
import BooleanTileGrid from "../cellAutomata/TileGrid"
import { Container, Link } from "@chakra-ui/react"
const TILE_SIZE = 10

const clearScreen = (context, color) => {
    let w = context.canvas.width
    let h = context.canvas.height
    context.fillStyle = color
    context.fillRect(0, 0, w, h)
}

const CellAutomataArt = props => {
    const canvasRef = useRef(null)
    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext("2d")
        let tileGrid = new BooleanTileGrid(
            canvas.width,
            canvas.height,
            TILE_SIZE
        )
        const ant = new LangtonsAnt(
            {
                x: Math.floor(tileGrid.width / 2),
                y: Math.floor(tileGrid.height / 2)
            },
            "red"
        )

        setInterval(() => {
            clearScreen(context, "#19202c")
            ant.doTurn(tileGrid)
            tileGrid.show(context, "white", false)
            ant.show(context, TILE_SIZE)
        }, 60)
    }, [])

    return (
        <Container centerContent>
            <Link
                href="https://en.wikipedia.org/wiki/Langton%27s_ant"
                alignItems="center"
            >
                <canvas height="200px" ref={canvasRef} {...props} />
            </Link>
        </Container>
    )
}

export default CellAutomataArt
