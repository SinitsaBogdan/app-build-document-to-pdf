import styled from 'styled-components';
import propTypes from 'prop-types';
import React from 'react';

import './Range.scss';

import Descr from '../../Layouts/Descr'

const Wrapper = styled.div`
  display: inline-block;
  width: 33%;
  margin: 0.4rem 0;
`

export default function Range({className, ...attrs}) {
  
    const [value, setValue] = React.useState(90)


    Range.propTypes = {
        className: propTypes.string,
    }

    Range.defaultProps = {
        className: 'Title',
    }

    return (
        <Wrapper className={className}>
            <Descr>Name - {value}%</Descr>
            <input 
                className='Range'
                type="range" 
                step='10'
                min='0'
                max='100'
                value={value} 
                onChange={e => setValue(e.target.value)} 
            />
        </Wrapper>
    )
}