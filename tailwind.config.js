// tailwind.config.js
export default {
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Pretendard Variable","ui-sans-serif","system-ui","-apple-system"],
        serif: ["Noto Serif KR","Georgia","serif"],
      },
      colors: {
        ink: "#111111",
        soft: "#6b7280",   // gray-500 느낌
        line: "#e5e7eb",   // gray-200
        accent: "#6d28d9", // purple-700
      },
    },
  },
  plugins: [],
}
