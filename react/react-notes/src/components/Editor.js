import React,{Component} from 'react'

class Editor extends Component{
    //数据来源到底是state还是props？？？   当使用的是内部自身状态时用state  
    state = {
        entity:this.props.entity , //修改
        body:this.props.entity.body ,//内容
        updateEntity:this.props.updateEntity //
    }
    render(){
        return(
            <div className="ui form">
                <div className="field">
                    <textarea rows="5" placeholder="写点什么..." defaultValue={this.state.entity.body} onInput={(event)=>{
                        this.state.updateEntity(event)
                    }}>
                    </textarea>
                </div>
            </div>
        )
    }
}

export default Editor