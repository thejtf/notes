import React, { useState, useEffect } from 'react';

import '../index.css'

import { Skeleton } from 'antd';
import 'antd/dist/reset.css';




function Loading(props) {
    let [rows, setRows] = useState(3)

    useEffect(() => {

        // 设置动态加载样式
        let timer
        timer = setInterval(() => {
            setRows(prevRows => {
                const newRows = prevRows + 2;
                if (newRows > 10) {
                    clearInterval(timer);
                }
                return newRows;
            });

        }, 1400);
        
        return () => {
            if (timer) {
                clearInterval(timer);
            }
        };
    }, [])



    // return <div className='loading'><div>🚀 Loading...</div></div>
    return <div className='loading'><Skeleton active paragraph={{ rows: rows }} /></div>


}

export default Loading;