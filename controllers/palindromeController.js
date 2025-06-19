const checkPalindrome = (req, res) => {
  const { word } = req.body;

  if (!word || typeof word !== 'string') {
    return res.status(400).json({
      success: false,
      error: 'Invalid input. Please provide a valid word.',
    });
  }

  const cleaned = word.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversed = cleaned.split('').reverse().join('');
  const isPalindrome = cleaned === reversed;

  res.json({
    isPalindrome,
  });
};

module.exports = {
  checkPalindrome,
};
