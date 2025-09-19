const request = require('supertest')
const { expect } = require('chai')

const auth = require('../../authSetup')

describe('taskExternalRest', () => {

    describe('GET /tasks', () => {

        it('Should return 200 get tasks', async () => {
            const response = await request('http://localhost:3000')
                .get('/tasks')
                .set('Authorization', `Bearer ${auth.getToken()}`)

            expect(response.status).to.equal(200)
            expect(response.body[0]).to.have.property('id', 1)
            expect(response.body[0]).to.have.property('title', 'Buy groceries')
        })
    })
})