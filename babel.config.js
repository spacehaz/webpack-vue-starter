module.exports = ({
  presets: ['@babel/preset-env', 'vue'],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    '@babel/plugin-transform-runtime',
    '@babel/plugin-syntax-function-bind'
  ]
})
