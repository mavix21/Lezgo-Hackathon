"use client"

import Identicon from '@polkadot/react-identicon';

type Props = {
  address: string;
  name: string | undefined;
  onClick: () => void;
  isActive?: boolean;
  block?: boolean;
};

function AccountButton({ address, name, onClick, isActive, block }: Props) {
  return (
    <button type="button" onClick={onClick} className='flex flex-row mr-4 text-white'>
      <Identicon value={address} theme="polkadot" size={28} className='mr-2' />
      {name}
    </button>
  );
}

export { AccountButton }