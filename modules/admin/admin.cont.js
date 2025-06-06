const { Admin } = require('../../db');

exports.findAdmin = async (req, res) => {
    try {
        console.log("get Admin3");
        const admin = await Admin.findAll();
        res.status(200).json({
            message: 'Admin found',
            data: admin
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};
