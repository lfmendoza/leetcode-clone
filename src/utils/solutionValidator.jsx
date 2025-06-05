// Validador de soluciones para testing
import { problems } from "../data/problems.js";
import { CodeRunner } from "./codeRunner.js";

export class SolutionValidator {
  static async validateAllSolutions() {
    console.log("🧪 Validando todas las soluciones...\n");

    for (const problem of problems) {
      console.log(`\n📝 Validando problema ${problem.id}: ${problem.title}`);

      try {
        const results = await CodeRunner.runCode(
          problem.solution.javascript,
          "javascript",
          problem.testCases,
          problem.id
        );

        if (results.allPassed) {
          console.log(
            `✅ ${problem.title} - Todos los test cases pasaron (${results.passedTests}/${results.totalTests})`
          );
        } else {
          console.log(
            `❌ ${problem.title} - Falló ${
              results.totalTests - results.passedTests
            } test cases`
          );
          results.results.forEach((result, index) => {
            if (!result.passed) {
              console.log(
                `   Test ${index + 1}: Expected ${JSON.stringify(
                  result.expected
                )}, got ${JSON.stringify(result.output)}`
              );
            }
          });
        }
      } catch (error) {
        console.log(`💥 ${problem.title} - Error: ${error.message}`);
      }
    }
  }

  static async validateSingleProblem(problemId) {
    const problem = problems.find((p) => p.id === problemId);
    if (!problem) {
      console.log(`❌ Problema ${problemId} no encontrado`);
      return;
    }

    console.log(`\n📝 Validando problema ${problem.id}: ${problem.title}`);

    try {
      const results = await CodeRunner.runCode(
        problem.solution.javascript,
        "javascript",
        problem.testCases,
        problem.id
      );

      console.log(`\n📊 Resultados para ${problem.title}:`);
      console.log(`   Total tests: ${results.totalTests}`);
      console.log(`   Pasaron: ${results.passedTests}`);
      console.log(`   Fallaron: ${results.totalTests - results.passedTests}`);
      console.log(`   Estado: ${results.allPassed ? "✅ PASÓ" : "❌ FALLÓ"}`);

      if (!results.allPassed) {
        console.log("\n🔍 Detalles de tests fallidos:");
        results.results.forEach((result, index) => {
          if (!result.passed) {
            console.log(`\n   Test Case ${index + 1}:`);
            console.log(`     Input: ${JSON.stringify(result.input)}`);
            console.log(`     Expected: ${JSON.stringify(result.expected)}`);
            console.log(`     Got: ${JSON.stringify(result.output)}`);
            if (result.error) {
              console.log(`     Error: ${result.error}`);
            }
          }
        });
      }

      return results;
    } catch (error) {
      console.log(`💥 Error validando ${problem.title}: ${error.message}`);
      return null;
    }
  }

  // Test específico para Two Sum
  static testTwoSum() {
    console.log("\n🎯 Testing Two Sum específicamente...");

    const testCases = [
      { input: { nums: [2, 7, 11, 15], target: 9 }, expected: [0, 1] },
      { input: { nums: [3, 2, 4], target: 6 }, expected: [1, 2] },
      { input: { nums: [3, 3], target: 6 }, expected: [0, 1] },
    ];

    const solution = `function twoSum(nums, target) {
      const map = new Map();
      for (let i = 0; i < nums.length; i++) {
          const complement = target - nums[i];
          if (map.has(complement)) {
              return [map.get(complement), i];
          }
          map.set(nums[i], i);
      }
      return [];
    }`;

    testCases.forEach((testCase, index) => {
      try {
        const functionCall = `twoSum([${testCase.input.nums.join(",")}], ${
          testCase.input.target
        })`;
        const code = `${solution}\n${functionCall}`;
        const result = eval(code);

        const passed =
          (result[0] === testCase.expected[0] &&
            result[1] === testCase.expected[1]) ||
          (result[0] === testCase.expected[1] &&
            result[1] === testCase.expected[0]);

        console.log(
          `   Test ${index + 1}: ${passed ? "✅" : "❌"} - Input: [${
            testCase.input.nums
          }], target: ${testCase.input.target}`
        );
        console.log(`     Expected: [${testCase.expected}], Got: [${result}]`);
      } catch (error) {
        console.log(`   Test ${index + 1}: ❌ - Error: ${error.message}`);
      }
    });
  }
}

// Ejecutar validación automática si se ejecuta directamente
if (
  typeof window !== "undefined" &&
  window.location.search.includes("validate=true")
) {
  SolutionValidator.validateAllSolutions();
}
