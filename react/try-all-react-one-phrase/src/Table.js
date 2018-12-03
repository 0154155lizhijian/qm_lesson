import React, { Component } from 'react'
import TableHeader from './TableHeader'
import TableBody from './TableBody'


class Table extends Component {
  render() {
    console.log(this.props)
    const {characterData} = this.props
    const removeCharacter = this.props.removeCharacter
    return (
      <table className="table table-striped">
        <TableHeader />
        <TableBody characterData={characterData} removeCharacter={removeCharacter}/>
      </table>
    )
  }
}

export default Table
