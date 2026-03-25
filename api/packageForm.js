export default async function handler(req, res) {
  try {
    console.log('req.body is: ', req.body);
  } catch (error) {
    console.error(error.message);
  }
}
