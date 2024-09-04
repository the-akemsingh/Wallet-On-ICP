# `Secure Token Wallet on ICP Blockchain`

This project involves developing a secure token wallet on the Internet Computer Protocol (ICP) blockchain using Rust. The wallet supports basic functionalities such as sending and receiving IRCRC2 tokens, displaying token balances, and implementing basic security features. The project demonstrates proficiency in Rust programming, blockchain development, and smart contract deployment.
To learn more before you start working with `Token Wallet on ICP Blockchain`, see the following documentation available online:

- [Quick Start](https://internetcomputer.org/docs/current/developer-docs/setup/deploy-locally)
- [SDK Developer Tools](https://internetcomputer.org/docs/current/developer-docs/setup/install)
- [Rust Canister Development Guide](https://internetcomputer.org/docs/current/developer-docs/backend/rust/)
- [ic-cdk](https://docs.rs/ic-cdk)
- [ic-cdk-macros](https://docs.rs/ic-cdk-macros)
- [Candid Introduction](https://internetcomputer.org/docs/current/developer-docs/backend/candid/)

If you want to start working on your project right away, you might want to try the following commands:

```bash
cd icp_token_wallet/
dfx help
dfx canister --help
```

# `Prerequisites`
Before you begin, ensure you have the following installed on your system:

- [Rust](https://www.rust-lang.org/tools/install)
- [Node.js](https://nodejs.org/en)
- [ICP SDK](https://github.com/dfinity/sdk)
- [VS Code with WSL 2 (for Windows users)](https://code.visualstudio.com/)
- [Docker](https://www.docker.com/)

## Installation

# 1. Clone the project

```bash
git clone https://github.com/Chirag00007/icp-token-wallet.git
cd icp-token-wallet
```

Once the job completes, your application will be available at `http://localhost:4943?canisterId={asset_canister_id}`.

# 2. Install Rust dependencies:

```bash
rustc --version
```

Make sure Rust is properly installed if not installed then run this commmand
```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
source $HOME/.cargo/env

```
# 3. Install Node.js dependencies:
```bash
npm install
```
# 4.  Setup the ICP environment

- [Follow up this documentation](https://github.com/dfinity/sdk)

# 5. Start the local ICP network:
```bash
dfx start --background

```

# 6.  deploy the smart contract

```bash
dfx deployo
```

# 7. Run the application
```bash
npm start
```
