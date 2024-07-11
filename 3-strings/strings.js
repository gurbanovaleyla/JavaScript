'hello'
alert('hello')

//Concenation (combining strings together)
'some' + 'text'
'sometext'
'some' + 'more' + 'text'
'somemoretext'

//Type Coercion (Automatic Type Conversion)
typeof 2
'number'
typeof 'hello'
'string'
'hello' + 3
'hello3'

//not correct
'$28.94'
'$28.94'
'$' + 20.95 + 7.99
'$20.957.99'
'$20.95' + 7.99
'$20.957.99'
'$' + (20.95+7.99)
'$28.939999999999998'

//correct
'$' +(2095+799)/100
'$28.94'

'Items (' + (1 + 1) + '): $' + (2095+799)/100
'Items (2): $28.94'

alert('Items (' + (1 + 1) + '): $' + (2095+799)/100)

//types of string
"hello"
"I'm learning JavaScript"
"I\'m learning JavaScript"
'hello'

//new line
alert('some\ntext')

`Items (${1+1}):$${(2095+799)/100}`
'Items (2):$28.94'

`some
text`
'some\ntext'
