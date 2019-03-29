const {
	override,
	fixBabelImports,
	addDecoratorsLegacy,
	addBabelPlugins
} = require('customize-cra');

module.exports = override(
	addDecoratorsLegacy(),
	fixBabelImports('import', {
		libraryName: 'antd',
		libraryDirectory: 'es',
		style: 'css'
	}),
	addBabelPlugins(
		["@babel/plugin-proposal-class-properties", { "loose" : true }],
	)
);