const User = require('./User')
​
describe('User', () =>{
   const testUser = new User('King','James',1988,'kingjames@gmail.com')
   test('user has a first name ', () =>{
       expect(testUser.firstName).toBe('King')
   })
​
   test('user has a last name ', () =>{
    expect(testUser.lastName).toBe('James')
   })
​
   test('user has a email ', () =>{
    expect(testUser.email).toBe('kingjames@gmail.com')
   })
​
   test('user has a dob ', () =>{
    expect(testUser.dob).toStrictEqual(1988)
   })
   
})
​
