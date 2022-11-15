/**
 * @fileoverview move
 * @author robertz
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/data-test-to-data-testid"),
  RuleTester = require("eslint").RuleTester;

RuleTester.setDefaultConfig({
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
    },
  },
});

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("data-test-to-data-testid", rule, {
  valid: [
    // give me some code that won't trigger a warning
    {
      code: `
      <div 
        data-testid="ref-value"
      />`,
    },
    {
      code: '<div data-testid="ref-value" />',
    },
    {
      code: `cy.get('[data-testid=ref-value]')`,
    },
  ],

  invalid: [
    {
      code: `
      <div 
        data-test="ref-value" 
      />`,
      errors: [{ messageId: "1" }],
    },
    {
      code: '<div data-test="ref-value" />',
      errors: [{ messageId: "1" }],
    },
    {
      code: `cy.get('[data-test=ref-value]')`,
      errors: [{ messageId: "1" }],
    },
  ],
});
