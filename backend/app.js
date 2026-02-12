require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { sendQuoteEmail } = require('./mail');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
    origin: ['http://localhost:3000', 'http://127.0.0.1:3000'],
    credentials: true
}));
app.use(express.json());

// Request logging middleware
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
    next();
});

// Routes
app.post('/api/quote', async (req, res) => {
    try {
        const formData = req.body;
        console.log('Received quote request:', formData);

        // Send email
        await sendQuoteEmail(formData);

        res.status(200).json({ message: 'Quote request received and email sent successfully!' });
    } catch (error) {
        console.error('Error processing quote:', error);
        res.status(500).json({ message: 'Failed to process quote request.' });
    }
});

app.get('/', (req, res) => {
    res.send('StreamLine Movers Backend is running!');
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});