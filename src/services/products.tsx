import axios from 'axios';

const list = async () => {
  const response = await axios.get('pokemon/ditto').catch((request) => {
    return request.response;
  });
  return response.data;
};

export {
  list,

};
export default list;