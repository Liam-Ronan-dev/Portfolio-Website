/* These functions define animation variants for sliding elements
into the view from different directions (left, Right, Top).

These animation definitions can be used with the Framer Motion library to animate React components by applying them to the variants prop of a motion component. */

//Hidden represents starting state of element before animation
//Visible represents the final state of element after animation
export function slideInFromLeft(delay: number) {
  return {
    hidden: { x: -350, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 1.5,
      },
    },
  };
}

export function slideInFromRight(delay: number) {
  return {
    hidden: { x: 350, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 1.5,
      },
    },
  };
}

export const slideInFromTop = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
};
