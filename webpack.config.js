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
  },
  performance: {
    hints: 'warning', // 枚举 false关闭
    maxEntrypointSize: 100000000, // 最大入口文件大小
    maxAssetSize: 100000000, // 最大资源文件大小
    assetFilter: function (assetFilename) {
      //只给出js文件的性能提示
      return assetFilename.endsWith('.js')
    }
  }
}
