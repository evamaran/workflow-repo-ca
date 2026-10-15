import { test, expect } from "@playwright/test";

test.describe("navigation", () => {
  test("user can open a venue from the home page", async ({ page }) => {
    await page.goto("/");
    const firstVenue = page.locator("#venue-container a").first();
    await expect(firstVenue).toBeVisible();
    await firstVenue.click();

    const heading = page.getByRole("heading", { level: 1 });
    await expect(heading).toContainText("Venue details");
  });
});
