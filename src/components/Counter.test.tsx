import { fireEvent, render, screen } from "solid-testing-library";
import { describe, it } from "vitest";

import Counter from "./Counter";

describe("<Counter />", () => {
  it("increments value", ({ expect }) => {
    const { unmount } = render(() => <Counter />);
    const button = screen.queryByRole("button") as HTMLButtonElement;
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/Clicks: 0/);
    fireEvent.click(button);
    expect(button).toHaveTextContent(/Clicks: 1/);
    unmount();
  });

  it("renders 1", ({ expect }) => {
    const { container, unmount } = render(() => <Counter />);
    expect(container).toMatchSnapshot();
    unmount();
  });
});
