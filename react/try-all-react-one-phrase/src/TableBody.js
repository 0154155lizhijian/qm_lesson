import React from 'react';
const TableBody = (props)=>{
  console.log(props);
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td><a href="javascript:;" className="btn btn-primary" onClick={()=>props.removeCharacter(index)}>删除</a></td>
      </tr>
    )
  });
  // 函数式组件， 纯函数
  return (
    <tbody>
      {rows}
    </tbody>
  );
}
export default TableBody
