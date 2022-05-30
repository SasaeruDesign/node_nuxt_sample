/**
 * テスト関連-----------------------------------------------------------------------
 */
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// 通知テスト
router.post("/", function (req, res) {
    console.log(req.body.request_data)
    res.send({
        message: "Expressサーバからデータを受信しました",
    });
});

module.exports = router;