import React from 'react';
import {Button} from './Button.js';

function Footer() {
  return (
    <div className="footer-container">
        <section className="footer-subscription">
        <p className="footer-subscription-heading">
            Join the Adventure newsletter to receive our best vacation deals
        </p>

        <p classNAme='footer-subscription-text'>
        You can unsubscribe at any time.
        </p>

        <div className =" input-areas">
        <form>
        <input type="email" name="email" placeholder= "Your email" classname="footer-input" />
        <Button buttonStyle='btn--outline'>SUBSCRIBE</Button>

        </form>
        </div>


        </section>
    
    </div>
  )
}

export default Footer