import React, {useEffect} from 'react'
import Head from 'next/head'
import {Affix, Breadcrumb, Col, Row} from 'antd'
import {CalendarOutlined, FireOutlined, FolderOutlined,} from '@ant-design/icons'
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'
/* 引入组件 */
import Header from "../components/Header";
import detailedStyle from '../styles/pages/detailed.module.css'
import Author from "../components/Author";
import Advert from "../components/Advert";
import Footer from "../components/Footer";
import axios from 'axios';
import {withRouter} from "next/router";
import Tocify from "../components/tocify.tsx";
import servicePath from "../config/apiUrl";

/*loading*/

function Detailed({result}) {

    const tocify = new Tocify()

    const renderer = new marked.Renderer()

    //   添加锚点
    renderer.heading = function (text, level, raw) {
        const anchor = tocify.add(text, level) // 传值给Tocify
        return `<a id=${anchor} href=#${anchor} class="anchor-fix"><h${level}>${text}</h${level}></a>`
    }

    marked.setOptions({
        renderer: renderer,
        gfm: true, // 开启跟GitHub同等样式
        pedantic: false, // 容错 不开启会自动纠正
        sanitize: false, // 允许html输出
        tables: true, // 跟GitHub同等表格样式，需要gfm开启
        breaks: false, // github 换行符
        smartLists: true, // 自动渲染列表样式
        highlight: function (code) { // 高亮部分
            return hljs.highlightAuto(code).value // 使用高亮插件
        }
    })

    let markdown = marked(result[0].article_content)

    useEffect(() => {
        // console.log(md)
        console.log(result)
    })

    return (
        <div>
            <Head>
                <title>个人博客</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Header/>

            <Row type="flex" justify="center" className="comm-main">
                <Col className="comm-left" xs={24} sm={24} md={10} lg={10} xl={10}>
                    <div className='breadDiv'>
                        <Breadcrumb>
                            <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
                            <Breadcrumb.Item><a href="/list">{result[0].typeName}</a></Breadcrumb.Item>
                            <Breadcrumb.Item><a href="/detailed">{result[0].title}</a></Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <div className={detailedStyle.detailTitle}>
                        {result[0].title}
                    </div>
                    <div className={detailedStyle.listIcon + ' ' + detailedStyle.center}>
                        <span><CalendarOutlined/>{result[0].addTime}</span>
                        <span><FolderOutlined/>{result[0].typeName}</span>
                        <span><FireOutlined/>{result[0].view_count}</span>
                    </div>
                    <div className={detailedStyle.detailedContent}
                         dangerouslySetInnerHTML={{__html: markdown}}>

                    </div>
                </Col>
                <Col className="comm-right" xs={0} sm={0} md={7} lg={4} xl={3}>
                    <Author/>
                    <Advert/>
                    <Affix offsetTop={5}>
                        <div className={detailedStyle.detailedNav + " " + "comm-box"}>
                            <div className={detailedStyle.navTitle + ' center'}>文章目录</div>
                            {tocify && tocify.render()}
                        </div>
                    </Affix>
                </Col>
            </Row>

            <Footer/>


        </div>
    )
}

/*请求必须放在这里*/
/*context是前台传过来的*/
Detailed.getInitialProps = async (context) => {
    console.log(context.query.id)
    let id = context.query.id
    const test = new Promise((resolve, reject) => {
        axios.get(servicePath.getArticleById + '/' + id).then(
            (res) => {
                // console.log(res.data.data)
                resolve(res.data)
            }
        )
    })
    return await test
}

export default withRouter(Detailed)
