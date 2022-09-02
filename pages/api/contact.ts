// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
require('dotenv').config()
type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    let nodemailer = require('nodemailer');
    const password = process.env.PASSWORD;
    const email = process.env.EMAIL;
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
          user: email,
          pass: password
        },
        secure: true,
      })
      const mailData = {
        from: req.body.email,
        to: email,
        subject: `Message From ${req.body.name}`,
        text: req.body.message,
        html: `<div>${req.body.message}</div>`
       }
       transporter.sendMail(mailData, function (err:any, info:any) {
        if(err)
          console.log(err)
        else
          console.log(info)
      })
    console.log("contact api ", req.body)
  res.status(200).json({ name: 'John Doe' })
}
