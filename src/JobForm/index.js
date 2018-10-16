import React, {Component} from "react"
import {Panel, FormGroup, ControlLabel, FormControl} from "react-bootstrap"

export default class JobForm extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Panel>
        <h3>
          Job {this.props.jobNumber}
        </h3>

        <form>
          <FormGroup>
            <ControlLabel>What is your occupation?</ControlLabel>
            <FormControl componentClass="select" placeholder="select">
              <option value="select">select</option>
              <option value="other">...</option>
            </FormControl>
          </FormGroup>

          <FormGroup>
            <ControlLabel>Company Name</ControlLabel>
            <FormControl
              type="text"
              placeholder="Enter company name"
            />
            <FormControl.Feedback />
          </FormGroup>

          <FormGroup>
            <ControlLabel>Income</ControlLabel>
            <FormControl
              type="text"
              placeholder="Enter amount"
            />
            <FormControl.Feedback />
          </FormGroup>
        </form>
      </Panel>
    )
  }
}
