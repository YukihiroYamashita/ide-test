import fs from 'fs'

export default function handler (req, res) {
  console.log('aqui')
  fs.writeFileSync('./pages/test.js', req.body, () => {})

  return res.status(200)
}