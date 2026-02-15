
import express from 'express';

const router = express.Router();

//Admin Login Route

router.post('/login', (req, res) => {

    const { email, password } = req.body;
   

    if (email === 'admin@gmail.com' && password === '1234') {
        return res.json({ success: true, message: 'Login successful' });
    } else {
        return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
})

export default router;