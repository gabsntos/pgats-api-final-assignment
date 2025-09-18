const request = require('supertest')
const { expect } = require('chai')

const auth = require('../../authSetup')

describe('noteExternal', () => {

    describe('GET /note', () => {

        it.only('Should return a note alongside with its id', async () => {
            const response = await request('http://localhost:4000')
                .post('/graphql')
                .set('Authorization', `Bearer ${auth.getToken()}`)
                .send({
                    query: `query Notes {
                                notes {
                                    id
                                    content
                                }
                            }`
                })
            expect(response.status).to.equal(200)
            expect(response.body.data.notes[0]).to.have.property('id', 1)
        })
    })
})