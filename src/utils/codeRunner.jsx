import { referenceSolutions, testHelpers } from "./testHelper";

export class CodeRunner {
  static async runCode(code, language, testCases, problemId) {
    // Simulación de ejecución de código
    await new Promise((resolve) =>
      setTimeout(resolve, 1000 + Math.random() * 1500)
    );

    const results = [];

    for (let i = 0; i < testCases.length; i++) {
      const testCase = testCases[i];

      try {
        let result;

        if (language === "javascript") {
          result = this.executeJavaScript(code, testCase, problemId);
        } else {
          // Para otros lenguajes, usar soluciones de referencia con algo de aleatoriedad
          result = this.simulateExecution(testCase, problemId);
        }

        const passed = this.compareResults(
          result.output,
          testCase.expected,
          problemId
        );

        results.push({
          input: testCase.input,
          expected: testCase.expected,
          output: result.output,
          passed: passed,
          executionTime: result.executionTime,
          memoryUsed: result.memoryUsed,
          error: result.error,
        });
      } catch (error) {
        results.push({
          input: testCase.input,
          expected: testCase.expected,
          output: null,
          passed: false,
          executionTime: 0,
          memoryUsed: 0,
          error: error.message,
        });
      }
    }

    return {
      results,
      allPassed: results.every((r) => r.passed),
      totalTests: results.length,
      passedTests: results.filter((r) => r.passed).length,
    };
  }

  static executeJavaScript(code, testCase, problemId) {
    const startTime = performance.now();
    let output, error;

    try {
      // Validar que el código contenga una función
      if (!code.trim() || !code.includes("function")) {
        throw new Error("Código incompleto: Debes definir una función");
      }

      const functionCall = this.generateFunctionCall(testCase, problemId);

      // Crear contexto de ejecución más seguro
      const contextCode = `
        ${code}
        
        // Helper functions para problemas específicos
        const createLinkedList = ${testHelpers.createLinkedList.toString()};
        const linkedListToArray = ${testHelpers.linkedListToArray.toString()};
        const createBinaryTree = ${testHelpers.createBinaryTree.toString()};
        
        // Ejecutar la función
        (() => {
          try {
            return ${functionCall};
          } catch (e) {
            throw new Error('Error en la ejecución: ' + e.message);
          }
        })();
      `;

      // Ejecutar el código
      output = eval(contextCode);
    } catch (e) {
      error = e.message;
      output = null;
    }

    const endTime = performance.now();

    return {
      output,
      error,
      executionTime: Math.round(endTime - startTime),
      memoryUsed: Math.floor(Math.random() * 20) + 8, // MB simulados
    };
  }

  static generateFunctionCall(testCase, problemId) {
    const input = testCase.input;

    switch (problemId) {
      case 1: // Two Sum
        return `twoSum([${input.nums.join(",")}], ${input.target})`;

      case 2: // Add Two Numbers
        return `(() => {
          const l1 = createLinkedList([${input.l1.join(",")}]);
          const l2 = createLinkedList([${input.l2.join(",")}]);
          const result = addTwoNumbers(l1, l2);
          return linkedListToArray(result);
        })()`;

      case 3: // Longest Substring
        return `lengthOfLongestSubstring("${input.s}")`;

      case 4: // Valid Parentheses
        return `isValid("${input.s}")`;

      case 5: // Binary Tree Inorder
        if (input.root.length === 0) {
          return `inorderTraversal(null)`;
        }
        return `(() => {
          const root = createBinaryTree([${input.root
            .map((val) => (val === null ? "null" : val))
            .join(",")}]);
          return inorderTraversal(root);
        })()`;

      default:
        return "null";
    }
  }

  static simulateExecution(testCase, problemId) {
    const executionTime = Math.floor(Math.random() * 150) + 50;
    const memoryUsed = Math.floor(Math.random() * 25) + 12;

    // Para otros lenguajes, usar soluciones de referencia con 90% de precisión
    const success = Math.random() > 0.1;
    let output;

    if (success) {
      // Usar solución de referencia
      try {
        switch (problemId) {
          case 1:
            output = referenceSolutions.twoSum(
              testCase.input.nums,
              testCase.input.target
            );
            break;
          case 3:
            output = referenceSolutions.lengthOfLongestSubstring(
              testCase.input.s
            );
            break;
          case 4:
            output = referenceSolutions.isValid(testCase.input.s);
            break;
          default:
            output = testCase.expected;
        }
      } catch {
        output = testCase.expected;
      }
    } else {
      // Generar salida incorrecta
      output = this.generateWrongOutput(testCase.expected, problemId);
    }

    return {
      output,
      error: success ? null : "Runtime Error: Simulated execution error",
      executionTime,
      memoryUsed,
    };
  }

  static generateWrongOutput(expected, problemId) {
    switch (problemId) {
      case 1: // Two Sum - devolver índices incorrectos
        return Array.isArray(expected) ? [expected[1], expected[0]] : [0, 1];
      case 2: // Add Two Numbers - alterar un dígito
        if (Array.isArray(expected) && expected.length > 0) {
          const wrong = [...expected];
          wrong[0] = (wrong[0] + 1) % 10;
          return wrong;
        }
        return [1];
      case 3: // Longest Substring - devolver longitud incorrecta
        return typeof expected === "number" ? Math.max(0, expected - 1) : 0;
      case 4: // Valid Parentheses - devolver booleano opuesto
        return !expected;
      case 5: // Tree Traversal - alterar el orden
        return Array.isArray(expected) ? expected.slice().reverse() : [];
      default:
        return null;
    }
  }

  static compareResults(output, expected, problemId) {
    if (output === null || output === undefined) return false;

    switch (problemId) {
      case 1: // Two Sum - los índices pueden estar en cualquier orden
        if (!Array.isArray(output) || !Array.isArray(expected)) return false;
        if (output.length !== 2 || expected.length !== 2) return false;
        return (
          (output[0] === expected[0] && output[1] === expected[1]) ||
          (output[0] === expected[1] && output[1] === expected[0])
        );

      case 2: // Add Two Numbers - comparación exacta de arrays
      case 5: // Binary Tree Inorder - comparación exacta de arrays
        return testHelpers.arraysEqual(output, expected);

      case 3: // Longest Substring - comparación de números
      case 4: // Valid Parentheses - comparación de booleanos
        return output === expected;

      default:
        // Comparación genérica
        if (Array.isArray(expected)) {
          return testHelpers.arraysEqual(output, expected);
        }
        return output === expected;
    }
  }
}
