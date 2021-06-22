import React from 'react'
import Main from "./Main";
import {Loading} from "../components/isLoading";
import axios from "axios";
import servicePath from "../config/apiUrl";

export default function isLoadingMain (props) {
    const [list , setList] = (props.data)

    return (
        <div>
            <Loading>
                <Main list={props.data}/>
                {props.children}
            </Loading>
        </div>
    )
}

isLoadingMain.getInitialProps = async () => {
    const promise = new Promise((resolve, reject) => {
        axios.get(servicePath.getArticleList).then(
            (res) => {
                console.log(res.data.data)
                resolve(res.data)
            }
        )
    })
    return await promise
}
