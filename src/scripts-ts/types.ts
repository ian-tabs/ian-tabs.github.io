export interface blueprint {
  elementType: string;
  childrenBlueprints?: blueprint[];
  attributes?: [string, string][];
  placedAt?: { parent: HTMLElement; position?: number };
  events?: [string, () => void][];
  text?: string;
}

// export interface instructions {

// }

// export interface order {
//   blueprint: blueprint;
//   instructions: instructions;
// }

// type ElementType: string;
// interface ElementType: string;
