import {sum} from "../sum"

test("Sum of 2 numbers is ", () => {
    const result = sum(2, 3)

    //Assertion
      
    expect(result).toBe(5)

})