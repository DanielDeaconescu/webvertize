export default async function handler(req, res) {
  try {
    const { data } = req.body;

    console.log('received data is: ', data);
  } catch (error) {
    console.error(error.message);
  }
}
