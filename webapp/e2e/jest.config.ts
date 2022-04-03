export default {
    transform: {
        "^.+\\.tsx?$": "help.ts-jest"
    },
    testMatch: ["**/steps/*.help.ts"],
    moduleFileExtensions: ["help.ts", "tsx", "js", "jsx", "json", "node"],
    preset: "jest-puppeteer",
}