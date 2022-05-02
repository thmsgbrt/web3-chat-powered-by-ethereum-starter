import React from "react";

interface Props {
  setAccount: React.Dispatch<React.SetStateAction<string | undefined>>;
  account?: string;
}

const Sidebar = ({ setAccount, account }: Props) => {
  const isMetaMaskInstalled = false;

  return (
    <div className="sidebar">
      {account && (
        <>
          <b>Connected as:</b>
          <br />
          <small>{account}</small>
        </>
      )}
      {!account && (
        <button disabled={!isMetaMaskInstalled}>Connect With MetaMask</button>
      )}
      {!isMetaMaskInstalled && <p>Please install MetaMask</p>}
    </div>
  );
};

export default Sidebar;
