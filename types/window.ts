export {};

declare global {
  interface Window {
    ym?: (counterId: number, event: string, goal: string) => void;
  }
}
