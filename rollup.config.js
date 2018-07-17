// import { rollup } from 'rollup'
import { terser } from 'rollup-plugin-terser'
import babel from 'rollup-plugin-babel'
import filesize from 'rollup-plugin-filesize'

const pkg = require('./package.json')

let libraryName = pkg.name

const babelConf = {
  babelrc: false,
  presets: [['@babel/preset-env', { modules: false }]],
  exclude: 'node_modules/**'
}

export default [
  {
    input: 'src/validate.js',
    output: {
      file: 'lib/' + libraryName + '.js',
      format: 'cjs'
    },
    plugins: [babel(babelConf), filesize()]
  },
  {
    input: 'src/validate.js',
    output: {
      file: 'lib/' + libraryName + '.min.js',
      format: 'cjs'
    },
    plugins: [babel(babelConf), terser(), filesize()]
  }
]
