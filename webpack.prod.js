const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

const { AngularCompilerPlugin } = require('@ngtools/webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const BrotliPlugin = require('brotli-webpack-plugin');

module.exports = webpackMerge(commonConfig, {
    entry: {
        main: ['./src/main.aot.ts'],
        polyfills: ['./src/polyfills.ts']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: '@ngtools/webpack'
            }
        ]
    },
    plugins: [
        new AngularCompilerPlugin({
            mainPath: 'main.ts',
            platform: 0,
            hostReplacementPaths: {
                'environments/environment.ts': 'environments/environment.prod.ts'
            },
            sourceMap: false,
            tsConfigPath: 'src/tsconfig.app.json',
            skipCodeGeneration: true,
            compilerOptions: {}
        }),
        new UglifyJsPlugin({
            exclude: /\sw.js$/,
            parallel: true,
            mangle: {
                keep_fnames: true
            }
        }),
        new CompressionPlugin({
            asset: '[path].gz[query]',
            algorithm: 'gzip',
            test: /\.(js|css|html|svg|ttf|eot|woff|woff2)$/,
            threshold: 10240,
            minRatio: 0.8
        }),
        new BrotliPlugin({
            asset: '[path].br[query]',
            test: /\.(js|css|html|svg|ttf|eot|woff|woff2)$/,
            threshold: 10240,
            minRatio: 0.8
        })
    ]
});
