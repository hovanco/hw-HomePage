import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import bodyParser from 'body-parser';
import axios from 'axios';
import cookieParser from 'cookie-parser';
import {
    getPostsController,
    getPostController,
    homeController,
    facebookController,
    posController,
    websiteController,
    shopeeController,
    questionsController,
    priceController,
    contactController,
    teamOfUseController,
    introduceController,
    privacyPolicyController,
    errorPackageController,
    getPostsUserManualController,
    getPostUserManualController,
} from './controller';
import { authMiddleware } from './middlewares';

dotenv.config();
const app = express();

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    }),
);
app.use(cookieParser());

app.use(express.static(path.join(__dirname, '../public')));
app.use(authMiddleware);

const { PORT } = process.env;

// home page
app.get('/', homeController);

// kham pha
app.get('/kham-pha', getPostsController);
app.get('/kham-pha/:slug', getPostController);

// insa facebook
app.get('/insa-facebook', facebookController);

// insa pos
app.get('/insa-pos', posController);

// insa web
app.get('/insa-website', websiteController);

// insa shopee
app.get('/insa-shopee', shopeeController);

// insa questions
app.get('/cau-hoi-thuong-gap', questionsController);

// insa contact
app.get('/lien-he', contactController);
app.post('/lien-he', async (req, res) => {
    try {
        await axios({
            method: 'POST',
            url: process.env.INSA_GOOGLE_SHEET_API,
            data: JSON.stringify({ data: req.body }),
        });

        res.json({
            status: true,
        });
    } catch (error) {
        res.json({
            error,
        });
    }
});
app.post('/lien-he', async (req, res) => {
    try {
        await axios({
            method: 'POST',
            url: process.env.INSA_GOOGLE_SHEET_API,
            data: JSON.stringify({ data: req.body }),
        });

        res.json({
            status: true,
        });
    } catch (error) {
        res.json({
            error,
        });
    }
});

// price
app.get('/bao-gia', priceController);

// price
app.get('/thanh-toan', (req, res) => {
    res.render('pages/payment');
});

app.get('/gioi-thieu', introduceController);
app.get('/dieu-khoan-su-dung', teamOfUseController);
app.get('/chinh-sach-bao-mat', privacyPolicyController);
app.get('/huong-dan-su-dung', getPostsUserManualController);
app.get('/huong-dan-su-dung/:slug', getPostUserManualController);

// 404 packages
app.get('/error', errorPackageController);

app.listen(PORT, () => {
    console.log(`🚀 Server ready at http://localhost:${PORT}`);
});
