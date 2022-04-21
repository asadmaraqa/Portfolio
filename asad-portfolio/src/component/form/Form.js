import React from 'react'
import "../../sass/_main.scss"
const Form = () => {
  return (

    <section class="form" id="letsTalk">
      <h2 class="form__h2">Lets talk</h2>
      <form>
        <fieldset class="form__fieldset">
          <label for="fname">Name</label>
          <input type="text" name="fname" id="fname" class="form__input" placeholder="First Name" />
          <label for="lname">Second input</label>
          <input type="text" name="lname" id="lname" class="form__input" placeholder="Last Name" />
          <label for="Message">Message</label>
          <textarea name="Message" id="Message" cols="30" rows="10" placeholder="Message"
            class="form__message" />
          <input type="submit" value="Submit" class="btn" />
        </fieldset>
      </form>
    </section>

  )
}

export default Form