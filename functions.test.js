
const functions = require('./functions')

test('sum equals',()=>{
    expect(functions.sum(4,5)).toBe(9)
})

test('check for null', ()=>{
    expect(functions.nullvalue()).toBeNull()
})
test('for falsy',()=>{
    expect(functions.checkvalue(0)).toBeFalsy();
})

test('check for objects and refernce datatypoes',()=>{
    expect(functions.createUser()).toEqual({name:'Atharva',surname:'Gadkari'})
})


// check for I in strign
test('check for regex', ()=>{
    expect('teamI').toMatch(/I/)
})

test('check in array',()=>{
    const arr = ["heeloo", "depart", "admin"];
    expect(arr).toContain("admin")

})

// API TESTING.

test('test the API rsponse', async()=>{
  expect.assertions(1)
    const user = await functions.fetchUser()
   expect(user).toEqual("Leanne Graham")
})