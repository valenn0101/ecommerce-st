// jest.config.mjs
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({

  dir: './',
})

/** @type {import('jest').Config} */
const config = {

  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect']
}

export default createJestConfig(config)