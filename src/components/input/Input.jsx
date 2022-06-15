import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './input.scss';
import Icon from "../icon";

const Input = ({
                   placeholder,
                   onChange,
                   onFocus,
                   onBlur,
                   icon,
                   label,
                   value,
                   type,
                   className
               }) => {

    const inputClasses = classNames(
        'input__value',
        className
    );

    return (
        <div className="input">
            {
                label &&
                <label htmlFor={label}>{label}</label>
            }
            <input
                className={inputClasses}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                value={value}
            />
            {
                icon && icon !== '' &&
                <Icon name={icon} />
            }
        </div>
    );
};

Input.propTypes = {
    placeholder: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    value: PropTypes.string,
    label: PropTypes.string,
    type: PropTypes.string,
};

Input.defaultProps = {
    placeholder: '',
    className: '',
    onChange: () => {},
    onFocus: () => {},
    onBlur: () => {},
    value: '',
    label: '',
    type: 'text',
};

export default Input;
