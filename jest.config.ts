export default {
    preset: 'ts-jest/presets/js-with-ts',
    testEnvironment: 'jsdom',
    clearMocks: true,
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coverageProvider: 'v8',
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/$1',
        '^@components/(.*)$': '<rootDir>/src/components/$1',
        '^@api/(.*)$': '<rootDir>/src/api/$1',
        '^@pages/(.*)$': '<rootDir>/src/pages/$1',
        '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
            'jest-transform-stub',
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};
