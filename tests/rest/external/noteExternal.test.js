const request = require('supertest')
const { expect } = require('chai')

const auth = require('../../authSetup')

describe('noteExternalRest', () => {

    const deleteNoteWithError = require('../fixture/request/deleteNoteWithError.json')

    describe('DELETE /notes', () => {

        deleteNoteWithError.forEach(test => {
            it(`${test.name}`, async () => {
                const response = await request('http://localhost:3000')
                    .delete(`/notes/${test.parameter}`)
                    .set('Authorization', `Bearer ${auth.getToken()}`)

                expect(response.status).to.equal(404)
                expect(response.body).to.have.property('error', test.expectedMessage)
            })
        })

    })
})
