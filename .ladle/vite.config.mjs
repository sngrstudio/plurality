// @ts-check
import icons from 'unplugin-icons/vite'

/** @type {import('vite').UserConfig} */
export default {
  plugins: [icons({ compiler: 'jsx', jsx: 'react' })]
}
