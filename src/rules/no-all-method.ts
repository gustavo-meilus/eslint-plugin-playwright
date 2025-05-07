import { createRule } from '../utils/createRule.js'

export default createRule({
  create(context) {
    return {
      CallExpression(node) {
        if (
          node.callee &&
          node.callee.type === 'MemberExpression' &&
          node.callee.property &&
          ((node.callee.property.type === 'Identifier' && node.callee.property.name === 'all') ||
            (node.callee.property.type === 'Literal' && node.callee.property.value === 'all'))
        ) {
          context.report({
            messageId: 'noAllMethod',
            node: node.callee.property,
          })
        }
      },
    }
  },
  meta: {
    docs: {
      category: 'Best Practices',
      description: 'Disallow any use of .all() as a method call',
      recommended: false,
      url: 'https://github.com/playwright-community/eslint-plugin-playwright',
    },
    messages: {
      noAllMethod: 'Do not use .all() method.',
    },
    schema: [],
    type: 'problem',
  },
}) 