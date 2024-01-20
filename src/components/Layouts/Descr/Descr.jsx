import React from 'react'
import propTypes from 'prop-types';
import classNames from 'classnames'

import './Descr.scss';

export default function Descr ({ className, isPrimary, isSecondary, children, ...attrs }) {

    const classes = classNames('ui-text', className, {
        isPrimary,
        isSecondary,
    }) 
    
    Descr.propTypes = {
        isPrimary: propTypes.bool,
        isSecondary: propTypes.bool,
        className: propTypes.string,
        children: propTypes.node.isRequired,
    }
    
    Descr.defaultProps = {
        isPrimary: false,
        isSecondary: false,
        className: 'Descr',

    }
    
    return (
        <p 
            className={classes} 
            contentEditable 
            suppressContentEditableWarning 
            spellCheck={false} 
            {...attrs} 
        >
            { children }
        </p>
    )
}