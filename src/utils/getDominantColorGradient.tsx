import { useEffect, useState } from "react";
import ColorThief from "colorthief";

const getImageDominantColor = (imageUrl: string): string => {
  const [dominantColor, setDominantColor] = useState("#ffffff");

  useEffect(() => {
    const colorThief = new ColorThief();
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = imageUrl;
    img.onload = () => {
      const color = colorThief.getColor(img);
      setDominantColor(
        `linear-gradient(to bottom, rgb(${color[0]}, ${color[1]}, ${
          color[2]
        }), ${getLighterColor(
          `rgb(${color[0]}, ${color[1]}, ${color[2]})`,
          20
        )}) `
      );
    };
  }, [imageUrl]);

  return dominantColor;
};

function getLighterColor(color: string, percent: number) {
  const num = parseInt(color.replace("#", ""), 16),
    amt = Math.round(2.55 * percent),
    R = (num >> 16) + amt,
    B = ((num >> 8) & 0x00ff) + amt,
    G = (num & 0x0000ff) + amt;
  return (
    "#" +
    (
      0x1000000 +
      (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
      (B < 255 ? (B < 1 ? 0 : B) : 255) * 0x100 +
      (G < 255 ? (G < 1 ? 0 : G) : 255)
    )
      .toString(16)
      .slice(1)
  );
}

export default getImageDominantColor;
