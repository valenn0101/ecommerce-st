   import { fetchBrandInfo } from "../fetchOneBrand";

   it("Test successful api call with valid brand id", async () => {
    const brandId = 123456;
    const data = await fetchBrandInfo(brandId);
    expect(data).toBeDefined();
});

   it("Test api call with undefined brand id", async () => {
        const brandId = undefined;
        const data = await fetchBrandInfo(brandId);
        expect(data).toEqual({ error: "Brand ID cannot be undefined" });
    });