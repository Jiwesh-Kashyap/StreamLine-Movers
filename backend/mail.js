const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
    host: 'smtp.sendgrid.net',
    port: 587,
    auth: {
        user: 'apikey',
        pass: process.env.SENDGRID_API_KEY
    }
});

/**
 * Sends a quote request email to the admin/business owner
 * @param {Object} data - The form data from the frontend
 * @returns {Promise}
 */
const sendQuoteEmail = async (data) => {
    const { moveSize, movingFrom, movingTo, moveDate, urgency, fullName, phone, email } = data;

    const mailOptions = {
        from: process.env.FROM_EMAIL, // Your verified sender identity
        to: process.env.TO_EMAIL,   // Where you want to receive the leads
        cc: process.env.FROM_EMAIL,
        subject: `New Quote Request: ${fullName} - ${moveSize}`,
        html: `
            <h2>New Quote Request Received</h2>
            <p><strong>Urgency:</strong> ${urgency.toUpperCase()}</p>
            
            <h3>Customer Details</h3>
            <ul>
                <li><strong>Name:</strong> ${fullName}</li>
                <li><strong>Phone:</strong> ${phone}</li>
                <li><strong>Email:</strong> ${email}</li>
            </ul>

            <h3>Move Details</h3>
            <ul>
                <li><strong>Size:</strong> ${moveSize}</li>
                <li><strong>From:</strong> ${movingFrom}</li>
                <li><strong>To:</strong> ${movingTo}</li>
                <li><strong>Date:</strong> ${moveDate}</li>
            </ul>
        `
    };
    const mailOptions2 = {
        from: process.env.FROM_EMAIL,
        to: data.email,
        subject: "Confirmation email",
        cc: [process.env.TO_EMAIL, process.env.FROM_EMAIL],
        html:
            `<h3>Your details have been successfully sent to our team.</h3>
            <h4>
                <ul>
                    <li>Our specialist will call you within 2 hours.</li>
                    <li>Pricing and other details will be discussed there.</li>
                </ul>
            </h4>
            <h3>Thank you for choosing StreamLine Movers\n
            Regards,\n
            Team StreamLine Movers
            </h3>`
    }
    try {
        // Send both emails in parallel
        const [adminEmail, customerEmail] = await Promise.all([
            transporter.sendMail(mailOptions),
            transporter.sendMail(mailOptions2)
        ]);

        console.log('Admin notification sent successfully');
        console.log('Customer confirmation sent successfully');

        return { adminEmail, customerEmail };
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
};

module.exports = { sendQuoteEmail };