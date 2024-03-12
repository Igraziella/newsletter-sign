import React from 'react';
import './App.css';

const App = () => {
  return (
    <main>
      <div className="container">
        <div className='body'>
          <h1>Stay updated!</h1>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
          <ul>
            <li><img src="/images/icon-list.svg" alt="icon" />
            Product discovery and building what matters
            </li>
            <li><img src="/images/icon-list.svg" alt="icon" />
            Measuring to ensure updates are a success
            </li>
            <li><img src="/images/icon-list.svg" alt="icon" />
            And much more!
            </li>
          </ul>
        <div>
          <form className='email-form'>
             <label htmlFor="email">Email address</label>
             <p className='error-msg'>Valid email required</p>
             <input type="text" input="email" placeholder='email@company.com'/>
          </form>
          <button className='btn' type='submit'>Subscribe to monthly newsletter</button>
        </div>
        </div>
        <div className="image">
         <img src="/images/illustration-sign-up-desktop.svg" alt="" />
        </div>
      </div>
      <div className="thanks hidden">
        <img src="./images/icon-success.svg" alt="success-icon" />
        <div className='thank-you'>
          <h1>Thanks for subscribing!</h1>
          <p>
            A confirmation email has been sent to <span></span>. Please open it and click the button inside to confirm your subscription. 
          </p>
          <button className='btn'>
            Dismiss message
          </button>
         </div>
      </div>
    </main>
  )
}

export default App;
