import Options from './options/Options';
import AddressBar from './address-bar/AddressBar';

type Props = {
  addressBarUrl?: string;
};

export const internetExplorerBarDivId = 'ie-bar';
export const options = ['File', 'Edit', 'Views', 'Favorites', 'Tools', 'Help'];

export default function InternetExplorerBar({ addressBarUrl }: Props) {
  return (
    <div id={internetExplorerBarDivId}>
      <Options options={options} />
      <AddressBar addressBarUrl={addressBarUrl} />
    </div>
  );
}
