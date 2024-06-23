# Lezgo Project

Buy, resell, and trade NFT tickets for events with Lezgo

## Project Structure

The project is divided into two main parts:

- **Lezgo-Contracts**: Contains Rust-based smart contracts for the Lezgo project.
- **Lezgo-Frontend**: A Next.js frontend application that interacts with the smart contracts.

### Lezgo-Contracts

This directory contains two main contracts:

- **gNFT-Tickets-Contract**: A contract for managing NFT tickets.
- **Smart-Contract-Factory**: A factory contract for creating and managing instances of other contracts.

#### How to Build Contracts

1. Navigate to the desired contract directory from the root of the project.
2. Run `cargo build --release` to compile the contract.

### Lezgo-Frontend

The frontend application is built with Next.js and Tailwind CSS for styling. It provides a user interface for interacting with the smart contracts.

#### How to Run the Frontend

1. Navigate to the [`Lezgo-Frontend`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FC%3A%2FUsers%2Fmarce%2Fsource%2Fweb3%2FLezgo%2FLezgo-Frontend%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "c:\\Users\marce\source\web3\Lezgo\Lezgo-Frontend") directory.
2. Install dependencies with `npm install`.
3. Run the development server with `npm run dev`.

## Getting Started

To get started with the Lezgo project, clone this repository and follow the build instructions for each part of the project.

```bash
git clone <repository-url>
```

### Prerequisites

- Rust and Cargo for compiling smart contracts.
- Node.js and npm for running the frontend application.

## Contributing

Contributions are welcome! Please read our contributing guidelines for more information on how to contribute to the Lezgo project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
