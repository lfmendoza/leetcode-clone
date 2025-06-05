import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Code,
  Sun,
  Moon,
  User,
  Trophy,
  TrendingUp,
  BookOpen,
} from "lucide-react";
import ProblemList from "./components/ProblemList";
import ProblemDetail from "./components/ProblemDetail";
import Button from "./components/ui/Button";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedProblem, setSelectedProblem] = useState(null);
  const [currentView, setCurrentView] = useState("home");

  const handleSelectProblem = (problem) => {
    setSelectedProblem(problem);
    setCurrentView("problem");
  };

  const handleBackToList = () => {
    setSelectedProblem(null);
    setCurrentView("problems");
  };

  const handleBackToHome = () => {
    setSelectedProblem(null);
    setCurrentView("home");
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "dark bg-gray-900" : "bg-gray-50"
      }`}
    >
      {/* Navigation */}
      <nav className="bg-white dark:bg-gray-800 shadow-lg border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center space-x-8">
              <button
                onClick={handleBackToHome}
                className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
              >
                <Code className="w-8 h-8 text-blue-600" />
                <span className="text-xl font-bold text-gray-900 dark:text-white">
                  CodeMaster
                </span>
              </button>

              <div className="hidden md:flex space-x-6">
                <button
                  onClick={() => setCurrentView("problems")}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
                    currentView === "problems"
                      ? "text-blue-600 bg-blue-50 dark:bg-blue-900/20"
                      : "text-gray-700 dark:text-gray-300 hover:text-blue-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Problemas</span>
                </button>

                <button className="flex items-center space-x-2 px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-blue-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  <Trophy className="w-4 h-4" />
                  <span>Competencias</span>
                </button>

                <button className="flex items-center space-x-2 px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-blue-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  <TrendingUp className="w-4 h-4" />
                  <span>Ranking</span>
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-md text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                {darkMode ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>

              <Button variant="outline" className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Iniciar Sesión
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {currentView === "home" && (
          <HomePage onNavigateToProblems={() => setCurrentView("problems")} />
        )}
        {currentView === "problems" && (
          <ProblemList onSelectProblem={handleSelectProblem} />
        )}
        {currentView === "problem" && selectedProblem && (
          <ProblemDetail
            problem={selectedProblem}
            onBack={handleBackToList}
            darkMode={darkMode}
          />
        )}
      </main>
    </div>
  );
};

// Componente HomePage
const HomePage = ({ onNavigateToProblems }) => {
  const Div = motion.div;
  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center px-6">
        <Div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Mejora tus habilidades de
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {" "}
                programación
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Resuelve problemas de algoritmos, practica para entrevistas
              técnicas y compite con desarrolladores de todo el mundo.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              onClick={onNavigateToProblems}
              variant="primary"
              size="lg"
              className="text-lg px-8 py-4"
            >
              Empezar a practicar
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              Ver problemas populares
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <Div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <Code className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Múltiples Lenguajes
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Resuelve problemas en JavaScript, Python, Java, C++ y más.
              </p>
            </Div>

            <Div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <Trophy className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Competencias
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Participa en competencias semanales y mejora tu ranking.
              </p>
            </Div>

            <Div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <TrendingUp className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Progreso
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Rastrea tu progreso y ve tu mejora a lo largo del tiempo.
              </p>
            </Div>
          </div>

          <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">
              ¿Listo para el siguiente desafío?
            </h2>
            <p className="text-blue-100 mb-6">
              Únete a miles de desarrolladores que ya están mejorando sus
              habilidades
            </p>
            <Button
              onClick={onNavigateToProblems}
              variant="secondary"
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              Explorar Problemas
            </Button>
          </div>
        </Div>
      </div>
    </div>
  );
};

export default App;
