import Fade from '@mui/material/Fade';

type Props = {
  description: string;
};

export const descriptionDivId = 'contact-description';

export default function Contact({ description }: Props): JSX.Element {
  return (
    <Fade in={true}>
      <div
        className="col-md-12"
        id={descriptionDivId}
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </Fade>
  );
}
