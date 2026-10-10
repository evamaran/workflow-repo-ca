import { describe, it, expect, beforeEach } from "vitest";
import { getUsername, saveUser } from "./storage.js";

describe("getUsername", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("returns the name from the user object in storage", () => {
    // Arrange: Set up the test data
    const user = { name: "John" };
    saveUser(user);

    // Act: Call the function being tested
    const result = getUsername();

    // Assert: Check if the result matches the expected output
    expect(result).toBe("John");
  });

  it("returns null when no user exists in storage", () => {
    // Act: Call the function being tested
    const result = getUsername();

    // Assert: Check if the result matches the expected output
    expect(result).toBeNull();
  });
});
