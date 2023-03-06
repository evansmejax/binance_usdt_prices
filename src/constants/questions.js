const QUESTIONS = [
  {
    type: "list",
    name: "ticker",
    message: "Select cryptocurrency:",
    choices: ["USDT", "BTC", "BNB", "BUSD", "ETH", "DAI"],
  },
  {
    type: "list",
    name: "fiat",
    message: "Select fiat currency:",
    choices: [
      "AED",
      "AFN",
      "AMD",
      "ARS",
      "AUD",
      "AZN",
      "BDT",
      "BGN",
      "BHD",
      "BIF",
      "BND",
      "BOB",
      "BRL",
      "CAD",
      "CHF",
      "CLP",
      "CNY",
      "COP",
      "CRC",
      "CZK",
      "DJF",
      "DKK",
      "DOP",
      "DZD",
      "EGP",
      "ETB",
      "EUR",
      "GBP",
      "GEL",
      "GHS",
      "GNF",
      "GTQ",
      "HKD",
      "HNL",
      "HRK",
      "HUF",
      "IDR",
      "INR",
      "ISK",
      "JOD",
      "JPY",
      "KES",
      "KGS",
      "KHR",
      "KMF",
      "KWD",
      "KZT",
      "LAK",
      "LBP",
      "LKR",
      "LYD",
      "MAD",
      "MDL",
      "MGA",
      "MMK",
      "MNT",
      "MOP",
      "MXN",
      "NGN",
      "NIO",
      "NOK",
      "NPR",
      "NZD",
      "OMR",
      "PAB",
      "PEN",
      "PGK",
      "PHP",
      "PKR",
      "PLN",
      "PYG",
      "QAR",
      "RON",
      "RSD",
      "RUB",
      "RWF",
      "SAR",
      "SCR",
      "SDG",
      "SEK",
      "THB",
      "TJS",
      "TMT",
      "TND",
      "TRY",
      "TWD",
      "TZS",
      "UAH",
      "UGX",
      "USD",
      "UYU",
      "UZS",
      "VES",
      "VND",
      "XAF",
      "XOF",
      "YER",
      "ZAR",
    ],
  },
  {
    type: "list",
    name: "operation",
    message: "Select exchange type:",
    choices: ["BUY", "SELL"],
  },
  {
    type: "list",
    name: "payTypes",
    message: "Select payment method:",
    choices: [
      { name: "* (all)", value: null },
      "ABA",
      "ABank",
      "ABBBANK",
      "AccessBank",
      "ACLEDA",
      "Advcash",
      "Afriex",
      "AgroBank",
      "airtelmoney",
      "AirTM",
      "Akbank",
      "alBaraka",
      "ALIPAY",
      "AlliedBankLimited",
      "AltynBank",
      "Ameriabank",
      "Amonatbonk",
      "ApplePay",
      "ArabBank",
      "ArmBusinessBank",
      "AsiaUnitedBank",
      "BACcostarica",
      "BACCredomatic",
      "BAKAIBANK",
      "Bakong",
      "BanBif",
      "Bancamiga",
      "Bancamiga2",
      "BancoAgricolaSV",
      "BancoBACCredomaticSV",
      "BancoBolivariano",
      "BancoBrubankNew",
      "BancoDaviviendaSV",
      "BancodeBogota",
      "BancoDeBolivia",
      "BancoDeCostaRica",
      "BancoDeCredito",
      "BancoDelPacifico",
      "BancoDelSol",
      "BancoEconomico",
      "BancoEstado",
      "BancoFassil",
      "BancoGanadero",
      "BancoGeneralPanama",
      "BancoGuayaquil",
      "BancoHipotecario",
      "BancoLafiseNicaragua",
      "BancolombiaSA",
      "BancoPichincha",
      "BancoPromericaSV",
      "BancoSantaCruz",
      "BancoSantanderChile",
      "BancoUnion",
      "Banesco",
      "BanescoPanama",
      "BanistmoPanama",
      "BANK",
      "BankArgentina",
      "BankBrazil",
      "BankIndia",
      "BankofAmerica",
      "BankofGeorgia",
      "BankofJordan",
      "BankRBK",
      "BankRepublicUruguay",
      "BankTransferCambodia",
      "BankTransferCosta",
      "BankTransferMena",
      "Banktransferperu",
      "BanktransferTurkey",
      "BankTransferVietnam",
      "BankTransilvania",
      "BankVenezuela",
      "BBVABank",
      "BBVAUruguay",
      "BCAMobile",
      "BCH",
      "BCRBank",
      "BDO",
      "BMCEBank",
      "BPI",
      "Bunq",
      "Canadia",
      "CARTUBANK",
      "Cashapp",
      "CashDeposit",
      "CashInPerson",
      "CashPack",
      "CashU",
      "CenterCreditBank",
      "Ceskasporitelna",
      "Chippercash",
      "CIHBank",
      "CLICK",
      "Coinsph",
      "CoOperativeBankKenya",
      "CreditAgricole",
      "CreditBankofPeru",
      "CreditEuropeBank",
      "CREDOBANK",
      "DANA",
      "Daviplata",
      "DaviviendaSA",
      "DenizBank",
      "EasypaisaPK",
      "Efecty",
      "EmiratesNBD",
      "EQbank",
      "EquityBank",
      "ErsteBank",
      "Esewa",
      "EurasianBank",
      "Facebank",
      "FasterPayments",
      "FCMB",
      "FinComBank",
      "FirstBankOfNigeria",
      "ForteBank",
      "FPS",
      "Garanti",
      "Gcash",
      "GlobalBankPanama",
      "GoMoney",
      "GoPay",
      "GPay",
      "GTBank",
      "HALKBANK",
      "HalykBank",
      "HomeCreditKazakhstan",
      "Humo",
      "IdeaBank",
      "Idram",
      "IMPS",
      "Inecobank",
      "InteracETransfer",
      "Interbank",
      "ISBANK",
      "ItauUruguay",
      "izibank",
      "JazzCash",
      "JysanBank",
      "Kapitalbank",
      "KaspiBank",
      "KHBank",
      "KoronaPay",
      "KuveytTurk",
      "LemonCash",
      "LIBERTYBANK",
      "LloydsBank",
      "LoP",
      "MAIB",
      "Maybank",
      "mBank",
      "MBoP",
      "MeezanBank",
      "MercadoPagoNew",
      "Mercantil",
      "MercantilBankPanama",
      "MICB",
      "Millennium",
      "Mobiletopup",
      "MONETAMoneyBank",
      "MoneyGram",
      "Monobank",
      "Mony",
      "Monzo",
      "MoovMoney",
      "Movii",
      "MPesaKenya",
      "MpesaPaybill",
      "MpesaVodaphone",
      "MTNMobileMoney",
      "MultibankPanama",
      "NayaPay",
      "Nequi",
      "NETELLER",
      "OcaBlue",
      "OrangeMoney",
      "Oschadbank",
      "OTPBankRussia",
      "PagoMovil",
      "Papara",
      "PASHABANK",
      "Payall",
      "Payeer",
      "Paymaya",
      "Payme",
      "Paysend",
      "Paysera",
      "Paytm",
      "PerfectMoney",
      "PermataMe",
      "PhilippinesNationalB",
      "PhonePe",
      "PiPay",
      "PipolPay",
      "Pix",
      "PKObank",
      "Plin",
      "PREMIUMBANK",
      "Prex",
      "PrivatBank",
      "Produbanco",
      "PUMBBank",
      "QIWI",
      "QNB",
      "RaiffeisenBankRussia",
      "RCBC",
      "Reba",
      "RedPagos",
      "Revolut",
      "RosBank",
      "RUBfiatbalance",
      "SadaPay",
      "SantanderPoland",
      "SantanderUrug",
      "ScotiabankColpatria",
      "ScotiabankCostaRica",
      "ScotiabankPanama",
      "ScotiabankPeru",
      "ScotiabankUruguay",
      "SEPA",
      "SilvergateBank",
      "SkrillMoneybookers",
      "SocieteGenerale",
      "SpecificBank",
      "Sportbank",
      "StanbicBank",
      "StandardChartered",
      "stcpay",
      "SterlingBank",
      "SWIFT",
      "TBCbank",
      "TBCR",
      "TBH",
      "TDbank",
      "TigoMoney",
      "Tinkoff",
      "Towerbank",
      "TransferenciaACH",
      "TrueMoney",
      "TrueMoneyCambodia",
      "UAHfiatbalance",
      "UalaNew",
      "UBoP",
      "Ukrsibbank",
      "UNIBANK",
      "UniCreditBulbank",
      "UniCreditRussia",
      "UnionBankofNigeria",
      "UnitedBankLimited",
      "UnitedBulgarianBank",
      "Upaisa",
      "Uphold",
      "UPI",
      "Uzcard",
      "VakifBank",
      "Venmo",
      "Victoriabank",
      "Vodafonecash",
      "WallyTech",
      "WECHAT",
      "WesternUnion",
      "WhishMONEY",
      "Wilobank",
      "WingMoney",
      "Wise",
      "WorldRemit",
      "XalqBank",
      "Yape",
      "Zelle",
      "ZEN",
      "ZenithBank",
      "Zinli",
      "Ziraat",
    ],
  },
];

module.exports = QUESTIONS;