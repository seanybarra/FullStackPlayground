const handlers = require('../lib/handlers')

test('home page renders', () => {
    const req = {}
    const res = {render: jest.fn()}
    handlers.home(req,res)
    expect(res.render.mock.calls.length).toBe(1)
    expect(res.render.mock.calls[0][0]).toBe('home')
})

test('Section test page renders', () => {
    const req = {}
    const res = {render: jest.fn()}
    handlers.sectionTest(req,res)
    expect(res.render.mock.calls.length).toBe(1)
    expect(res.render.mock.calls[0][0]).toBe('section-test')
})

test('404 test page renders', () => {
    const req = {}
    const res = {render: jest.fn()}
    handlers.notFound(req,res)
    expect(res.render.mock.calls.length).toBe(1)
    expect(res.render.mock.calls[0][0]).toBe('404')
})