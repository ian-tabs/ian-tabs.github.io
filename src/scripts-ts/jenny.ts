export interface blueprint {
  elementType: string;
  childrenBlueprints?: blueprint[];
  attributes?: { type: string; value: string }[];
  appendTo?: HTMLElement | Element | HTMLBodyElement;
  events?: { type: string; trigger: () => void }[];
  text?: string;
}

const build = (blueprint: blueprint): HTMLElement => {
  const { elementType, attributes, childrenBlueprints, events, appendTo } =
    blueprint;
  const newElement = document.createElement(elementType);
  childrenBlueprints?.forEach((childBlueprint) => {
    newElement.appendChild(build(childBlueprint));
  });
  attributes?.forEach((attribute) => {
    newElement.setAttribute(attribute.type, attribute.value);
  });
  events?.forEach((event) => {
    newElement.addEventListener(event.type, event.trigger);
  });
  if (!appendTo) return newElement;
  appendTo.appendChild(newElement);
  return newElement;
};

const test = "exported";

export { build, test };

// sample container
// const blueprint: blueprint = {
//   elementType: "DIV",
//   appendTo: body as HTMLBodyElement,
//   attributes: [{ type: "class", value: "container" }],
// };
