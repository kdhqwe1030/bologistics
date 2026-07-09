import { Children, cloneElement, isValidElement } from "react";
import type { ReactElement, ReactNode } from "react";

export default function Stagger({
  children,
  step = 0.1,
  baseDelay = 0,
}: {
  children: ReactNode;
  /** seconds between each child */
  step?: number;
  /** seconds before the first child starts */
  baseDelay?: number;
}) {
  return (
    <>
      {Children.map(children, (child, index) => {
        if (!isValidElement(child)) return child;

        const existingDelay = (child.props as { delay?: number }).delay ?? 0;

        return cloneElement(child as ReactElement<{ delay?: number }>, {
          delay: existingDelay + baseDelay + index * step,
        });
      })}
    </>
  );
}
