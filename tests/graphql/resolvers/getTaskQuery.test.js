const request = require('supertest')
const { expect } = require('chai')
const sinon = require('sinon')

const auth = require('../../authSetup')
const resolvers = require('../../../graphql/resolvers')
const taskService = require('../../../services/taskService')
const app = require('../../../graphql/app')

describe('Query.task', () => {

    it('**Mock** should call taskService.getTask and return the result', async () => {
        const task = [{ id: 9999, title: '**Mocked Task**' }]
        const taskServiceMock = sinon.stub(taskService, 'getTasks')
        taskServiceMock.returns(task)

        const response = await request(app)
            .post('/graphql')
            .set('Authorization', `Bearer ${auth.getToken()}`)
            .send({
                query: `query Tasks {
                                    tasks {
                                        id
                                        title
                                    }
                                }`
            })
        expect(response.status).to.equal(200)
        expect(response.body.data.tasks).to.deep.equal(task)
        
        sinon.restore()
    });
});