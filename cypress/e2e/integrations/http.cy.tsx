/// <reference types="cypress" />
// @ts-ignore

describe('Testing endpoints', () => {
    it('uses GET method', () => {

        cy.request({
            method: 'GET',
            url: 'https://localhost:3001/user-info'
        }).then((response : any) => {
            expect(response.body[0].id).to.equal(1);
        });
     });

    it('uses POST method', () => {

        cy.request({
            method: 'POST',
            url: 'https://localhost:3001/user-info',
            body: {
                'first_name' : 'Kadri',
                'last_name' : 'Saar',
                'gender' : 'female',
                'date_of_birth' : '11-07-2002',
                'city' : 'Jõhvi',
                'phone_nb' : '5116823',
                'religion' : 'not recorded',
                'age' : '20',
                'disability' : 'not recorded'
            },
            headers : {
                'content-type' : 'application/json'
            }
        }).then((response : any) => {
            expect(response.body.first_name).to.equal('Kadri');
        });
    });

    it('uses PUT method', () => {

        cy.request('PUT', 'https://localhost:3001/user-info/43',
            {
                'first_name' : 'Kadri',
                'last_name' : 'Saar',
                'gender' : 'female',
                'date_of_birth' : '11-07-2002',
                'city' : 'Tartu',
                'phone_nb' : '5116823',
                'religion' : 'not recorded',
                'age' : '20',
                'disability' : 'not recorded'
            })
            .then((response : any) => {
                expect(response.body.city).to.equal('Tartu');
            });
    });

     it('uses DELETE method', () => {

        cy.request('DELETE', 'https://localhost:3001/user-info/43')
            .then((response : any) => {
                expect(response.status).to.equal(200);
            })
     });
 });