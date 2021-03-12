import React from 'react'
import './search-box.styles.css'
import { DebounceInput } from 'react-debounce-input';

export const SearchBox = ({placeholder,handleChange})=>{
  return <DebounceInput
  // minLength={2}
  className='search'
  debounceTimeout={300}
  type='search'
  placeholder={ placeholder }
  onChange={handleChange}
/>

}