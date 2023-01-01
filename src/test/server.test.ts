//import app from "../index";
import app from "../index";
import request from "supertest";

describe('API Test',()=>{
   it('return text string',(done)=>{
       request(app).get('/').expect('Content-Type',/text/).expect(200).end((error)=>{
           if(error) throw done(error);
           done();
       });
   });
});