// import React, { Component } from 'react';
// // import Button from 'antd/lib/button';
// import { Table,Form,Icon,Input,Button } from 'antd';
// import './App.css';

// // const FormItem = Form.FormItem;

// class App extends Component {
//   state = {
//     loading: false,
//     iconLoading: false
//   }
//   enterLoading = () => {
//     this.setState({
//       loading: true
//     })
//   }
//   handleSubmit = (e) => {
//     e.preventDefault();
//   }
//   enterIconLoading = () => {
//     this.setState({
//       iconLoading: true
//     })
//   }
//   render() {
//     const columns = [{
//       title: '姓名',
//       dataIndex: 'name',
//       key: 'name'
//     }, {
//       title: '年龄',
//       dataIndex: 'age',
//       key: 'age'
//     }, {
//       title: '住址',
//       dataIndex: 'address',
//       key: 'address'
//     }]
//     const dataSource=[{
//       key:'1',
//       name:'胡彦斌',
//       age:32,
//       address:'朝阳'
//     },{
//       key:'2',
//       name:'吴彦祖',
//       age:42,
//       address:'大兴'
//     },{
//       key:'3',
//       name:'郭德纲',
//       age:59,
//       address:'怀柔'
//     },{
//       key:'4',
//       name:'吴冕',
//       age:22,
//       address:'海淀'
//     }]

//     return (
//       <div>
//         <Form layout="inline" onSubmit={this.handleSubmit}>
//           <Form.Item>
//             <Input placeholder="Username" style={{color:'rgba(0,0,0,.25)'}} prefix={<Icon type="user"/>}/>
//             <Input placeholder="Password" style={{color:'rgba(0,0,0,.25)'}} prefix={<Icon type="user"/>}/>
//             <Button type='primary' htmlType='submit'>Login</Button>
//           </Form.Item>
//           <Form.Item>
//             <Input placeholder="Username" style={{color:'rgba(0,0,0,.25)'}} prefix={<Icon type="user"/>}/>
//             <Input placeholder="Password" style={{color:'rgba(0,0,0,.25)'}} prefix={<Icon type="user"/>}/>
//             <Button type='primary' htmlType='submit'>Login</Button>
//           </Form.Item>
//         </Form>
//         <Table columns={columns} dataSource={dataSource}></Table>
//         <Button type="primary" loading>Loading</Button>
//         <br/>
//         <Button
//           type="primary"
//           loading={this.state.loading}
//           onClick={this.enterLoading}>
//           Click me!
//         </Button>
//       </div>
//     );
//   }
// }

// export default App;

// 组件？ 封装了或组合了一些html, 完成一个特定的功能，并以一个自定义标签的形式向处提供，html, css,js
// antd UI 风格， 小蚂蚁 大力量， 配制优先
import React, { Component } from 'react';
import { 
  Form, Icon, Input, Button 
} from 'antd';
import './App.css'

const FormItem = Form.Item;

class HorizontalLoginForm extends React.Component {
  render () {
    const {
      getFieldDecorator,
      getFieldsError,
      getFieldError,
      isFieldTouched
    } = this.props.form;
    const userNameError = isFieldTouched('username') && getFieldError('username');
    const passwordError = isFieldTouched('password') && getFieldError('password');

    return (
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <FormItem validateStatus={userNameError?'error':''} help={userNameError || ''}>
        {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} type="username" placeholder="Username" />
          )}
        </FormItem>

        <FormItem
          validateStatus={passwordError ? 'error' : ''}
          help={passwordError || ''}
        >
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </FormItem>

        <FormItem>
          <Button type='primary' htmlType='submit' >Login</Button>
        </FormItem>

      </Form>
    )
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values);
      } else {
        console.log(err);
      }
    })

  }
}

const WrappedHorizontalLoginForm = Form.create()(HorizontalLoginForm);
// console.log(WrappedHorizontalLoginForm);

class App extends Component {
  render () {
    return (
      <div >
        <WrappedHorizontalLoginForm /> 
      </div>
    );
  }
}

export default App;
