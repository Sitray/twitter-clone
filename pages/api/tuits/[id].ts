import { firestore } from '../../../firebase/admin';

export default (req, res) => {
  console.log('req', req);
  console.log('res', res);
  const { query } = req;
  const { id } = query;

  firestore
    .collection('Tuits')
    .doc(id)
    .get()
    .then((doc: any) => {
      const data = doc.data();
      res.json(data);
    })
    .catch(() => {
      console.log(res);
      res.status(404).end();
    });
};
