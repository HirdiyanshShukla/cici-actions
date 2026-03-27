const request = require('supertest');
const app = require('./main');

describe('Calculator API', () => {
    describe('GET /add', () => {
        it('should add two numbers correctly', async () => {
            const res = await request(app).get('/add?a=5&b=3');
            expect(res.statusCode).toEqual(200);
            expect(res.body).toHaveProperty('result', 8);
        });

        it('should return 400 if a parameter is missing', async () => {
            const res = await request(app).get('/add?a=5');
            expect(res.statusCode).toEqual(400);
            expect(res.body).toHaveProperty('error');
        });

        it('should return 400 if parameters are invalid', async () => {
            const res = await request(app).get('/add?a=five&b=3');
            expect(res.statusCode).toEqual(400);
            expect(res.body).toHaveProperty('error');
        });
    });

    describe('GET /subtract', () => {
        it('should subtract two numbers correctly', async () => {
            const res = await request(app).get('/subtract?a=10&b=4');
            expect(res.statusCode).toEqual(200);
            expect(res.body).toHaveProperty('result', 6);
        });
    });

    describe('GET /multiply', () => {
        it('should multiply two numbers correctly', async () => {
            const res = await request(app).get('/multiply?a=6&b=7');
            expect(res.statusCode).toEqual(200);
            expect(res.body).toHaveProperty('result', 42);
        });
    });

    describe('GET /divide', () => {
        it('should divide two numbers correctly', async () => {
            const res = await request(app).get('/divide?a=20&b=4');
            expect(res.statusCode).toEqual(200);
            expect(res.body).toHaveProperty('result', 5);
        });

        it('should return 400 when dividing by zero', async () => {
            const res = await request(app).get('/divide?a=20&b=0');
            expect(res.statusCode).toEqual(400);
            expect(res.body).toHaveProperty('error');
        });
    });
});
