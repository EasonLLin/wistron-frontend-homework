import '@trendmicro/react-modal/dist/react-modal.css'
import '@trendmicro/react-buttons/dist/react-buttons.css'
import React from 'react'
import styled from 'styled-components'
import Modal from '@trendmicro/react-modal'
import { Button } from '@trendmicro/react-buttons'
const FormGroup = styled.div`
  margin-bottom: 8px;
`
const Input = styled.input`
  display: inline-block;
  width: 100%;
  padding: 5px 12px;
  font-size: 13px;
  color: #222222;
  background-color: #ffffff;
  background-image: none;
  border: 1px solid #cccccc;
  border-radius: 3px;
`
const Error = styled.div`
  display: block;
  color: #db3d44;
  margin-top: 4px;
`
const SignInForm = props => (
  <Modal>
    <Modal.Header>
      <Modal.Title>Sign In</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <FormGroup>
        <label>Username</label>
        <div>
          <Input type="text" placeholder="Enter username" />
        </div>
      </FormGroup>
      <FormGroup>
        <label>Password</label>
        <div>
          <Input type="password" placeholder="Enter password" />
        </div>
      </FormGroup>
      <Error>Incorrect username or password.</Error>
    </Modal.Body>
    <Modal.Footer>
      <Button btnStyle="flat">Cancel</Button>
      <Button btnStyle="primary" disabled>
        Sign In
      </Button>
    </Modal.Footer>
  </Modal>
)
export default SignInForm
