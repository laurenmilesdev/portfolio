import { useState } from 'react';
import { Button, TextField } from '@mui/material';

import EmailType from '@/types/email';
import EmailService from '@/services/email-service';

import styles from './Email.module.css';

export default function Email() {
  const [email, setEmail] = useState(new EmailType('laurenmiles.dev@gmail.com', '', '', ''));

  function handleChange(e: any) {
    setEmail((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  }

  function submit(e: any) {
    e.preventDefault();

    if (email.to && email.from && email.subject && email.body) {
      new EmailService().send();
    }
  }

  return (
    <form onSubmit={(e: any) => submit(e)}>
      <div className="col-md-12">
        <div className="col-md-12 p-3">
          <h3>Want to send me an email?</h3>
        </div>
        <div className="col-md-12 p-3">
          <p>
            Feel free to send me an email to connect with me. You can either use the built in email
            text box below or send me an email on your own time at{' '}
            <strong>laurenmiles.dev@gmail.com</strong>.
          </p>
        </div>
        <div className="col-md-12 p-3">
          <TextField
            id="from"
            type="email"
            value={email.from}
            onChange={handleChange}
            className={styles['text-field']}
            placeholder="email address"
            fullWidth
            required
          />
        </div>
        <div className="col-md-12 p-3">
          <TextField
            id="subject"
            type="text"
            value={email.subject}
            onChange={handleChange}
            className={styles['text-field']}
            placeholder="subject"
            fullWidth
            required
          />
        </div>
        <div className="col-md-12 p-3">
          <TextField
            id="body"
            type="text"
            value={email.body}
            onChange={handleChange}
            className={styles['text-field']}
            placeholder="body"
            rows={7}
            multiline
            fullWidth
            required
          />
        </div>
        <div className="col-md-12 p-3">
          <Button onClick={submit}>Send</Button>
          <Button>Clear</Button>
        </div>
      </div>
    </form>
  );
}
