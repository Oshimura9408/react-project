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
        <div>
          <label>{label}</label>
          <input type="text" name={name} ref={this.fieldElement} onChange={this.onChange} />
        </div>
      );
    }
}

export default Input;
