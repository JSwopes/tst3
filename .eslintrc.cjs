// The .eslintrc.cjs file is used to configure ESLint, a tool for identifying and enforcing coding style and quality standards in JavaScript code. It serves the following purposes:

//     Coding Standards: It defines a set of rules and guidelines for coding style, formatting, and best practices to ensure consistent and maintainable code.

//     Code Quality: It helps maintain code quality by catching potential issues, bugs, and common programming mistakes early in the development process.

//     Customization: It allows developers to customize ESLint's behavior by specifying rules, environments, and parser options tailored to their project's specific needs.

//     Integration: It integrates seamlessly with code editors and build tools, providing real-time feedback and automated code analysis as developers write code.

//     Consistency: It promotes code consistency across a team or project by enforcing a shared set of coding standards.

// Adding an .eslintrc.cjs file at the top of a JavaScript project is important because it serves as a project-specific configuration guide for ESLint. It ensures that every developer working on the project follows the same coding standards and adheres to quality checks, leading to more readable, maintainable, and error-free code.

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
