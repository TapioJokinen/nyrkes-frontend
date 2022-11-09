const { REACT_APP_API_VERSION_V1, REACT_APP_REQUEST_CREDENTIALS } = process.env;

const post = async (url: string, body: any) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: REACT_APP_API_VERSION_V1,
    },
    credentials: REACT_APP_REQUEST_CREDENTIALS,
    body: JSON.stringify(body),
  });
  return response;
};

export default post;
