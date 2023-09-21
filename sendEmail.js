const nodemailer = require("nodemailer");

async function send_email (email) {
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: '',//your email
            pass: ''//password
        },
    });

    let message = `<body>
    <table width="100%" border="0" cellspacing="0" cellpadding="0">
        <tr>
            <td align="center" bgcolor="#f0f0f0" style="padding: 20px;">
                <table width="600" border="0" cellspacing="0" cellpadding="0" bgcolor="#ffffff" style="border-radius: 10px; box-shadow: 0px 0px 10px 0px #000;">
                    <tr>
                        <td align="center" bgcolor="#007BFF" style="border-top-left-radius: 10px; border-top-right-radius: 10px; padding: 20px;">
                            <h1 style="color: #fff; font-size: 24px; margin: 0;">Hello, I'm Smruti R Sahu</h1>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 20px;">
                            <p>Hay there,</p>
                            <p>I am Smruti R Sahu, a backend software developer with a passion for creating efficient and robust software solutions.</p>
                            <p>Here are some of my key qualifications and experiences:</p>
                            <ul>
                                <li>Proficient in backend development using technologies like Node.js, Python, and Java.</li>
                                <li>Experience in designing and optimizing databases, including SQL and NoSQL databases.</li>
                                <li>Strong problem-solving skills and a focus on delivering high-quality code.</li>
                                <li>Collaborative team player with excellent communication skills.</li>
                            </ul>
                            <p>If you are already exploring opportunities or have a project in mind that requires backend development expertise, feel free to reach out to me. I'd be happy to discuss how I can contribute to your success.</p>
                            <p>Thank you for your time, and I look forward to connecting with you!</p>
                            <p>Best regards,<br>Smruti R Sahu</p>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" bgcolor="#007BFF" style="border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; padding: 20px;">
                            <p style="color: #fff; font-size: 14px; margin: 0;">Copyright © 2023 Smruti R Sahu. All rights reserved.</p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>`; // plain text body

    let info;


    info = await transporter.sendMail({
        from: '', // sender address
        to: email , // list of receivers
        cc: admin_email,
        subject: 'My Intro', // Subject line
        html: message,
    });

}

module.exports = {send_email};