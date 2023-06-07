import { useState } from 'react';
import { Button, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import ClearIcon from '@mui/icons-material/Clear';

import EmailService from '../../services/email-service';
import EmailType from '../../types/contact/email';
import TextFieldType from '../../types/component-helpers/text-field';
import * as EmailTextFieldConstant from '../../constants/email-text-field-type';

import styles from './Email.module.css';

type Props = {
  subtitle: string;
  description: string;
};

export default function Email(props: Props): JSX.Element {
  const [email, setEmail] = useState(new EmailType('laurenmiles.dev@gmail.com', '', '', ''));
  const [fromError, setFromError] = useState(false);
  const [subjectError, setSubjectError] = useState(false);
  const [bodyError, setBodyError] = useState(false);
  const fields = [
    new TextFieldType('from', 'email', email.from, 'Email Address', 'email address'),
    new TextFieldType('subject', 'text', email.subject, 'Subject', 'subject'),
    new TextFieldType('body', 'text', email.body, 'Body', 'body'),
  ];

  function handleChange(e: any) {
    const { id, value } = e.target;
    const valueEmpty = value === '';

    setEmail((prev) => ({
      ...prev,
      [id]: value,
    }));

    if (fromError && id === EmailTextFieldConstant.from && !valueEmpty) setFromError(false);
    if (subjectError && id === EmailTextFieldConstant.subject && !valueEmpty)
      setSubjectError(false);
    if (bodyError && id === EmailTextFieldConstant.body && !valueEmpty) setBodyError(false);
  }

  function formValidation() {
    const isFromValid = email.from !== '';
    const isSubjectValid = email.subject !== '';
    const isBodyValid = email.body !== '';

    if (isFromValid && isSubjectValid && isBodyValid) return true;

    if (!isFromValid) setFromError(true);
    if (!isSubjectValid) setSubjectError(true);
    if (!isBodyValid) setBodyError(true);

    return false;
  }

  function submit(e: any) {
    e.preventDefault();

    const formIsValid = formValidation();

    if (formIsValid) {
      new EmailService().send(email);
    }
  }

  return (
    <form onSubmit={(e: any) => submit(e)}>
      <div className="col-md-12 email-container">
        <div className="col-md-12 p-3">
          <h2>{props.subtitle.toUpperCase()}</h2>
        </div>
        <div className="col-md-12 p-3">
          <p>{props.description}</p>
        </div>
        {fields.map((field) => (
          <div className="col-md-12 p-3" key={field.id} data-testid={field.id}>
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
              error={
                field.id === 'from' ? fromError : field.id === 'subject' ? subjectError : bodyError
              }
            />
          </div>
        ))}
        <div className="col-md-12 p-3">
          <Button onClick={submit} className="btn-primary">
            <SendIcon />
          </Button>
          <Button className="btn-warn">
            <ClearIcon />
          </Button>
        </div>
      </div>
    </form>
  );
}
