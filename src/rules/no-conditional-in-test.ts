import { Rule } from 'eslint'
import { findParent } from '../utils/ast.js'
import { createRule } from '../utils/createRule.js'
import { isTypeOfFnCall } from '../utils/parseFnCall.js'

export default createRule({
  create(context) {
    function checkConditional(node: Rule.Node & Rule.NodeParentExtension) {
      const call = findParent(node, 'CallExpression')
      if (!call) return

      if (isTypeOfFnCall(context, call, ['test', 'step'])) {
        context.report({ messageId: 'conditionalInTest', node })
      }
    }

    return {
      ConditionalExpression: checkConditional,
      IfStatement: checkConditional,
      LogicalExpression: checkConditional,
      SwitchStatement: checkConditional,
    }
  },
  meta: {
    docs: {
      category: 'Best Practices',
      description: 'Disallow conditional logic in tests',
      recommended: true,
      url: 'https://github.com/gustavo-meilus/eslint-plugin-playwright/tree/main/docs/rules/no-conditional-in-test.md',
    },
    messages: {
      conditionalInTest: 'Avoid having conditionals in tests',
    },
    schema: [],
    type: 'problem',
  },
})
