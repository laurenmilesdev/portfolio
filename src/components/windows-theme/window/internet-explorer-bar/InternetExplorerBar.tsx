import WindowOptions from './options/Options';
import AddressBar from './address-bar/AddressBar';

type Props = {
  addressBarUrl?: string;
};

export const options = ['File', 'Edit', 'Views', 'Favorites', 'Tools', 'Help'];

export default function InternetExplorerBar({ addressBarUrl }: Props) {
  return (
    <>
      <WindowOptions options={options} />
      <AddressBar addressBarUrl={addressBarUrl} />
    </>
  );
}
