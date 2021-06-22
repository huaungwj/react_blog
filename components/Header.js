import React, {useEffect, useState} from 'react'
import headerStyle from '../styles/components/header.module.css'
/* 组件 */
import {Col, Menu, Row} from 'antd'
/*图标*/
import {CameraOutlined, HomeOutlined, SmileOutlined, YoutubeOutlined,} from '@ant-design/icons'
import axios from 'axios'
import servicePath from "../config/apiUrl";
import Router from "next/router";

const Header = (props) => {

    const [navArray, setNavArray] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const result = await axios(servicePath.getTypeInfo).then(
            (res) => {
                return res.data.data
            }
        )
        setNavArray(result)
    }

    const handleClick = (e) => {
        if (e.key == 0) {
            Router.push('/')
        } else {
            Router.push('/list?id=' + e.key)
        }
    }

    /*跳转路由*/
    const toLink = (pathname) => {
        if (Router.router.pathname === '/') {
            return false
        }
        Router.push({
            pathname,
        })
    }


    return (
        <div className={headerStyle.header}>
            {/*
                flex布局
                如果有剩余的两个盒子往中间靠拢
                xs: 屏幕 < 576px 响应式栅格，可以栅格数或一个包含其他属性的对象
                sm: 屏幕 >= 576px 响应式栅格，可为栅格数或一个包含其他属性的对象
                md：屏幕 ≥ 768px 响应式栅格，可为栅格数或一个包含其他属性的对象
                lg： 屏幕 ≥ 992px 响应式栅格，可为栅格数或一个包含其他属性的对象
                xl： 屏幕 ≥ 1200px 响应式栅格，可为栅格数或一个包含其他属性的对象
                xxl： 屏幕 ≥ 1600px 响应式栅格，可为栅格数或一个包含其他属性的对象
            */}
            <Row type="flex" justify="center">
                <Col xs={24} sm={24} md={10} lg={9} xl={10} style={{'display': 'flex', 'justifyContent': 'center'}}>
                    <a onClick={() => {
                        toLink('/')
                    }}>
                        <span className={headerStyle.headerLogo}>Huangweiji</span>
                    </a>
                    <span style={{'display': 'flex', 'alignItems': 'center'}}
                          className={headerStyle.headerTxt}>用心学习前端</span>
                </Col>
                <Col xs={0} sm={0} md={10} lg={10} xl={10}>
                    <Menu mode='horizontal' className={headerStyle.itemColor}
                          style={{"lineHeight": '2.2rem', 'display': 'flex', 'justifyContent': 'center'}}>
                        <Menu.Item
                            key='0'
                            onClick={(e) => {
                                handleClick(e)
                            }}
                            icon={<HomeOutlined/>}>
                            博客首页
                        </Menu.Item>


                        <Menu.Item
                            key='1'
                            onClick={(e) => {
                                handleClick(e)
                            }}
                            icon={<YoutubeOutlined/>}>
                            视频推荐
                        </Menu.Item>

                        <Menu.Item key='2' onClick={(e) => {
                            handleClick(e)
                        }} icon={<SmileOutlined/>}>
                            聊聊生活
                        </Menu.Item>

                        <Menu.Item key='3' onClick={(e) => {
                            handleClick(e)
                        }} icon={<CameraOutlined/>}>
                            分享好图
                        </Menu.Item>

                    </Menu>
                </Col>
            </Row>
        </div>
    )
}

export default Header
