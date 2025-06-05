import React from "react";
import { motion } from "framer-motion";

export const Tabs = ({ value, onValueChange, children, className = "" }) => {
  return (
    <div className={`w-full ${className}`}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { value, onValueChange })
      )}
    </div>
  );
};

export const TabsList = ({
  children,
  value,
  onValueChange,
  className = "",
}) => {
  return (
    <div
      className={`flex space-x-1 bg-gray-100 dark:bg-gray-800 p-1 rounded-lg ${className}`}
    >
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { value, onValueChange })
      )}
    </div>
  );
};

export const TabsTrigger = ({
  children,
  tabValue,
  value,
  onValueChange,
  className = "",
}) => {
  const isActive = value === tabValue;
  const Div = motion.div;

  return (
    <button
      onClick={() => onValueChange(tabValue)}
      className={`
        relative px-3 py-1.5 text-sm font-medium rounded-md transition-colors
        ${
          isActive
            ? "text-gray-900 dark:text-gray-100"
            : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
        }
        ${className}
      `}
    >
      {isActive && (
        <Div
          className="absolute inset-0 bg-white dark:bg-gray-700 rounded-md shadow-sm"
          layoutId="activeTab"
          transition={{ duration: 0.2 }}
        />
      )}
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export const TabsContent = ({ children, tabValue, value, className = "" }) => {
  if (value !== tabValue) return null;

  const Div = motion.div;

  return (
    <Div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className={className}
    >
      {children}
    </Div>
  );
};
