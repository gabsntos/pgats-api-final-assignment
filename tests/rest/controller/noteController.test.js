const request = require('supertest')
const { expect } = require('chai')

const app = require('../../../app')

describe('noteController', () => {

    describe('POST /login', () => {

        it('Should successfully log in ', async () => {
            const response = await request(app)
                .post('/login')
                .send({
                    "username": "admin",
                    "password": "password"
                })
            token = response.body.token
            expect(response.status).to.equal(200)
        })
    })
})
