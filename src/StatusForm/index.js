import React, {Component} from "react"
import {Panel, FormGroup, ControlLabel, FormControl} from "react-bootstrap"

export default class JobForm extends Component {
  render() {
    return (
      <Panel>
        <form>
          <FormGroup>
            <ControlLabel>What is your current status?</ControlLabel>
            <FormControl componentClass="select" placeholder="select">
              <option value="select">select</option>
              <option value="other">...</option>
            </FormControl>
          </FormGroup>
        </form>
      </Panel>
    )
  }
}
