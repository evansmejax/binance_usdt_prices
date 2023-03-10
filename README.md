  <img width="100%" src="https://i.imgur.com/jlkb0KS.gif">

# Binancio - Binance P2P Bot

Binancio calculates median price of any crypto-asset in fiat currency on Binance's p2p exchange right on your console.

## :zap: Usage

##### Interactive mode

```sh
npx binancio
```

##### Using custom options

```sh
npx binancio --ticker ETH --fiat USD --operation BUY
```

##### Overall options

```sh
npx binancio --help
```

```sh
Options
  -t, --ticker      <type> Crypto ticker (choices: "USDT", "BTC", "BNB", "BUSD", "ETH", "DAI")
  -f, --fiat        <type> Fiat currency (choices: "ARS", "EUR", "USD", "AED", "AUD", "BDT", ...)
  -o, --operation   <type> Operation type (choices: "BUY", "SELL")
  -p, --pay-types   <type> Payment method (choices: "*", "AirTM", "Bank Transfer" ...) [Depends on localization]
  -h, --help display help for command
```

## :cloud: Installation

```sh
# Using npm
npm install -g binancio

# Using yarn
yarn global add binancio
```

## Roadmap

- [x] Deprecate scrapper and use Binance Public API.
- [x] CLI Semantic API (eg. npx binancio --ticker ETH --fiat ARS --type BUY).
- [ ] Save output in json format.

## :package: Dependencies

- [inquirer](https://github.com/SBoudrias/Inquirer.js) - Common interactive command line user interfaces
- [commander](https://github.com/tj/commander.js/) - Node.js command-line interfaces made easy
- [chalk](https://github.com/chalk/chalk) - Terminal string styling done right
