exports.handler = async () => {
  const mySecret = process.env.MY_SECRET;
    return {
      statusCode: 200,
      body: `你好! 你的 secret variable: ${mySecret}`,
    };
  };