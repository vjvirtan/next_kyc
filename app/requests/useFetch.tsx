const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Origin: "https://kyc.firehay.com",
};

export const useFetch = () => {
  async function postData(url: string, data: {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data),
    }).then((e) => {
      return e;
    });
    return response;
  }

  async function getData(url: string) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "GET",
      headers: headers,
    });
    return response;
  }

  return { postData, getData };
};
