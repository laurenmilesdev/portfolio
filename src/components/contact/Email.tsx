import { useState } from 'react';
import { Button, TextField } from '@mui/material';

import EmailType from '@/types/contact/email';
import TextFieldType from '@/types/component-helpers/text-field';
import EmailService from '@/services/email-service';

import styles from './Email.module.css';

type Props = {
  subtitle: string;
  description: string;
};

export default function Email(props: Props) {
  const [email, setEmail] = useState(new EmailType('laurenmiles.dev@gmail.com', '', '', ''));
  const fields = [
    new TextFieldType('from', 'email', email.from, 'Email Address', 'email address'),
    new TextFieldType('subject', 'text', email.subject, 'Subject', 'subject'),
    new TextFieldType('body', 'text', email.body, 'Body', 'body'),
  ];

  function handleChange(e: any) {
    setEmail((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  }

  function submit(e: any) {
    e.preventDefault();

    if (email.to && email.from && email.subject && email.body) {
      new EmailService().send(email);
    }
  }

  return (
    <form onSubmit={(e: any) => submit(e)}>
      <div className="col-md-12">
        <div className="col-md-12 p-3">
          <h3>{props.subtitle}</h3>
        </div>
        <div className="col-md-12 p-3">
          <p>{props.description}</p>
        </div>
        {fields.map((field) => (
          <div className="col-md-12 p-3">
            <TextField
              id={field.id}
              type={field.type}
              value={field.value}
              label={field.label}
              onChange={handleChange}
              className={styles['text-field']}
              placeholder={field.placeholder}
              fullWidth
              required
              multiline={field.isBody}
              rows={field.isBody ? 7 : 1}
            />
          </div>
        ))}
        <div className="col-md-12 p-3">
          <Button onClick={submit}>Send</Button>
          <Button>Clear</Button>
        </div>
      </div>
    </form>
  );
}
