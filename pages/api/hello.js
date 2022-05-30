export default function handler(req, res) {
  if (req.method === 'GET') {
    // Process a GET request
    res.status(200).json({ rose: {seoul: '테스트'}})
  } else {
    // Handle any other HTTP method
  }
}
