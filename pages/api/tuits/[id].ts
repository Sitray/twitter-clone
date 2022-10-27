import { firestore } from '../../../firebase/admin';

export default (req, res) => {
  const { query } = req;
  const { id } = query;

  firestore
    .collection('Tuits')
    .doc(id)
    .get()
    .then((doc: any) => {
      const data = doc.data();
      const id = doc.id;
      const { createdAt } = data;

      const formatedData = new Date(
        createdAt.seconds * 1000
      ).toLocaleDateString();

      res.json({
        ...data,
        id,
        createdAt: formatedData,
      });
    })
    .catch(() => {
      console.log(res);
      res.status(404).end();
    });
};
