import React,{Component} from 'react'
import {Tag,Tooltip,Input,Icon,message} from 'antd'

class DocumentType extends Component{
    constructor(props){
        super(props)
        this.state={
            tags:'',
            inputValue:'',
            inputVisible:false
        }
    }
    componentWillMount(){
        this.setState({
            tags:this.props.tags
        })
    }
    input = React.createRef()
    render(){
        const {tags,selectedTags,plusBtnText,activeColor} = this.props;
        const {inputValue,inputVisible} = this.state;
        return(
            <div>{tags.map((tag,index)=>{
                const isLongTag = tag.length >10;
                const isSelected = selectedTags.indexOf(tag) !== -1;
                //当需要循环列表时，提供有个key，实现性能优化，只更新改动项
                const tagElem = (
                    <Tag key={index}   color={isSelected?(activeColor?activeColor:'40a9ff'):''}
                    closable={index !== 0} onClick={()=>this.highLightTag(index)}> 
                        {isLongTag?`${tag.slice(0,10)}...`:tag}
                    </Tag>   
                );
                return isLongTag?(
                    <Tooltip title={tag} key={tag}>{tagElem}</Tooltip>                        //Tooltip 移上去看全称
                ):(tagElem)
            })}
            {
                inputVisible && (
                    <Input ref={this.input} type="text" size="small" style={{width:78}} value={inputValue} onChange={this.handleInputChange}
                    onPressEnter={this.handleInputConfirm} onBlur={this.handleInputConfirm}></Input>
                )
            }
            {
                !inputVisible && (
                    <Tag onClick={this.showInput} style={{background:'#fff',borderStyle:'dashed'}}>
                        <Icon type="plus"/>
                        {plusBtnText?plusBtnText:'New Tag'}
                    </Tag>
                )
            }</div>
        )
    }
    showInput = () => {
        this.setState({
            inputVisible:true
        },()=>{
            this.input.current.focus()
        })
    }
    handleInputChange = (e) => {
        this.setState({
            inputValue:e.target.value
        })
    }
    handleInputConfirm = (e) => {
        const {inputValue} = this.state;
        const prevTags = this.state.tags;
        if(!inputValue){
            message.error('不能为空');
            this.setState({
                inputVisible:false,
                inputValue:''
            })
            return false
        }
        if(inputValue && prevTags.indexOf(inputValue) !== -1){
            message.error('已存在同样的tag');
            this.setState({
                inputValue:''
            },()=>{
                this.input.current.focus();
            })
            return false
        }
        if(this.props.addTag){
            this.props.addTag(inputValue);
            this.setState({
                inputVisible:false,
                inputValue:''
            })
        }
    }
    highLightTag = (index) => {
        console.log(index)
        console.log(activeColor)
        if(this.props.onchange){
            this.props.onChange(this.getTagValueFroIndex(index));
        }
    }
    getTagValueFroIndex = index => {
        const {tags}  =this.state;
        return tags[index]
    }
    handleClose = (index) => {
        this.props.onClose && this.props.onClose(index)
    }
}
export default DocumentType