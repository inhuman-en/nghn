const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { SourceMapDevToolPlugin } = require('webpack');

module.exports = webpackMerge(commonConfig, {
    entry: {
        main: ['./src/main.ts'],
        polyfills: ['./src/polyfills.ts'],
        exclude: ['./src/main.aot.ts']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loaders: [
                    {
                        loader: 'awesome-typescript-loader',
                        options: {configFileName: 'src/tsconfig.app.json'}
                    },
                    'angular2-template-loader'
                ]
            }
        ]
    },
    plugins: [
        new SourceMapDevToolPlugin({
            filename: '[file].map[query]',
            moduleFilenameTemplate: '[resource-path]',
            fallbackModuleFilenameTemplate: '[resource-path]?[hash]',
            sourceRoot: 'webpack:///'
        }),
        new BundleAnalyzerPlugin()
    ],
    devServer: {
        historyApiFallback: true,
        stats: 'minimal'
    }
});
