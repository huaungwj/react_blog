/**
 * 这里放一些全局的文件
 *   - 可以放全局的css样式文件
 */

import '../styles/globals.css'
import 'antd/dist/antd.css'
import '../styles/comm.css'
import 'markdown-navbar/dist/navbar.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
