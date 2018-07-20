import { terser } from 'rollup-plugin-terser'
import babel from 'rollup-plugin-babel'
import filesize from 'rollup-plugin-filesize'

import { name as libraryName } from './package.json'

const babelConf = {
  babelrc: false,
  presets: [['@babel/preset-env', { modules: false }]],
  exclude: 'node_modules/**'
}

const outputs = [
  {
    fileExt: '.js'
  },
  {
    fileExt: '.min.js',
    plugins: [terser()]
  }
]

export default outputs.map(({ fileExt, plugins = [] }) => ({
  input: 'src/validate.js',
  output: {
    file: 'lib/' + libraryName + fileExt,
    format: 'cjs',
    sourcemap: true
  },
  plugins: [babel(babelConf), ...plugins, filesize()]
}))
