const { app, phrase } = require("../app");
const request = require("supertest");
const { describe, it, expect } = require('@jest/globals');

describe("phrase", () =>{
    it('should retrieve a sentence', () => {
        expect(phrase.length).toBeGreaterThan(0);
    });

    it("should return a 27 characters string", () => {
        expect(phrase.length).toEqual(27);
    })
});

describe('GET /', () => {
    it("should return Bienvenue à l'univers TEST!", async () => {
      const res = await request(app).get('/');
      expect(res.statusCode).toBe(200);
      expect(res.text).toBe("Bienvenue à l'univers TEST!");
    });
    
  });