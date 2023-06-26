import merge from "../lib/utils/merge";

describe("merge", () => {
  let dest: { a: number; b: number };

  beforeEach(() => {
    dest = { a: 1, b: 2 };
  });

  it("merges two objects, overriding properties when override is true", () => {
    const src = { b: 3, c: 4 };
    const result = merge(dest, src, true);

    expect(result).toBe(dest);
    expect(result).toEqual({ a: 1, b: 3, c: 4 });
  });

  it("merges two objects, not overriding properties when override is false", () => {
    const src = { b: 3, c: 4 };
    const result = merge(dest, src, false);

    expect(result).toBe(dest);
    expect(result).toEqual({ a: 1, b: 2, c: 4 });
  });

  it("throws a TypeError if dest argument is missing", () => {
    const src = { b: 3, c: 4 };

    expect(() => {
      merge(undefined!, src, true);
    }).toThrow(TypeError);
  });

  it("throws a TypeError if src argument is missing", () => {
    expect(() => {
      merge(dest, undefined!, true);
    }).toThrow(TypeError);
  });
});
