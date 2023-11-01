const chakram = require('chakram'), expect = chakram.expect;

describe("User test Cases", function () {

    it("TC0001/POST/v2/user/", function () {

        const userBody = {
            "id": 123,
            "username": "furkan123",
            "firstName": "furkan",
            "lastName": "yildirim",
            "email": "fy@test.com",
            "password": "123fy",
            "phone": "0100000",
            "userStatus": 1
        }
        const response = chakram.post("https://petstore.swagger.io/v2/user",userBody);
        expect(response).to.have.status(200);
        expect(response).to.comprise.of.json({ code: 200, type: 'unknown', message: "123" }); // Yanıtın JSON içeriğini kontrol etme
        return chakram.wait(2000);
    });


    it("TC0002/GET/v2/user/login", function () {

        const userlogin = {
            "username": "furkan123",
            "password": "123fy"
           
        }
        const response = chakram.get("https://petstore.swagger.io/v2/user/login",{qs:userlogin});
        expect(response).to.have.status(200);
        expect(response).to.have.header('content-type', 'application/json'); // Yanıtın header'ını kontrol etme
        return chakram.wait(2000);
    });

    it("TC0003/GET//v2/user/", function () {

        var username = "furkan123"    

        const response = chakram.get("https://petstore.swagger.io/v2/user/" + username);

       // console.log(response)

        expect(response).to.have.status(200);
        return chakram.wait(2000);

       /* 
       // bekleme durumunda wait kullanılmadan response alma
       return response.then(function (res) {
            // console.log(res);
             expect(res).to.have.status(200);
           });  
        */
          });

    it("TC0004/DELETE/v2/user/", function () {

        const userdelete = {
            "username": "furkan123"
           
        }
        const response = chakram.delete("https://petstore.swagger.io/v2/user/",{qs:userdelete});
        expect(response).to.have.status(200);
        expect(response).to.have.header('content-type', 'application/json'); // Yanıtın header'ını kontrol etme
        return chakram.wait(2000);
    });

    it("TC0005/POST/v2/user/createWithList", function () {

        const userList = {
            "id": 123,
            "username": "furkan123",
            "firstName": "furkan",
            "lastName": "yildirim",
            "email": "fy@test.com",
            "password": "123fy",
            "phone": "0100000",
            "userStatus": 1
        }
        const response = chakram.post("https://petstore.swagger.io/v2/user/",userList);
        expect(response).to.have.status(200);
        expect(response).to.have.header('content-type', 'application/json');
        return chakram.wait(2000);
    });


});