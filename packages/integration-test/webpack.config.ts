import HtmlWebpackPlugin from 'html-webpack-plugin'
import { resolve } from 'path'
import { Configuration } from 'webpack'
import { Configuration as DevConfiguration } from 'webpack-dev-server'
import { Config as SwcConfig } from '@swc/core'

const swcConfig: SwcConfig = {
  jsc: {
    parser: {
      syntax: 'typescript',
    },
    transform: {
      react: {
        runtime: 'automatic',
      },
    },
  },
}

const config: Configuration & DevConfiguration = {
  name: 'development',
  mode: 'development',
  entry: resolve(__dirname, 'src', 'index.tsx'),
  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
  },
  module: {
    rules: [
      {
        test: /.[jt]sx?$/,
        exclude: /(node_modules)/,
        use: { loader: 'swc-loader', options: swcConfig },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '...'],
  },
  devServer: {
    historyApiFallback: true,
  },
  devtool: 'source-map',
  plugins: [new HtmlWebpackPlugin()],
}

export default config
