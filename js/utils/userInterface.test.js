import { describe, it, expect } from "vitest";
import { isActivePath } from "./userInterface.js";

describe("isActivePath", () => {
  it("returns true when current path matches href exactly", () => {
    // Arrange: Set up the test data
    const href = "/venue";
    const currentPath = "/venue";

    // Act: Call the function being tested
    const result = isActivePath(href, currentPath);

    // Assert: Check if the result matches the expected output
    expect(result).toBe(true);
  });

  it("returns true for root path when path is / or /index.html", () => {
    // Arrange: Set up the test data
    const href = "/";
    const currentPath1 = "/";
    const currentPath2 = "/index.html";

    // Act: Call the function being tested
    const result1 = isActivePath(href, currentPath1);
    const result2 = isActivePath(href, currentPath2);

    // Assert: Check if the results match the expected output
    expect(result1).toBe(true);
    expect(result2).toBe(true);
  });

  it("returns true when current path includes href", () => {
    // Arrange: Set up the test data
    const href = "/venue";
    const currentPath = "/venue/index.html?id=123";

    // Act: Call the function being tested
    const result = isActivePath(href, currentPath);

    // Assert: Check if the result matches the expected output
    expect(result).toBe(true);
  });

  it("returns false when current path does not match href", () => {
    // Arrange: Set up the test data
    const href = "/venue";
    const currentPath = "/login";

    // Act: Call the function being tested
    const result = isActivePath(href, currentPath);

    // Assert: Check if the result matches the expected output
    expect(result).toBe(false);
  });
});
