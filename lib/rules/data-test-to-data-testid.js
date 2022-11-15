/**
 * @fileoverview move
 * @author robertz
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: "problem",
    hasSuggestions: false,
    fixable: null,
    messages: { 1: "Do not use data-test" },
    schema: [],
  },

  create(context) {
    // variables should be defined here

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------

    // any helper functions should go here or else delete this section

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {
      JSXOpeningElement(node) {
        if (node.attributes.find((attr) => attr.name.name === "data-test")) {
          context.report({
            node,
            messageId: "1",
          });
        }
      },
      Literal(node) {
        if (
          node.value.includes("data-test") &&
          !node.value.includes("data-testid")
        ) {
          context.report({
            node,
            messageId: "1",
          });
        }
      },
    };
  },
};

/*
export const meta = {
  type: 'problem',
  hasSuggestions: true,
  fixable: false,
};

export function create(context) {
  return {
    JSXOpeningElement(node) {
      if(node.attributes.find(attr => attr.name.name==='data-test')) {
        
      context.report({
        node,
        message: 'Do not use data-test',
      });
      }
  },
   Literal(node) {
     if(node.value.includes('data-test') && !node.value.includes('data-testid')) {
       context.report({
        node,
        message: 'Do not use data-test'
     });               
   }
  }
}};
*/
