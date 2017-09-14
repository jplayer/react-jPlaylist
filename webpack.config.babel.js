import ExtractTextPlugin from 'extract-text-webpack-plugin';
import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import BabiliPlugin from 'babili-webpack-plugin';
import autoprefixer from 'autoprefixer';
import path from 'path';

export default {
  context: __dirname,
  target: 'node',
  externals: {
    classnames: 'classNames',
    'lodash.maxby': '_.maxBy',
    'lodash.merge': '_.merge',
    react: 'React',
    'react-redux': 'ReactRedux',
    recompose: 'Recompose',
    'prop-types': 'PropTypes',
    'react-jplayer': 'ReactJPlayer',
  },
  entry: {
    'js/react-jPlaylist.js': './src/index.js',
    'js/react-jPlaylist.min.js': './src/index.js',
    'css/controls/iconControls.css': './src/less/controls/iconControls.less',
    'css/controls/iconControls.min.css': './src/less/controls/iconControls.less',
    'css/skins/sleek.css': './src/less/skins/sleek.less',
    'css/skins/sleek.min.css': './src/less/skins/sleek.less',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]',
    libraryTarget: 'var',
    library: 'ReactJPlaylist',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: /src/,
        loader: 'babel-loader',
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            options: { importLoaders: 1 },
          }, {
            loader: 'postcss-loader',
            options: {
              plugins: () => [autoprefixer],
            },
          }, {
            loader: 'less-loader',
          }],
        }),
      },
      {
        test: /\.jpg$/,
        loader: 'file-loader',
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('[name]'),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.min\.css$/,
    }),
    new BabiliPlugin({}, {
      test: /\.min\.js$/,
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
