import React, { useEffect, useRef } from "react";
import LangtonsAnt from "../../cellAutomata/LangtonsAnt";
import BooleanTileGrid from "../../cellAutomata/TileGrid";
import { Container, Link } from "@chakra-ui/react";

const TILE_SIZE = 10;

const clearScreen = (context, color) => {
  const w = context.canvas.width;
  const h = context.canvas.height;
  context.fillStyle = color;
  context.fillRect(0, 0, w, h);
};

const CellAutomataArt = (props) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // Set canvas size programmatically
    canvas.width = 600; // Set your desired width
    canvas.height = 200; // Set your desired height

    const tileGrid = new BooleanTileGrid(
      canvas.width,
      canvas.height,
      TILE_SIZE
    );

    const ant = new LangtonsAnt(
      {
        x: Math.floor(tileGrid.width / 2),
        y: Math.floor(tileGrid.height / 2),
      },
      "red"
    );

    // Interval setup
    const intervalId = setInterval(() => {
      clearScreen(context, "#19202c");
      ant.doTurn(tileGrid);
      tileGrid.show(context, "white", false);
      ant.show(context, TILE_SIZE);
    }, 60);

    // Cleanup function to clear the interval
    return () => {
      clearInterval(intervalId);
    };
  }, []); // Empty dependency array to run only once on mount

  return (
    <Container centerContent>
      <Link
        href="https://en.wikipedia.org/wiki/Langton%27s_ant"
        alignItems="center"
      >
        <canvas ref={canvasRef} {...props} />
      </Link>
    </Container>
  );
};

export default CellAutomataArt;
