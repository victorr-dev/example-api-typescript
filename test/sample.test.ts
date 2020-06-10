import App from '../src/app'
import request from 'supertest'
import { Application } from 'express';

let app : Application; 

describe('Prueba', () => {

  beforeAll(()=>{
    app = new App().app;
  })
  it('test 1', async (done) => {
    const res = await request(app).get('/')

    expect(res.status).toBe(404)
    done()
  })
})