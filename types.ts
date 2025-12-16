export enum AppState {
  INTRO = 'INTRO',
  EXPERIENCE = 'EXPERIENCE',
}

export enum GestureType {
  UNKNOWN = 'UNKNOWN',
  FIST = 'FIST',         // Stack
  OPEN_PALM = 'OPEN_PALM',    // Shuffle
  POINT_ONE = 'POINT_ONE',    // Select
  POINT_WIGGLE = 'POINT_WIGGLE' // Flip
}

export interface HandData {
  gesture: GestureType;
  position: { x: number; y: number }; // Normalized 0-1
  velocity: { x: number; y: number };
}

export interface TarotCardData {
  id: number;
  name: string;
  image: string;
  desc: string;
}
