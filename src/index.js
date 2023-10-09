const Webex = require("webex");
const Calling = require("webex/calling");
// const { Calling } = require("webex");

let callingClient;
let line;
// let webex;
let calling;

console.log("Shreyas", Webex);
console.log("Shreyas 2", Calling);

const webexConfig = {
  config: {
    logger: {
      level: "debug", // set the desired log level
    },
    meetings: {
      reconnection: {
        enabled: true,
      },
      enableRtx: true,
    },
    encryption: {
      kmsInitialTimeout: 8000,
      kmsMaxTimeout: 40000,
      batcherMaxCalls: 30,
      caroots: null,
    },
    dss: {},
  },
  credentials: {
    access_token:
      "NTNkYjQ3OTktMWZlMi00NGMxLWI5MTYtMjQ4MmYzNDU5NTkyMjk3ZjdjNjQtNTQ3_A52D_1704d30d-a131-4bc7-9449-948487643793",
  },
};

// Set calling configuration

const callingConfig = {
  clientConfig: {
    calling: true,
    contact: true,
    callHistory: true,
    callSettings: true,
    voicemail: true,
  },
  callingClientConfig: {
    logger: {
      level: "info",
    },
  },
  logger: {
    level: "info",
  },
};
// Create Calling object
// console.log(
//   "Creating webex---------------------------------------------------------"
// );
// webex = Webex.init(webexConfig);
// webex.once("ready", () => {
//   console.log("Authentication#Shreyas() :: Webex Ready");
// });
// .then(() => {
// });

// callingClient = Calling.init(webex, callingConfig);
// console.log(callingClient);
//   .then((response) => {
//     console.log("calling client", response);
//   })
//   .catch((e) => {
//     console.log("calling client error", e);
//   });
calling = Calling.init({ webexConfig, callingConfig });
calling.on("ready", () => {
  calling.register().then(() => {
    callingClient = calling.callingClient;
    console.log("Registered Shreyas");
  });
});
// console.log(
//   "Client created---------------------------------------------------------",
//   callingClient
// );

// line = Object.values(callingClient.getLines())[0];

// // Listen to the registered event from line

// line.on("registered", (lineInfo) => {
//   console.log("Line information: ", lineInfo);
// });

// line.register();
