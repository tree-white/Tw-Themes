import Path from 'path'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'

const __dirname = Path.resolve()
export default {
  mode: 'production',
  entry: './main.js',
  output: {
    path: Path.resolve(__dirname, 'dist')
  },
  plugins: [
    // 打包时清理输出文件夹
    new CleanWebpackPlugin(),
    // 样式提取到css文件夹
    new MiniCssExtractPlugin({
      filename: 'trwite.css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.(woff2|jpg)$/,
        loader: 'url-loader',
        options: {
          limit: 12 * 1024,
          esModule: false,
          name: '[hash:8].[ext]',
          outputPath: 'trwite'
        },
        type: 'javascript/auto'
      }
    ]
  }
}
