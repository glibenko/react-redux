module.exports = {
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  },
  moduleDirectories: [
  "node_modules"
  ],
  "modulePaths": [
  "./src"
  ],
  "moduleNameMapper": {
  "\\.(css|less|scss|sass)$": "identity-obj-proxy"
  },
// 	testURL: "https://localhost:3000",
// 	"globals": {
// 		"__DEV__": false,
// 		"__CLIENT__": true,
// 		"__SERVER__": false,
// 		"__TEST__": true,
// 		"__IMAGES_URL__": "https://localhost:3000/img",
// 		"__SITE_URL__": "https://localhost:3000"
// 	},
// 	"moduleFileExtensions": [
// 		"",
// 		"js",
// 		"json"
// 	],
// 	"modulePaths": [
// 		"./src"
// 	],
// 	"moduleDirectories": [
// 		"node_modules"
// 	],
// 	"moduleNameMapper": {
// 		"\\.(css|less|scss|sass)$": "identity-obj-proxy"
// 	},
// 	"transform": {
//   "^.+\\.jsx?$": "<rootDir>/node_modules/babel-jest"
// },
// "transformIgnorePatterns": [
//   "<rootDir>/node_modules/"
// ],
};