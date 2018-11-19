module.exports = {
	"extends": "eslint:recommended",
	"env": {
		"es6": true,
		"node": true,
		"mocha": true,
		"browser": true,
	},
	"parser": "babel-eslint",
	"rules": {
		"indent": ["error", 2],
		"comma-dangle": 2,
		"quotes": [1, "single"],
		"no-undef": 1,
		"global-strict": 0,
		"semi": [1, "always"],
		"no-extra-semi": 1,
		"no-unused-vars": 0,
		"no-mixed-spaces-and-tabs": 2,
		"curly": [1],
		"no-underscore-dangle": 0,
		"no-console": 0,
		"no-trailing-spaces": [1, {
			"skipBlankLines": true
		}],
		"no-unreachable": 1,
		"no-alert": 0,
		"linebreak-style": [2, "unix"],
		"no-multiple-empty-lines": [1, {"max": 2}],
		"no-var": 0,
		"comma-spacing": 2,
		"key-spacing": [2, { "beforeColon": false, "afterColon": true }],
	}
};
