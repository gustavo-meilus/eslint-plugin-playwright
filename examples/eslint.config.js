import playwright from 'eslint-plugin-playwrightx'

export default {
  ...playwright.configs['flat/recommended'],
  rules: {
    ...playwright.configs['flat/recommended'].rules,
    'playwright/no-commented-out-tests': 'error',
    'playwright/no-duplicate-hooks': 'error',
    'playwright/no-get-by-title': 'error',
    'playwright/no-nth-methods': 'error',
    'playwright/no-raw-locators': 'error',
    'playwright/no-restricted-matchers': 'error',
    'playwright/prefer-comparison-matcher': 'error',
    'playwright/prefer-equality-matcher': 'error',
    'playwright/prefer-hooks-in-order': 'error',
    'playwright/prefer-hooks-on-top': 'error',
    'playwright/prefer-lowercase-title': 'error',
    'playwright/prefer-strict-equal': 'error',
    'playwright/prefer-to-be': 'error',
    'playwright/prefer-to-contain': 'error',
    'playwright/prefer-to-have-count': 'error',
    'playwright/prefer-to-have-length': 'error',
    'playwright/require-to-throw-message': 'error',
    'playwright/require-top-level-describe': 'error',
  },
}
