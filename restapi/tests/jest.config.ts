export default {
    rootDir: './../',
    transform: {
        "^.+\\.tsx?$": "help.ts-jest"
    },
    collectCoverage: true,
    collectCoverageFrom:["api.help.ts"]
}