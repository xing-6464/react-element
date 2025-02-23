import classNames from 'classnames';
import React, { forwardRef } from 'react';
import type { ButtonProps } from './types';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  props,
  ref,
) {
  const {
    className,
    size,
    type,
    circle,
    plain,
    round,
    disabled,
    nativeType = 'button',
    loading,
    children,
    ...restProps
  } = props;

  const classes = classNames('x-button', className, {
    [`x-button--${type}`]: type,
    [`x-button--${size}`]: size,
    'is-plain': plain,
    'is-circle': circle,
    'is-round': round,
    'is-disabled': disabled,
    'is-loading': loading,
  });

  // const iconElement = () => {
  //   if (loading) return <Icon icon="spinner" spin />
  //   if (icon) return <Icon icon={icon} />

  //   return null
  // }

  return (
    <button
      ref={ref}
      className={classes}
      // eslint-disable-next-line react/button-has-type
      type={nativeType}
      disabled={disabled || loading}
      {...restProps}
    >
      <span>{children}</span>
    </button>
  );
});

export default Button;
