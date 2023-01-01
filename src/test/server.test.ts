import request from "supertest";
import app from "../index";

afterAll(async () => {
	await new Promise<void>(resolve => setTimeout(() => resolve(), 500)); 
});

describe('App Request', () => {
    test('should responds with 200', async () => {
        await request(app)
            .get('/')
            .expect(200);
    });
});
