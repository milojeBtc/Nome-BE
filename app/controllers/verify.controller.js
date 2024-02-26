const axios = require("axios");

exports.verifyTokens = async (req, res) => {
  const address = req.body.address;
  const ticker = req.body.ticker;

  const headers = {
    Authorization:
      "Bearer 678f4966c3fbd6b084a0a2a1626e388e3f4972321f416baf68d9321611ad7c25",
  };

  const payload = await axios.get(
    `https://open-api-testnet.unisat.io/v1/indexer/address/${address}/brc20/${ticker}/info`,
    {
      headers
    }
  );
  let result = payload.data;

  res.send({
    result,
  });
  return;
};
