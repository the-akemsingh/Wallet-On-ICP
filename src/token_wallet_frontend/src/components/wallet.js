import React, { useState } from 'react';

function Wallet() {
  const [balance, setBalance] = useState(0);
  const [amount, setAmount] = useState('');
  const [recipient, setRecipient] = useState('');

  const fetchBalance = async () => {
    // Replace with actual call to backend canister
    const result = await fetch('/api/get_balance');
    const data = await result.json();
    setBalance(data.balance);
  };

  const sendTokens = async () => {
    // Replace with actual call to backend canister
    await fetch('/api/send_tokens', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount, recipient }),
    });
  };

  return (
    <div>
      <h1>Token Wallet</h1>
      <button onClick={fetchBalance}>Fetch Balance</button>
      <div>Balance: {balance}</div>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
      />
      <input
        type="text"
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
        placeholder="Recipient Principal"
      />
      <button onClick={sendTokens}>Send Tokens</button>
    </div>
  );
}

export default Wallet;
