import React from "react";

export default class FormErrors extends React.Component {
  render() {
    const { formErrors } = this.props;
    return (
      <div className='formErrors'>
        {Object.keys(formErrors).map((fieldName, i) => {
          if (formErrors[fieldName].length > 0) {
            return (
              <p key={i}>{fieldName} {formErrors[fieldName]}</p>
            )
          } else {
            return '';
          }
        })}
      </div>
    )
  }
}
