const { db } = require('../firebase');
const client = require('../twilio');

exports.CreateNewAccessCode = async (req, res) => {
  try {
    const { phoneNumber } = req.body;
    const randomCode = Math.floor(100000 + Math.random() * 900000);

    const data = {
      phoneNumber,
      code: randomCode,
      createdAt: new Date().toISOString(),
    };

    // await db.collection('phoneNumber').add(data);
    const phoneRef = db.collection('phoneNumber');

    const queryRef = phoneRef.where('phoneNumber', '==', phoneNumber);

    const querySnapshot = await queryRef.get();

    if (!querySnapshot.empty) {
      querySnapshot.forEach((doc) => {
        doc.ref.update({
          code: randomCode,
          createdAt: new Date().toISOString(),
        });
      });
    } else {
      await db.collection('phoneNumber').add(data);
    }

    // const message = await client.messages.create({
    //   body: `This is your access code: ${randomCode}`,
    //   messagingServiceSid: 'MG40ec46c892f3b0b5efa248c11639291c',
    //   to: phoneNumber,
    // });

    // console.log(message.body);

    res.status(200).json({
      code: randomCode,
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: error,
    });
  }
};

exports.ValidateAccessCode = async (req, res) => {
  try {
    const { phoneNumber, accessCode } = req.body;

    const phoneRef = db.collection('phoneNumber');

    const queryRef = phoneRef
      .where('phoneNumber', '==', phoneNumber)
      .where('code', '==', parseInt(accessCode));

    const querySnapshot = await queryRef.get();

    if (!querySnapshot.empty) {
      res.status(200).json({
        success: true,
      });

      querySnapshot.forEach((doc) => {
        doc.ref.update({
          code: '',
          createdAt: new Date().toISOString(),
        });
      });
    } else {
      res.status(400).json({
        success: false,
      });
    }
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: error,
    });
  }
};
