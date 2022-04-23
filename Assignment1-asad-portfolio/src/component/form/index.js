import React from 'react';
import Input from './Input';

import "../../sass/_main.scss";

const Form = () => {
  return (

    <section className="form" id="letsTalk" name="letsTalk">
      <h2 className="form__h2">Lets talk</h2>
      <form className='form__element'>
        <fieldset className="form__fieldset">
          <Input InputName={"fname"} placeHolder={"First name"} condition={true} className="form__input"/>
          <Input InputName={"lname"} placeHolder={"second name"} condition={true} className="form__input" />
          <Input InputName={"Message"} placeHolder={"Message"} condition={false}  className="form__message" cols={"30"} rows={"10"} />
          <input type="submit" value="Submit" className="btn" />
        </fieldset>
      </form>
    </section>

  )
}

export default Form