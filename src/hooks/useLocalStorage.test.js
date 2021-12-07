import { act, renderHook } from "@testing-library/react-hooks";
import useLocalStorage from "./useLocalStorage";

describe("useLocalStorage test", () => {
  beforeEach(() => {
    Object.defineProperty(window, "localStorage", {
      value: {
        getItem: jest.fn(() => null),
        setItem: jest.fn(() => null),
      },
      writable: true,
    });
  });

  it("should store undefined value when default value is not given", () => {
    const { result } = renderHook(() => useLocalStorage("nick"));

    const [stored] = result.current;
    expect(stored).toBe(undefined);
  });

  it("should stored given value", () => {
    const expected = "default value";
    const { result } = renderHook(() => useLocalStorage("nick", expected));

    const [stored] = result.current;

    expect(stored).toBe(expected);
  });

  it("should update stored value when client change it from undefined", () => {
    const expectedNewValue = "mark";
    const { result } = renderHook(() => useLocalStorage("nick"));
    const [, setValue] = result.current;

    act(() => {
      setValue(expectedNewValue);
    });

    const [stored] = result.current;
    expect(stored).toEqual(expectedNewValue);
  });

  it("should update stored value when client change it", () => {
    const expectedNewValue = "mark";
    const { result } = renderHook(() => useLocalStorage("nick", "old"));
    const [, setValue] = result.current;

    act(() => {
      setValue(expectedNewValue);
    });

    const [stored] = result.current;
    expect(stored).toEqual(expectedNewValue);
  });
});
