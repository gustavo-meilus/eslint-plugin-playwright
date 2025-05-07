import { runRuleTester } from '../utils/rule-tester.js'
import rule from './no-all-method.js'

runRuleTester('no-all-method', rule, {
  invalid: [
    {
      code: "await page.getByText('foo').all()",
      errors: [
        {
          messageId: 'noAllMethod',
        },
      ],
    },
    {
      code: "obj['all']()",
      errors: [
        {
          messageId: 'noAllMethod',
        },
      ],
    },
    {
      code: "foo.bar.all()",
      errors: [
        {
          messageId: 'noAllMethod',
        },
      ],
    },
  ],
  valid: [
    { code: "const all = 1;" },
    { code: "obj.all;" },
    { code: "obj['all'];" },
    { code: "const str = 'all';" },
    { code: "function all() {}" },
    { code: "let all = () => {};" },
  ],
}) 