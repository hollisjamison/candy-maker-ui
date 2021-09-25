import React, {useState} from 'react'
import Search from './search'

export default () => {
  const [term, setTerm] = useState('')
  return <Search term={term} setter={setTerm}/>
}
