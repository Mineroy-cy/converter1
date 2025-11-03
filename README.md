# Number System Toolkit

A modern React-based Progressive Web Application (PWA) for number system conversions and binary arithmetic operations. This application provides an intuitive interface for converting between different number systems (binary, decimal, octal, hexadecimal, and BCD) and performing binary arithmetic calculations.

## 🌟 Features

- **Number System Conversions**: Convert between decimal, binary, octal, hexadecimal, and BCD formats
- **Binary Arithmetic**: Perform addition, subtraction, multiplication, division, and complement operations
- **Progressive Web App**: Installable on mobile and desktop devices
- **Responsive Design**: Optimized for all screen sizes
- **Input Validation**: Real-time validation for different number formats
- **Modern UI**: Dark theme with green gradient accents

## 🏗️ Project Structure

```
@latest/
├── public/                     # Static assets and PWA resources
│   ├── manifest.json          # PWA manifest file
│   ├── vite.svg              # Vite logo
│   └── [icon-files]          # App icons in various sizes (16px to 1024px)
├── src/                       # Source code directory
│   ├── assets/               # Static assets
│   │   └── react.svg        # React logo
│   ├── components/           # React components
│   │   ├── ArithmeticTool.jsx    # Binary arithmetic calculator
│   │   ├── ConversionTool.jsx    # Number system converter
│   │   └── InstallBanner.jsx     # PWA install prompt
│   ├── models/               # Data model classes
│   │   ├── Converter.js         # Base converter class
│   │   ├── BinaryConverter.js   # Binary number converter
│   │   ├── DecimalConverter.js  # Decimal number converter
│   │   ├── OctalConverter.js    # Octal number converter
│   │   ├── HexConverter.js      # Hexadecimal converter
│   │   └── BCDConverter.js      # Binary Coded Decimal converter
│   ├── pages/                # Page components
│   │   ├── Home.jsx            # Landing page with navigation
│   │   ├── ConversionPage.jsx  # Conversion tool page
│   │   └── ArithmeticPage.jsx  # Arithmetic tool page
│   ├── services/             # Business logic services
│   │   ├── ConversionService.js  # Number conversion orchestration
│   │   └── ArithmeticService.js  # Binary arithmetic operations
│   ├── utils/                # Utility functions
│   │   └── validators.js      # Input validation functions
│   ├── App.jsx               # Main application component
│   ├── main.jsx              # Application entry point
│   ├── index.css             # Global styles
│   └── App.css               # Component-specific styles (currently empty)
├── dist/                     # Build output directory
├── node_modules/             # Dependencies
├── .gitignore               # Git ignore rules
├── eslint.config.js         # ESLint configuration
├── index.html               # HTML template
├── package.json             # Project dependencies and scripts
├── vite.config.js           # Vite configuration
└── README.md                # This file
```

## 📁 File Descriptions

### Configuration Files

- **`package.json`**: Defines project metadata, dependencies, and npm scripts. Includes React 19, Vite build tools, and PWA plugin
- **`vite.config.js`**: Vite bundler configuration with React plugin and PWA support for GitHub Pages deployment
- **`eslint.config.js`**: ESLint configuration for code quality with React-specific rules
- **`index.html`**: Main HTML template with PWA meta tags and app manifest linking

### Core Application Files

- **`src/main.jsx`**: Application entry point that renders the App component with React 18's createRoot
- **`src/App.jsx`**: Main application component with React Router configuration for SPA navigation
- **`src/index.css`**: Comprehensive global styles with dark theme, green gradients, and responsive design

### Page Components

- **`src/pages/Home.jsx`**: Landing page featuring the app title and navigation buttons to conversion and arithmetic tools
- **`src/pages/ConversionPage.jsx`**: Simple wrapper component that renders the ConversionTool
- **`src/pages/ArithmeticPage.jsx`**: Simple wrapper component that renders the ArithmeticTool

### Feature Components

- **`src/components/ConversionTool.jsx`**: 
  - Interactive number system converter
  - Supports 5 number systems: decimal, binary, octal, hexadecimal, BCD
  - Real-time input validation based on selected base
  - Dropdown selectors for source and target number systems
  - Error handling and result display

- **`src/components/ArithmeticTool.jsx`**: 
  - Binary arithmetic calculator
  - Supports 6 operations: add, subtract, multiply, divide, 1's complement, 2's complement
  - Two input fields for binary operands
  - Operation selector dropdown
  - Result display with error handling

- **`src/components/InstallBanner.jsx`**: 
  - PWA installation prompt component
  - Detects browser capabilities and platform (iOS Safari vs others)
  - Shows install button for supported browsers
  - Special iOS Safari instructions banner
  - Auto-hides after successful installation

### Model Classes (Object-Oriented Design)

- **`src/models/Converter.js`**: Abstract base class defining the converter interface with `toDecimal()` and `fromDecimal()` methods
- **`src/models/BinaryConverter.js`**: Handles binary to decimal conversion using `parseInt(value, 2)`
- **`src/models/DecimalConverter.js`**: Handles decimal number processing and conversion to other bases
- **`src/models/OctalConverter.js`**: Handles octal to decimal conversion using `parseInt(value, 8)`
- **`src/models/HexConverter.js`**: Handles hexadecimal conversion with uppercase output formatting
- **`src/models/BCDConverter.js`**: Handles Binary Coded Decimal with space-separated 4-bit groups

### Service Classes (Business Logic)

- **`src/services/ConversionService.js`**: 
  - Central conversion orchestrator
  - Implements two-step conversion: source → decimal → target
  - Factory pattern for creating appropriate converter instances
  - Handles all supported number base combinations

- **`src/services/ArithmeticService.js`**: 
  - Binary arithmetic operations handler
  - Implements basic operations using JavaScript's parseInt/toString
  - Bit manipulation for complement operations
  - Error handling for division by zero and invalid inputs

### Utility Functions

- **`src/utils/validators.js`**: 
  - Input validation using regular expressions
  - Base-specific validation rules:
    - Binary: only 0s and 1s
    - Octal: digits 0-7
    - Decimal: digits 0-9
    - Hexadecimal: digits 0-9 and A-F
    - BCD: binary digits with spaces

### PWA Assets

- **`public/manifest.json`**: PWA manifest with app metadata, icons, and display settings
- **`public/[icon-files]`**: Complete icon set from 16x16 to 1024x1024 pixels for various platforms
- **Service Worker**: Generated by Vite PWA plugin for offline functionality

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd "converter app - Copy (2)/@latest"
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to the displayed local URL (typically `http://localhost:5173`)

### Available Scripts

- **`npm run dev`**: Start development server with hot module replacement
- **`npm run build`**: Build the application for production
- **`npm run preview`**: Preview the production build locally
- **`npm run lint`**: Run ESLint for code quality checks
- **`npm run deploy`**: Deploy to GitHub Pages (runs build first)

## 🔧 Usage

### Number System Conversion

1. Navigate to the "Conversions" section
2. Enter a number in the input field
3. Select the source number system from the first dropdown
4. Select the target number system from the second dropdown
5. Click "Convert" to see the result
6. The app validates input in real-time based on the selected base

### Binary Arithmetic

1. Navigate to the "Arithmetic" section
2. Enter two binary numbers in the input fields
3. Select the desired operation from the dropdown
4. Click "Compute" to see the result
5. For complement operations, only the first input field is used

## 🎨 Architecture & Design Patterns

### Component Architecture
- **Functional Components**: All components use React hooks for state management
- **Props-based Communication**: Clean data flow between parent and child components
- **Single Responsibility**: Each component has a focused purpose

### Object-Oriented Models
- **Inheritance**: All converter classes extend the base `Converter` class
- **Polymorphism**: Uniform interface for different number system converters
- **Encapsulation**: Business logic separated from UI components

### Service Layer Pattern
- **Separation of Concerns**: Business logic isolated in service classes
- **Reusability**: Services can be used across multiple components
- **Testability**: Pure functions make unit testing straightforward

### Progressive Web App Features
- **Offline Capability**: Service worker provides offline functionality
- **Installation**: Can be installed as a native app on supported devices
- **Responsive**: Adapts to different screen sizes and orientations

## 🌐 Deployment

The application is configured for deployment to GitHub Pages:

1. **Automatic Deployment**: 
   ```bash
   npm run deploy
   ```

2. **Manual Build**:
   ```bash
   npm run build
   ```

3. **Configuration**: 
   - Base URL set to `/converter1/` in `vite.config.js`
   - Homepage configured in `package.json`

## 🔒 Browser Compatibility

- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **PWA Support**: Chrome/Edge (full), Safari (limited), Firefox (partial)
- **Mobile**: iOS Safari, Chrome Mobile, Samsung Internet

## 📱 PWA Features

- **Installable**: Add to home screen on mobile devices
- **Offline Ready**: Works without internet connection after first load
- **App-like Experience**: Full-screen mode, splash screen, app icons
- **Fast Loading**: Cached resources for instant startup

## 🛠️ Development Notes

### Code Style
- ES6+ JavaScript with modern React patterns
- Consistent naming conventions (camelCase for variables, PascalCase for components)
- Functional programming approach where applicable

### Performance Optimizations
- Vite build tool for fast development and optimized production builds
- Tree shaking for minimal bundle size
- Lazy loading and code splitting ready

### Error Handling
- Try-catch blocks in arithmetic and conversion operations
- User-friendly error messages
- Input validation prevents invalid operations### modules (explain)


### Summary of the Binary converter.js module
js
import Converter from "./Converter";

export default class BinaryConverter extends Converter {
  toDecimal() {
    return parseInt(this.value, 2);
  }

  static fromDecimal(decimal) {
    return decimal.toString(2);
  }
}
What it does at a glance
-BinaryConverter extends a base class Converter, gaining its properties (notably this.value).
-toDecimal(): Treats this.value as a binary string and converts it to a decimal number.
-fromDecimal(decimal): Converts a decimal number to its binary string representation.
Key details and behavior
- toDecimal()
- Uses parseInt(this.value, 2) to interpret the value as base-2 (binary) and return a decimal number.
- Important considerations:
- Leading/trailing whitespace is ignored by parseInt.
- Non-binary characters cause parsing to stop early, potentially returning a partial value or NaN.
- Returns a JavaScript Number (not BigInt).
- fromDecimal(decimal)
- Uses decimal.toString(2) to convert a decimal number to a binary string.
- Important considerations:
- decimal is expected to be a number (an integer). If not, behavior may be inconsistent.
- For very large values, Number precision limits may apply; BigInt can be used for large integers if needed.
- Common enhancements (quick notes)
-
- Validation:
- toDecimal: validate that the input is a valid binary string (e.g., /^[01]+$/) before parsing.
- fromDecimal: ensure decimal is a finite number (or BigInt if handling large integers).
- Edge cases
- Handle empty strings or invalid inputs gracefully (throw errors or return a sentinel value).
- Decide on negative numbers representation (this code doesn’t clearly define handling for negatives).
- BigInt support (optional):
If you expect very large numbers, consider using BigInt:
	toDecimal: return BigInt(this.value, 2) or BigInt(this.value) after normalization.
	fromDecimal: return BigInt(decimal).toString(2).
Minimal example of behavior
- Given c.value = "1011":
- c.toDecimal() returns 11.
- BinaryConverter.fromDecimal(11) returns "1011".


## 🤝 Contributing

There are 5 active contributers to the project .
