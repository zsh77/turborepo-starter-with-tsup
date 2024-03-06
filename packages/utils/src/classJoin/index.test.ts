import { classJoin } from ".";

jest.spyOn(global.console, "log");

describe("@repo/utils/classJoin", () => {
  it("filters and joins classnames by a single space", () => {
    const condition = true;

    expect(
      classJoin(
        "flex items-center",
        condition ? "justify-center" : "justify-content",
        false
      )
    ).toEqual("flex items-center justify-center");
  });
});
