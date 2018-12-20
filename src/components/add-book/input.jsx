import React, { PureComponent, createRef } from 'react';
import PropTypes from 'prop-types';

class Input extends PureComponent {
    static propTypes = {
      handleChange: PropTypes.func.isRequired,
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    };

    fieldElement = createRef();

    onChange = () => {
      const { handleChange, name } = this.props;

      handleChange(name, this.fieldElement.current.value);
    };

    render() {
      const { label, name } = this.props;

      return (
        <div className="form__item">
          <label>{label}</label>
          <input type="text" name={name} ref={this.fieldElement} onChange={this.onChange} required />
        </div>
      );
    }
}

export default Input;
