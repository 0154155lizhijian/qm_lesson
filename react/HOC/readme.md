Student
原始组件 独立
高阶组件，基于原始组件，封装一下，可以改头换面
新建组件会产生垃圾组件


const EnhancedComponent = higherOrderComponent(WrappedComponent)
  function higherOrderComponent(WrappedComponent) {
      return (props) =>(
          <div>
            <WrappedComponent {...props} />
          </div>
          <input />
      )
  }