declare module "colorthief" {
  export default class ColorThief {
    constructor();
    getColor(sourceImage: HTMLImageElement): number[];
    getPalette(
      sourceImage: HTMLImageElement,
      colorCount?: number,
      quality?: number
    ): number[][];
    getColorFromUrl(
      imageUrl: string,
      callback: (color: number[]) => void
    ): void;
    getPaletteFromUrl(
      imageUrl: string,
      colorCount?: number,
      quality?: number,
      callback?: (palette: number[][]) => void
    ): void;
  }
}
