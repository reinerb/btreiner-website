import axios from 'axios';

const formspreeUrl = `https://formspree.io/f/${process.env.FORMSPREE_KEY}`;

export default async (req, res) => {
  if (req.method !== 'POST') {
    res.status(500).json({ message: 'Only POST requests are valid' });
    return;
  }

  const { formData } = req.body;

  try {
    await axios({
      method: 'POST',
      url: formspreeUrl,
      message: formData,
    });
    res.status(200).json({ message: 'Success' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Formspree server error' });
  }
};
