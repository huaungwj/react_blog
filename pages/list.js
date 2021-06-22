import React , {useState ,useEffect} from 'react'
import Head  from 'next/head'
import {withRouter} from "next/router";
import { Row ,Col , List , Breadcrumb } from 'antd'
import {
    CalendarOutlined, // 日期
    FolderOutlined, // 文件
    FireOutlined , // 热度
    FileOutlined,
} from '@ant-design/icons'
/* 引入组件 */
import Header from "../components/Header"; // 头部组件
import Author from "../components/Author"; // 作者信息
import Advert from '../components/Advert' // 广告
import Footer from "../components/Footer";
import Link from "next/link";
import axios from 'axios';
import servicePath from "../config/apiUrl";
import marked from 'marked'
import hljs from "highlight.js";
import 'highlight.js/styles/monokai-sublime.css'

function MyList(list) {
    const [mylist, setMylist] = useState(list.data)


    const renderer = new marked.Renderer()

    marked.setOptions({
        renderer: renderer,
        gfm: true,
        pedantic: false,
        sanitize: false,
        tables: true,
        breaks: false,
        smartLists: true,
        highlight: function (code){
            return hljs.highlightAuto(code)
        }
    })


    useEffect(() => {
        console.log(list)
        setMylist(list.data)
    })

    return (
        <div>
            <Head>
                <title>个 人 博 客</title>
                <link rel="icon" href="/fav=icon.ico" />
            </Head>
            <Header />

            <Row type="flex" justify="center" className="comm-main">
                <Col className="comm-left"  xs={24} sm={24} md={10} lg={10} xl={10}>

                    <div className="breadDiv">
                        <Breadcrumb>
                            <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
                            <Breadcrumb.Item><a href="/list">视频教程</a></Breadcrumb.Item>
                        </Breadcrumb>
                    </div>

                    <List
                        itemLayout="vertical"
                        dataSource={mylist}
                        renderItem={(item,index)=> {
                            return (
                                <List.Item>
                                    <div className='listTitle'>
                                        <Link href={{
                                            pathname: '/detailed',
                                            query: {
                                                id: item.id
                                            }
                                        }}>
                                            <a>{item.title}</a>
                                        </Link>
                                    </div>
                                    <div className='listIcon'>
                                <span>
                                    <CalendarOutlined />
                                    &nbsp;{item.addTime} &nbsp;
                                </span>
                                        <span>
                                    <FolderOutlined />
                                            &nbsp;{item.typeName}&nbsp;
                                </span>
                                        <span>
                                    <FireOutlined />
                                            {item.view_count}人&nbsp;
                                </span>
                                    </div>
                                    <div className='listContext'
                                    dangerouslySetInnerHTML={{__html: item.introduce}}
                                    >
                                    </div>
                                </List.Item>
                            )
                        }}
                    />
                </Col>
                <Col className="comm-right" xs={0} sm={0} md={7} lg={4} xl={3}>
                    <Author/>
                    <Advert/>
                </Col>
            </Row>

            <Footer/>

        </div>
    )
}

MyList.getInitialProps = async (context) => {
    // console.log(context.query.id)
    const id = context.query.id
    const promise = new Promise((resolve, reject) => {
        axios(servicePath.getListById + '/' + id).then(
            (res) => {
                // console.log(res)
                resolve(res.data)
            }
        )
    })

    return promise

}

export default withRouter(MyList)
