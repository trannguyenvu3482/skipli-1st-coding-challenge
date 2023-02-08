const { db } = require('../firebase');
const client = require('../twilio');

// Create a new access code
exports.CreateNewAccessCode = async (req, res) => {
  try {
    // Get phone number from request body
    const { phoneNumber } = req.body;

    // Generate a random 6 digit access code
    const randomCode = Math.floor(100000 + Math.random() * 900000);

    // Create a new object with the phone number and access code
    const data = {
      phoneNumber,
      code: randomCode,
      createdAt: new Date().toISOString(),
    };

    // Check if the phone number exists in the database
    const phoneRef = db.collection('phoneNumber');

    const queryRef = phoneRef.where('phoneNumber', '==', phoneNumber);

    const querySnapshot = await queryRef.get();

    // If the phone number exists, update the access code and creation date
    if (!querySnapshot.empty) {
      querySnapshot.forEach((doc) => {
        doc.ref.update({
          code: randomCode,
          createdAt: new Date().toISOString(),
        });
      });
    } else {
      // If the phone number does not exist, create a new document in the database
      await db.collection('phoneNumber').add(data);
    }

    // Send the access code to the phone number
    const message = await client.messages.create({
      body: `This is your access code: ${randomCode}`,
      messagingServiceSid: 'MG40ec46c892f3b0b5efa248c11639291c',
      to: phoneNumber,
    });

    // Send the access code to the client
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

// Validate access code
exports.ValidateAccessCode = async (req, res) => {
  try {
    // Get phone number and access code from request body
    const { phoneNumber, accessCode } = req.body;

    // Get the phone number from the database
    const phoneRef = db.collection('phoneNumber');

    const queryRef = phoneRef
      .where('phoneNumber', '==', phoneNumber)
      .where('code', '==', parseInt(accessCode));

    const querySnapshot = await queryRef.get();

    // Check if the phone number exists in the database, and if the access code matches
    if (!querySnapshot.empty) {
      res.status(200).json({
        success: true,
      });

      // Set the access code to an empty string after it has been used
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
