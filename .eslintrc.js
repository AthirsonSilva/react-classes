module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: ['plugin:react/recommended', 'standard'],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	plugins: ['react'],
	rules: {
		'no-tabs': 'off',
		indent: ['warn', 'tab'],
		'space-before-function-paren': 'off',
		'react/prop-types': 'off'
	}
}
