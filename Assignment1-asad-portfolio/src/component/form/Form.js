import React from 'react'
import "../../sass/_main.scss"
const Form = () => {
  return (

    <section className="form" id="letsTalk">
      <h2 className="form__h2">Lets talk</h2>
      <form className='form__element'>
        <fieldset className="form__fieldset">
          <label for="fname">Name</label>
          <input type="text" name="fname" id="fname" className="form__input" placeholder="First Name" />
          <label for="lname">Second input</label>
          <input type="text" name="lname" id="lname" className="form__input" placeholder="Last Name" />
          <label for="Message">Message</label>
          <textarea name="Message" id="Message" cols="30" rows="10" placeholder="Message"
            className="form__message" />
          <input type="submit" value="Submit" className="btn" />
        </fieldset>
      </form>
    </section>

  )
}

export default Form