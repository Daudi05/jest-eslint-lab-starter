const { capitalizeWords, filterActiveUsers, logAction } = require('../index')
test('capitalize words', () => {
    expect(capitalizeWords("hello world")).toBe("Hello World")

    
    //expect(capitalizeWords("hello-world")).toBe("Hello-world")
    //expect(capitalizeWords("hello")).toBe("Hello")

  //  test.each([
  //      ["hello world", "Hello World"],
  //      ["", ""],
  //      ["hello-world", "Hello-world"],
  //      ["hello", "Hello"]
  //  ])((input, expected) => {expected(capitalizeWords(input)).toBe(expected)})
})
test('capitalize words', () => {
    expect(capitalizeWords("hello-world")).toBe("Hello-world")
})
test('capitalize words', () => {
    expect(capitalizeWords("hello")).toBe("Hello")
})
test('capitalize words', () => {
    expect(capitalizeWords("")).toBe("")
})
test('filter active users', () => {
    const users = [
        {name: "Alice", isActive: true},
        {name: "Bob", isActive: false}]
    const expected = [
        {name: "Alice", isActive: true}
    ]
    expect(filterActiveUsers(users).toBe(expected))
})
test('filter active users', () => {
    const users = [
        {name: "Alice", isActive: true},
        {name: "Bob", isActive: true}]
    const expected = [
        {name: "Alice", isActive: true},
         {name: "Bob", isActive: true}
    ]
    expect(filterActiveUsers(users).toBe(expected))
})
test('filter active users', ()=>{
    expect(filterActiveUsers([]).toBe([]))
})
test('action login', () => {
    const timestamp = new Date().toISOString()
    const action = "login"
    const user = "Alice"
    expect(logAction(action, user).toBe('User ' + user + ' performed ' +
         action + ' at ' + timestamp
    ))
})
test('action login', () => {
    const timestamp = new Date().toISOString()
    const action = "login"
    const user = "Alice"
    expect(logAction(user).toBe("missing action or username"
    ))
})
test('action login', () => {
    const timestamp = new Date().toISOString()
    const action = ""
    const user = ""
    expect(logAction(action, user).toBe("You cannot enter an empty string as input"
    ))
})