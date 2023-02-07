const { db } = require('../firebase');

exports.CreateNewAccessCode = async (req, res) => {
  try {
    const { phoneNumber } = req.body;
    const randomCode = Math.floor(100000 + Math.random() * 900000);

    const data = {
      phoneNumber,
      code: randomCode,
      hasVerified: false,
      createdAt: new Date().toISOString(),
    };

    await db.collection('phoneNumber').add(data);

    res.status(200).json({
      status: 'success',
      message: 'A code has been created successfully!',
      data: {
        code: randomCode,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: error,
    });
  }
};

exports.ValidateAccessCode = (req, res) => {
  console.log(req.query);

  res.status(200).json({
    status: 'success',
    message: 'The code is valid!',
  });
};
