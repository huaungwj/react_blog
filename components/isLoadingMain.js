import React from 'react'
import Home from "../pages";
import {Loading} from "./isLoading";

export default function isLoadingMain () {
    return (
        <div>
            <Loading>
                <Home/>
            </Loading>
        </div>
    )
}