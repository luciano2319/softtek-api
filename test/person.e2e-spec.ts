import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from '../src/app.module';

describe('PersonController E2E Test', () => {
    let app: INestApplication;

    beforeAll(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();
    });

    describe('Create New Person POST /api/people', () => {
        it('should create a new person', () => {
            return request(app.getHttpServer())
                .post('people')
                .send({
                    name: "Luke Skywalker",
                    height: 172,
                    mass: 77,
                    hair_color: "blond",
                    skin_color: "fair",
                    eye_color: "blue",
                    birth_year: "19BBY",
                    gender: "male",
                    homeworld: 2
                })
                .expect(201);
        });
        it('should failed while trying to create a new person', () => {
            return request(app.getHttpServer())
                .post('people')
                .send({
                    name: "Luke Skywalker",
                    height: "172",
                })
                .expect(400);
        });
    });
    
});