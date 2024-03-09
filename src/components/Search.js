import React, { useState } from 'react';
import {Input} from 'antd';

const Search = ({searchTerm,onChange}) => {
    
    const style = {
        marginBottom: 16
      };
    return (
        <Input.Search
            placeholder="Search .."
            value={searchTerm}
            onChange={onChange}
            style={style}
          />
    )
}

export default Search;