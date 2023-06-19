function startsWith(
  fullString: string,
  startString: string,
  pos: number = 0,
  i: boolean = false
): boolean {
  // return fullString.startsWith(startString, pos);
  fullString = i ? fullString.toLowerCase() : fullString;
  startString = i ? startString.toLowerCase() : startString;

  if (pos) {
    fullString = fullString.slice(pos, fullString.length);
  }
  while (startString.length > 0 && fullString[0] === startString[0]) {
    startString = startString.slice(1, pos);
    fullString = fullString.slice(1, pos);
  }
  return startString.length === 0;
}

describe("startsWith", () => {
  test("returns true when full string starts with start string", () => {
    expect(startsWith("Hello World", "Hello")).toBe(true);
  });

  test("returns false when full string does not start with start string", () => {
    expect(startsWith("Hello World", "World")).toBe(false);
  });

  test("returns true when both full string and start string are empty", () => {
    expect(startsWith("", "")).toBe(true);
  });

  test("returns true when start string is empty", () => {
    expect(startsWith("Hello World", "")).toBe(true);
  });

  test("handles unicode strings correctly", () => {
    expect(startsWith("こんにちは", "こ")).toBe(true);
  });

  test("handles startPos correctly", () => {
    const input = "To be, or not to be, that is the question.";
    expect(startsWith(input, "not to be", 10)).toBe(true);
    expect(startsWith(input, "NOT TO BE", 10, true)).toBe(true);
  });
});

function endsWith(
  fullString: string,
  endString: string,
  pos?: number,
  i: boolean = false
): boolean {
  fullString = i ? fullString.toLowerCase() : fullString;
  endString = i ? endString.toLowerCase() : endString;
  pos = pos ?? fullString.length;
  fullString = fullString.slice(0, pos);
  while (
    endString.length > 0 &&
    fullString[fullString.length - 1] === endString[endString.length - 1]
  ) {
    endString = endString.slice(pos, endString.length - 1);
    fullString = fullString.slice(pos, fullString.length - 1);
  }
  return endString.length === 0;
}

describe("endsWith", () => {
  test("returns true when full string ends with end string", () => {
    expect(endsWith("Hello World", "World")).toBe(true);
  });

  test("returns false when full string does not end with end string", () => {
    expect(endsWith("Hello World", "Hello")).toBe(false);
  });

  test("returns true when both full string and end string are empty", () => {
    expect(endsWith("", "")).toBe(true);
  });

  test("returns true when end string is empty", () => {
    expect(endsWith("Hello World", "")).toBe(true);
  });

  test("handles unicode strings correctly", () => {
    expect(endsWith("こんにちは", "にちは")).toBe(true);
  });

  test("handles endPos correctly", () => {
    const input = "To be, or not to be, that is the question.";
    expect(input.endsWith("to be", 19)).toBe(true);
    expect(endsWith(input, "TO BE", 19, true)).toBe(true);
  });
});
