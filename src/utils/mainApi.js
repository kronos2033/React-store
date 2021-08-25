const URL = 'http://6382-79-134-200-98.ngrok.io/ai-product/';
const headerdData = {
    Accept: 'application/json',
'Content-Type': 'application/json',
}

export const getProductData = async () => {
  try {
        const data = await fetch(URL, {
            method: 'GET',
            headers: headerdData
        });
        return await data.json();
    } catch (err) {
        return console.log(err);
    }
};


