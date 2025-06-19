const calculateBMI = (req, res) => {
  const { height, weight } = req.body;

  // Input validation
  if (!height || !weight || isNaN(height) || isNaN(weight)) {
    return res.status(400).json({
      success: false,
      error: 'Height and weight must be valid numbers',
    });
  }

  const bmi = weight / (height * height);
  let status = '';

  // Determine status
  if (bmi < 18.5) {
    status = 'Underweight';
  } else if (bmi < 24.9) {
    status = 'Normal weight';
  } else if (bmi < 29.9) {
    status = 'Overweight';
  } else {
    status = 'Obese';
  }

  res.json({
    success: true,
    data: {
      BMI: bmi.toFixed(2),
      status,
    },
  });
};

module.exports = {
  calculateBMI,
};
