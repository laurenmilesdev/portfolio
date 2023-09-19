import Options from './options/Options';
import AddressBar from './address-bar/AddressBar';

type Props = {
  addressBarUrl?: string;
};

export const options = ['File', 'Edit', 'Views', 'Favorites', 'Tools', 'Help'];

export default function InternetExplorerBar({ addressBarUrl }: Props) {
  return (
    <>
      <Options options={options} />
      <AddressBar addressBarUrl={addressBarUrl} />
    </>
  );
}
