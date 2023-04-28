import axios from 'axios';

const formspreeUrl = `https://formspree.io/f/${process.env.FORMSPREE_KEY}`;

export default async (req, res) => {
  if (req.method !== 'POST') {
    res.status(500).json({ message: 'Only POST requests are valid' });
    return;
  }

  const { formData } = req.body;

  try {
    console.log(formData);
    await axios({
      method: 'POST',
      url: formspreeUrl,
      data: formData,
    });
    res.status(200).json({ message: 'Success' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Formspree server error' });
  }
};
