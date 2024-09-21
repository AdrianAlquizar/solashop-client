import React from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'; // Wallet button UI

const Header = () => {
  const { publicKey } = useWallet();  // Access the user's wallet info

  return (
    <div>
        <WalletMultiButton/>
    </div>
  )
}

export default Header;