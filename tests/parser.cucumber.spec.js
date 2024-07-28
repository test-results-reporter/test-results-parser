const { parse } = require('../src');
const assert = require('assert');
const path = require('path');

describe('Parser - Cucumber Json', () => {

  const testDataPath = "tests/data/cucumber"

  it('single suite with single test', () => {
    const result = parse({ type: 'cucumber', files: [`${testDataPath}/single-suite-single-test.json`] });
    assert.deepEqual(result, {
      id: '',
      name: '',
      total: 1,
      passed: 1,
      failed: 0,
      errors: 0,
      skipped: 0,
      retried: 0,
      duration: 1.59,
      status: 'PASS',
      tags: [],
      metadata: {},
      suites: [
        {
          id: '',
          name: 'Addition',
          total: 1,
          passed: 1,
          failed: 0,
          errors: 0,
          skipped: 0,
          duration: 1.59,
          status: 'PASS',
          tags: ["@blue", "@slow"],
          metadata: { suite: "1234" },
          cases: [
            {
              attachments: [],
              duration: 1.59,
              errors: 0,
              failed: 0,
              failure: "",
              id: "",
              name: "Addition of two numbers",
              passed: 3,
              skipped: 0,
              stack_trace: "",
              status: "PASS",
              tags: ["@green", "@fast", "@blue", "@slow"],
              metadata: { "suite": "1234", testCase: "1234" },
              steps: [
                {
                  "id": "",
                  "name": "I have number 6 in calculator",
                  "duration": 1.21,
                  "status": "PASS",
                  "failure": "",
                  "stack_trace": ""
                },
                {
                  "id": "",
                  "name": "I entered number 7",
                  "duration": 0.14,
                  "status": "PASS",
                  "failure": "",
                  "stack_trace": ""
                },
                {
                  "id": "",
                  "name": "I should see result 13",
                  "duration": 0.24,
                  "status": "PASS",
                  "failure": "",
                  "stack_trace": ""
                }
              ],
              total: 3
            }
          ]
        }
      ]
    });
  });

  it('empty suite report', () => {
    const result = parse({ type: 'cucumber', files: [`${testDataPath}/empty-suite.json`] });
    assert.deepEqual(result, {
      id: '',
      name: '',
      total: 0,
      passed: 0,
      failed: 0,
      errors: 0,
      skipped: 0,
      retried: 0,
      duration: 0,
      status: 'PASS',
      tags: [],
      metadata: {},
      suites: []
    });
  });

  it('multiple suites', () => {
    const result = parse({ type: 'cucumber', files: [`${testDataPath}/multiple-suites-multiple-tests.json`] });
    assert.deepEqual(result, {
      id: "",
      name: "",
      total: 3,
      passed: 2,
      failed: 1,
      errors: 0,
      skipped: 0,
      retried: 0,
      duration: 3.37,
      status: "FAIL",
      tags: [],
      metadata: {},
      suites: [
        {
          id: "",
          name: "Addition",
          total: 2,
          passed: 1,
          failed: 1,
          errors: 0,
          skipped: 0,
          duration: 2.85,
          status: "FAIL",
          tags: [],
          metadata: {},
          cases: [
            {
              id: "",
              name: "Addition of two numbers",
              total: 3,
              passed: 2,
              failed: 1,
              errors: 0,
              skipped: 0,
              duration: 2.56,
              status: "FAIL",
              failure: "AssertionError [ERR_ASSERTION]: 13 == 14\n    + expected - actual\n\n    -13\n    +14\n\n",
              stack_trace: "    at CustomWorld.<anonymous> (D:\\workspace\\nodejs\\cc-tests\\features\\support\\steps.js:18:12)",
              tags: [],
              metadata: {},
              steps: [
                {
                  id: "",
                  name: "I have number 6 in calculator",
                  duration: 1.1,
                  status: "PASS",
                  failure: "",
                  stack_trace: ""
                },
                {
                  id: "",
                  name: "I add number 7",
                  duration: 0.13,
                  status: "PASS",
                  failure: "",
                  stack_trace: ""
                },
                {
                  id: "",
                  name: "I should see result 14",
                  duration: 1.33,
                  status: "FAIL",
                  failure: "AssertionError [ERR_ASSERTION]: 13 == 14\n    + expected - actual\n\n    -13\n    +14\n\n",
                  stack_trace: "    at CustomWorld.<anonymous> (D:\\workspace\\nodejs\\cc-tests\\features\\support\\steps.js:18:12)"
                }
              ],
              attachments: []
            },
            {
              id: "",
              name: "Addition of two numbers v2",
              total: 3,
              passed: 3,
              failed: 0,
              errors: 0,
              skipped: 0,
              duration: 0.29,
              status: "PASS",
              failure: "",
              stack_trace: "",
              tags: [],
              metadata: {},
              steps: [
                {
                  id: "",
                  name: "I have number 6 in calculator",
                  duration: 0.11,
                  status: "PASS",
                  failure: "",
                  stack_trace: ""
                },
                {
                  id: "",
                  name: "I add number 7",
                  duration: 0.1,
                  status: "PASS",
                  failure: "",
                  stack_trace: ""
                },
                {
                  id: "",
                  name: "I should see result 13",
                  duration: 0.08,
                  status: "PASS",
                  failure: "",
                  stack_trace: ""
                }
              ],
              attachments: []
            }
          ]
        },
        {
          id: "",
          name: "Subtraction",
          total: 1,
          passed: 1,
          failed: 0,
          errors: 0,
          skipped: 0,
          duration: 0.52,
          status: "PASS",
          tags: [],
          metadata: {},
          cases: [
            {
              id: "",
              name: "Subtraction of two numbers",
              total: 3,
              passed: 3,
              failed: 0,
              errors: 0,
              skipped: 0,
              duration: 0.52,
              status: "PASS",
              failure: "",
              stack_trace: "",
              tags: [],
              metadata: {},
              steps: [
                {
                  id: "",
                  name: "I have number 10 in calculator",
                  duration: 0.08,
                  status: "PASS",
                  failure: "",
                  stack_trace: ""
                },
                {
                  id: "",
                  name: "I subtract number 7",
                  duration: 0.13,
                  status: "PASS",
                  failure: "",
                  stack_trace: ""
                },
                {
                  id: "",
                  name: "I should see result 3",
                  duration: 0.31,
                  status: "PASS",
                  failure: "",
                  stack_trace: ""
                }
              ],
              attachments: []
            }
          ]
        }
      ]
    });
  });

  it('can support absolute and relative file paths', () => {
    let relativePath = `${testDataPath}/multiple-suites-multiple-tests.json`;
    let absolutePath = path.resolve(relativePath);
    const result1 = parse({ type: 'cucumber', files: [absolutePath] });
    assert.notEqual(null, result1);
    const result2 = parse({ type: 'cucumber', files: [relativePath] });
    assert.notEqual(null, result2);
  });

});
