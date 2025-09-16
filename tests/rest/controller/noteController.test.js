const request = require('supertest')
const { expect } = require('chai')
const sinon = require('sinon')

const auth = require('../../authSetup')
const app = require('../../../app')
const noteService = require('../../../services/noteService')


describe('noteController', () => {

    const requestBody = require('../fixture/request/requestShouldCreateANote.json')

    describe('GET /notes', () => {

        it('Should return 200 get notes with correct response body verification', async () => {
            const response = await request(app)
                .get('/notes')
                .set('Authorization', `Bearer ${auth.getToken()}`)
            expect(response.status).to.equal(200)

            const expectedResponse = require('../fixture/response/getNoteResponse.json')
            expect(response.body).to.eql(expectedResponse)
        })
    })

    describe('POST /notes', () => {

        it('Should create a note', async () => {
            const response = await request(app)
                .post('/notes')
                .set('Authorization', `Bearer ${auth.getToken()}`)
                .send(requestBody[0])
            expect(response.status).to.equal(201)
            expect(response.body).to.have.property('id')
        })

        it('Should return 400 note duplication error', async () => {
            const response = await request(app)
                .post('/notes')
                .set('Authorization', `Bearer ${auth.getToken()}`)
                .send(requestBody[1])
            expect(response.status).to.equal(400)
            expect(response.body).to.have.property('error', 'Duplicate note content.')
        })

        it('**Mock** Should return 400 note content must not be empty', async () => {

            const noteServiceMock = sinon.stub(noteService, 'addNote')
            noteServiceMock.throws(new Error('Note content must be a non-empty string.'))

            const response = await request(app)
                .post('/notes')
                .set('Authorization', `Bearer ${auth.getToken()}`)
                .send(requestBody[2])
            expect(response.status).to.equal(400)
            expect(response.body).to.have.property('error', 'Note content must be a non-empty string.')
        })
    })

    describe('DELETE /notes', () => {

        it('Should DELETE a note', async () => {
            const response = await request(app)
                .delete('/notes/1')
                .set('Authorization', `Bearer ${auth.getToken()}`)

            expect(response.status).to.equal(200)
            expect(response.body).to.have.property('message', 'Note deleted.')
        })
    })

    afterEach(() => {
        sinon.restore()
    })
})
