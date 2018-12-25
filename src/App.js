import React, { Component } from "react";
import "./App.css";
import { Container, Segment, Form } from "semantic-ui-react";
import DynComp from "./DynComp";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        form_fields: ["a", "b"],
        form_id: "",
        form_name: ""
      }
    };
  }
  async componentDidMount() {
    await fetch("https://randomform.herokuapp.com")
      .then(res => res.json())
      .then(data => this.setState({ data: data.data }));
    console.log(this.state.data);
  }
  render() {
    const { form_name, form_id, form_fields } = this.state.data;
    return (
      <div className="App">
        <Container>
          <Segment>
            <h2>{form_name}</h2>
            <Form id={form_id}>
              {form_fields.map((comp, i) => (
                <DynComp dna={comp} key={i} />
              ))}
            </Form>
          </Segment>
        </Container>
      </div>
    );
  }
}

export default App;
