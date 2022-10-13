import React from 'react'

import { useState } from 'react';

export default function Texts() {
const handleOnChange = (event)=>{
    setText(event.target.value);
}

const [text, setText]= useState('');

  return (
    <>
    <h1>Contact us</h1>
    <form class="row g-3 needs-validation" novalidate>
  <div class="col-md-4">
    <label for="validationCustom01" class="form-label">First name</label>
    <input type={text} class="form-control" id="validationCustom01" value={text} required onChange={handleOnChange} />
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-4">
    <label for="validationCustom02" class="form-label">Last name</label>
    <input type="text" class="form-control" id="validationCustom02"  required />
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-4">
    <label for="validationCustomUsername" class="form-label">Email</label>
    <div class="input-group has-validation">
      <span class="input-group-text" id="inputGroupPrepend">@</span>
      <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
      <div class="invalid-feedback">
        Please choose a username.
      </div>
    </div>
  </div>
  <div class="col-md-6">
    <label for="validationCustom03" class="form-label">City</label>
    <input type="text" class="form-control" id="validationCustom03" required />
    <div class="invalid-feedback">
      Please provide a valid city.
    </div>
  </div>
  
  <div class="col-md-3">
    <label for="validationCustom05" class="form-label">Pincode</label>
    <input type="text" class="form-control" id="validationCustom05" required />
    <div class="invalid-feedback">
      Please provide a valid zip.
    </div>
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required />
      <label class="form-check-label" for="invalidCheck">
        Agree to terms and conditions
      </label>
      <div class="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <div class="col-12">
    <button class="btn btn-primary" type="submit">Submit</button>
  </div>
</form>
    </>
  )
}
