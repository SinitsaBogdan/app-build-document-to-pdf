import React from 'react'
import propTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames'

import './Title.scss';

const Wrapper = styled.div`

    margin-bottom: 1rem;

    button {
        margin-left: -0.2rem;
        display: inline-block;
        transition: 0.1s all ease;
        opacity: 0 !important;
    }

    &:hover button {
        opacity: 1 !important;
    }

    p {
        max-width: 100%;
        display: inline-block;
    }
`

export default function Title({ className, maxWidth, isUppercase, isShowButton, onClick, size, children, ...attrs }) {

    const classes = classNames(`ui-title-${size}`, className, { isUppercase })

    Title.propTypes = {
        size: propTypes.oneOf(['1', '2', '3', '4', '5',]),
        className: propTypes.string,
        maxWidth: propTypes.string,
        children: propTypes.node.isRequired,
        isUppercase: propTypes.bool,
        isShowButton: propTypes.bool,
        onClick: propTypes.func,
    }

    Title.defaultProps = {
        size: '1',
        className: 'Title',
        maxWidth: '40',
        isUppercase: false,
        isShowButton: false,
        onClick: () => {},
    }

    return (
        <Wrapper>
            <p
                className={classes}
                maxWidth={maxWidth}
                contentEditable 
                suppressContentEditableWarning 
                spellCheck={false} 
                {...attrs} 
            >
                {children}
            </p>

            { 
                isShowButton && (
                    <button className='ui-button isLink' onClick={onClick}>
                        +
                    </button>
                )
            }
                
        </Wrapper>
    )
}