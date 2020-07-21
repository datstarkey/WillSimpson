const rightOffscreen = (element: HTMLElement, func: () => void) => {
  element.classList.add("right-offscreen");

  setTimeout(() => {
    func();
    element.classList.remove("right-offscreen");
  }, 1000);
};

const middleRight = (element: HTMLElement) => {
  element.classList.add("middle-right");
};
