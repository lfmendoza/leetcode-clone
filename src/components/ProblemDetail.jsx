import React, { useState, useEffect } from "react";
import {
  ArrowLeft,
  Heart,
  ThumbsUp,
  ThumbsDown,
  Play,
  RotateCcw,
  CheckCircle,
  XCircle,
} from "lucide-react";
import Editor from "@monaco-editor/react";
import Badge from "./ui/Badge";
import Button from "./ui/Button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/Tabs";
import { CodeRunner } from "../utils/codeRunner";

const ProblemDetail = ({ problem, onBack, darkMode }) => {
  const [selectedLanguage, setSelectedLanguage] = useState("javascript");
  const [code, setCode] = useState("");
  const [testResults, setTestResults] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const [activeTab, setActiveTab] = useState("description");

  useEffect(() => {
    if (problem) {
      setCode(problem.starterCode[selectedLanguage] || "");
    }
  }, [problem, selectedLanguage]);

  const handleRunCode = async () => {
    setIsRunning(true);
    try {
      const results = await CodeRunner.runCode(
        code,
        selectedLanguage,
        problem.testCases,
        problem.id
      );
      setTestResults(results);
    } catch (error) {
      console.error("Error running code:", error);
      setTestResults({
        results: [
          {
            input: {},
            expected: null,
            output: null,
            passed: false,
            executionTime: 0,
            memoryUsed: 0,
            error: "Error ejecutando el código: " + error.message,
          },
        ],
        allPassed: false,
        totalTests: 1,
        passedTests: 0,
      });
    } finally {
      setIsRunning(false);
    }
  };

  const handleResetCode = () => {
    setCode(problem.starterCode[selectedLanguage] || "");
    setTestResults(null);
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Easy":
        return "easy";
      case "Medium":
        return "medium";
      case "Hard":
        return "hard";
      default:
        return "default";
    }
  };

  if (!problem) return null;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button onClick={onBack} variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4" />
              Volver
            </Button>
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                #{problem.id}
              </span>
              <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
                {problem.title}
              </h1>
              <Badge variant={getDifficultyColor(problem.difficulty)}>
                {problem.difficulty}
              </Badge>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <ThumbsUp className="w-4 h-4" />
              <span>{problem.likes.toLocaleString()}</span>
              <ThumbsDown className="w-4 h-4 ml-2" />
              <span>{problem.dislikes.toLocaleString()}</span>
            </div>
            <Button variant="outline" size="sm">
              <Heart className="w-4 h-4" />
              Favorito
            </Button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex h-[calc(100vh-80px)]">
        {/* Left Panel - Problem Description */}
        <div className="w-1/2 border-r border-gray-200 dark:border-gray-700 overflow-y-auto custom-scrollbar">
          <div className="p-6">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="mb-6">
                <TabsTrigger tabValue="description">Descripción</TabsTrigger>
                <TabsTrigger tabValue="solution">Solución</TabsTrigger>
                <TabsTrigger tabValue="discuss">Discusión</TabsTrigger>
              </TabsList>

              <TabsContent tabValue="description">
                <div className="space-y-6">
                  {/* Problem Description */}
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Descripción
                    </h2>
                    <div className="prose dark:prose-invert max-w-none">
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {problem.description}
                      </p>
                    </div>
                  </div>

                  {/* Examples */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Ejemplos
                    </h3>
                    <div className="space-y-4">
                      {problem.examples.map((example, index) => (
                        <div
                          key={index}
                          className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4"
                        >
                          <div className="mb-2">
                            <span className="font-medium text-gray-900 dark:text-white">
                              Ejemplo {index + 1}:
                            </span>
                          </div>
                          <div className="space-y-2 text-sm">
                            <div>
                              <span className="font-medium text-gray-700 dark:text-gray-300">
                                Input:
                              </span>
                              <code className="ml-2 bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-gray-800 dark:text-gray-200">
                                {example.input}
                              </code>
                            </div>
                            <div>
                              <span className="font-medium text-gray-700 dark:text-gray-300">
                                Output:
                              </span>
                              <code className="ml-2 bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-gray-800 dark:text-gray-200">
                                {example.output}
                              </code>
                            </div>
                            {example.explanation && (
                              <div>
                                <span className="font-medium text-gray-700 dark:text-gray-300">
                                  Explicación:
                                </span>
                                <span className="ml-2 text-gray-600 dark:text-gray-400">
                                  {example.explanation}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Constraints */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Restricciones
                    </h3>
                    <ul className="space-y-1">
                      {problem.constraints.map((constraint, index) => (
                        <li
                          key={index}
                          className="text-gray-700 dark:text-gray-300 text-sm"
                        >
                          • {constraint}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tags */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Etiquetas
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {problem.tags.map((tag) => (
                        <Badge key={tag} variant="default">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent tabValue="solution">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Solución
                    </h2>
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                      <div className="mb-4">
                        <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                          Complejidad:
                        </h4>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          <div>Tiempo: {problem.solution.timeComplexity}</div>
                          <div>Espacio: {problem.solution.spaceComplexity}</div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                          Código:
                        </h4>
                        <pre className="bg-gray-200 dark:bg-gray-700 p-3 rounded text-sm overflow-x-auto">
                          <code className="text-gray-800 dark:text-gray-200">
                            {problem.solution.javascript}
                          </code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent tabValue="discuss">
                <div className="space-y-4">
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Discusión
                  </h2>
                  <div className="text-gray-600 dark:text-gray-400">
                    Las discusiones estarán disponibles próximamente...
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Right Panel - Code Editor */}
        <div className="w-1/2 flex flex-col">
          {/* Editor Header */}
          <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <select
                  value={selectedLanguage}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                  className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                >
                  <option value="javascript">JavaScript</option>
                  <option value="python">Python</option>
                  <option value="java">Java</option>
                  <option value="cpp">C++</option>
                </select>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  onClick={handleResetCode}
                  variant="outline"
                  size="sm"
                  disabled={isRunning}
                >
                  <RotateCcw className="w-4 h-4" />
                  Reset
                </Button>
                <Button
                  onClick={handleRunCode}
                  variant="primary"
                  size="sm"
                  loading={isRunning}
                  disabled={isRunning}
                >
                  <Play className="w-4 h-4" />
                  Ejecutar
                </Button>
              </div>
            </div>
          </div>

          {/* Monaco Editor */}
          <div className="flex-1 bg-gray-100 dark:bg-gray-900 max-h-[600px]">
            <Editor
              height="100%"
              language={selectedLanguage === "cpp" ? "cpp" : selectedLanguage}
              value={code}
              onChange={setCode}
              theme={darkMode ? "vs-dark" : "light"}
              options={{
                fontSize: 14,
                fontFamily:
                  "JetBrains Mono, Monaco, Cascadia Code, Roboto Mono, monospace",
                minimap: { enabled: false },
                scrollBeyondLastLine: false,
                automaticLayout: true,
                tabSize: 4,
                insertSpaces: true,
                wordWrap: "on",
                lineNumbers: "on",
                renderLineHighlight: "line",
                selectOnLineNumbers: true,
                matchBrackets: "always",
                autoIndent: "full",
                formatOnPaste: true,
                formatOnType: true,
              }}
            />
          </div>

          {/* Test Results */}
          {testResults && (
            <div className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 p-4 max-h-64 overflow-y-auto custom-scrollbar">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Resultados de las pruebas
                </h3>
                <div className="flex items-center gap-2">
                  {testResults.allPassed ? (
                    <Badge
                      variant="success"
                      className="flex items-center gap-1"
                    >
                      <CheckCircle className="w-3 h-3" />
                      Aceptado
                    </Badge>
                  ) : (
                    <Badge variant="error" className="flex items-center gap-1">
                      <XCircle className="w-3 h-3" />
                      Incorrecto
                    </Badge>
                  )}
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {testResults.passedTests}/{testResults.totalTests} pasaron
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                {testResults.results.map((result, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-lg border ${
                      result.passed ? "test-case-passed" : "test-case-failed"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-sm">
                        Test Case {index + 1}
                      </span>
                      <div className="flex items-center gap-2 text-xs">
                        {result.passed ? (
                          <CheckCircle className="w-4 h-4 text-green-600" />
                        ) : (
                          <XCircle className="w-4 h-4 text-red-600" />
                        )}
                        <span>{result.executionTime}ms</span>
                        <span>{result.memoryUsed}MB</span>
                      </div>
                    </div>

                    {!result.passed && (
                      <div className="space-y-2 text-sm">
                        <div>
                          <span className="font-medium">Input:</span>
                          <code className="ml-2 bg-white/50 dark:bg-gray-700/50 px-2 py-1 rounded">
                            {JSON.stringify(result.input)}
                          </code>
                        </div>
                        <div>
                          <span className="font-medium">Expected:</span>
                          <code className="ml-2 bg-white/50 dark:bg-gray-700/50 px-2 py-1 rounded">
                            {JSON.stringify(result.expected)}
                          </code>
                        </div>
                        <div>
                          <span className="font-medium">Output:</span>
                          <code className="ml-2 bg-white/50 dark:bg-gray-700/50 px-2 py-1 rounded">
                            {result.output
                              ? JSON.stringify(result.output)
                              : "null"}
                          </code>
                        </div>
                        {result.error && (
                          <div>
                            <span className="font-medium">Error:</span>
                            <code className="ml-2 bg-white/50 dark:bg-gray-700/50 px-2 py-1 rounded text-red-600">
                              {result.error}
                            </code>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProblemDetail;
