const request = require('supertest')
const { expect } = require('chai')

const auth = require('../../authSetup')

describe('deleteExternalGraphql', () => {

    describe('DELETE /note', () => {

        const requestBody = require('../fixture/request/shouldDeleteANote.json')

        it('Should delete a note', async () => {
            const response = await request('http://localhost:4000')
                .post('/graphql')
                .set('Authorization', `Bearer ${auth.getToken()}`)
                .send(requestBody)
            expect(response.body.data.deleteNote).to.have.property('error', 'Invalid note id.')
            expect(Object.keys(response.body.data.deleteNote).length).to.equal(3)
        })
    })
})