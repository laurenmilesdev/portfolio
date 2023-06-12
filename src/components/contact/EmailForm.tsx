import { useState } from 'react';
import { Button, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import ClearIcon from '@mui/icons-material/Clear';
import TextFieldType from '../../types/component-helpers/text-field';
import EmailType from '../../types/contact/email';
import EmailTextFieldConstant from '../../constants/email-text-field-type';

import EmailService from '../../services/email-service';

import styles from './EmailForm.module.css';

export default function EmailForm() {
  const [email, setEmail] = useState(new EmailType('laurenmiles.dev@gmail.com', '', '', ''));
  const [fromError, setFromError] = useState(false);
  const [subjectError, setSubjectError] = useState(false);
  const [bodyError, setBodyError] = useState(false);
  const fields = [
    new TextFieldType(
      EmailTextFieldConstant.FROM,
      'email',
      email.from,
      'Email Address',
      'email address'
    ),
    new TextFieldType(
      EmailTextFieldConstant.SUBJECT,
      'text',
      email.subject,
      EmailTextFieldConstant.SUBJECT,
      'subject'
    ),
    new TextFieldType(
      EmailTextFieldConstant.BODY,
      'text',
      email.body,
      EmailTextFieldConstant.BODY,
      'body'
    ),
  ];

  function handleChange(event: any) {
    const { id, value } = event.target;
    const valueEmpty = value === '';

    setEmail((prev) => ({
      ...prev,
      [id]: value,
    }));

    if (fromError && id === EmailTextFieldConstant.FROM && !valueEmpty) setFromError(false);
    if (subjectError && id === EmailTextFieldConstant.SUBJECT && !valueEmpty)
      setSubjectError(false);
    if (bodyError && id === EmailTextFieldConstant.BODY && !valueEmpty) setBodyError(false);
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

  function submit(event: any) {
    event.preventDefault();

    const formIsValid = formValidation();

    if (formIsValid) {
      new EmailService().send(email);
    }
  }

  return (
    <form onSubmit={(event: any) => submit(event)}>
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
              field.id === EmailTextFieldConstant.FROM
                ? fromError
                : field.id === EmailTextFieldConstant.SUBJECT
                ? subjectError
                : bodyError
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
    </form>
  );
}
