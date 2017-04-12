let {mock} = require('mockjs')

let res = mock({
  "string|1-10": "★"
})

console.log(res)