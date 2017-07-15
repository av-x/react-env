module.exports = {
  plugins: {
    'postcss-import': { path: ['src'] },
    'postcss-cssnext': {
      browsers: ['last 2 versions', '> 1%', 'opera 12.1', 'bb 10', 'android 4']
    }
  }
}
