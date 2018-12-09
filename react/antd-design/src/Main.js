import React,{Component} from 'react'
// import {Button} from 'antd';
import SideBar from './SideBar'


class Main extends Component{
    render(){
        return(
            <div>
                <SideBar></SideBar>
                {/* <Button type='primary'>按钮</Button> */}
            </div>
        )
    }
}

export default Main;