import axios from 'axios';

const SCORE_MIN = 0.5;

const formspreeUrl = `https://formspree.io/f/${process.env.FORMSPREE_KEY}`;
const secretKey = process.env.RECAPTCHA_SECRET_KEY;

const verifyReCaptcha = async (token) => {
  const verificationURL = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;

  return await axios.post(verificationURL);
};

export default async (req, res) => {
  // Only support POST requests
  if (req.method !== 'POST') {
    return res.status(500).json({ message: 'Only POST requests are valid' });
  }

  const { formData, token } = req.body;

  try {
    const captchaResponse = await verifyReCaptcha(token);

    if (!captchaResponse.data.success) {
      return res.status(400).json({ message: 'ReCaptcha verification failed' });
    }

    if (captchaResponse.data.score < SCORE_MIN) {
      return res.status(500).json({ message: 'ReCaptcha score too low' });
    }
  } catch (err) {
    console.error(err);
    return res
      .status(400)
      .json({ message: 'ReCaptcha did not return a result' });
  }

  // Submit the form data to Formspree
  try {
    await axios({
      method: 'POST',
      url: formspreeUrl,
      data: formData,
    });
    return res.status(200).json({ message: 'Form successfully submitted' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Formspree server error' });
  }
};
