import React, { Component } from "react";
import { Form, TextArea } from "semantic-ui-react";

export default class DynComp extends Component {
  render() {
    const { description, editable, label, options, autofill, autoselect, required, validation } = this.props.dna;
    const components = {
      select: (
        <Form.Group grouped>
          <Form.Field label={label} control="select" disabled={!editable} defaultValue={autoselect && autoselect[0]}>
            {options && options.map(opt => <option value={opt}>{opt}</option>)}
          </Form.Field>
          <p>{description}</p>
        </Form.Group>
      ),
      checkbox: (
        <Form.Group grouped>
          <label>{label}</label>
          <p>{description}</p>
          {options &&
            options.map(opt => (
              <Form.Field
                disabled={!editable}
                checked={autoselect && autoselect.indexOf(opt) !== -1}
                label={opt}
                control="input"
                type="checkbox"
              />
            ))}
        </Form.Group>
      ),
      textinput: (
        <Form.Group grouped>
          <Form.Field label={label} value={autofill} control="input" disabled={!editable} />
          <p>{description}</p>
        </Form.Group>
      ),
      radio: (
        <Form.Group grouped>
          <label>{label}</label>
          <p>{description}</p>
          {options &&
            options.map(opt => (
              <Form.Field
                disabled={!editable}
                checked={autoselect && opt === autoselect[0]}
                label={opt}
                control="input"
                type="radio"
              />
            ))}
        </Form.Group>
      ),
      textarea: (
        <Form.Group grouped>
          <label>{label}</label>
          <p>{description}</p>
          <TextArea value={autofill} disabled={!editable} placeholder="Tell us more" />
        </Form.Group>
      )
    };
    return <div style={{ padding: "15px 0" }}>{components[this.props.dna.component]}</div>;
  }
}
