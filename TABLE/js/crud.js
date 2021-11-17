function read(person, additional) {
    let temp = [...person]
    temp.map(obj => {
        let additionalData = additional.find(data => {
            return data.uid === obj.uid
        })
        for (let data in additionalData) {
            obj[data] = additionalData[data]
        }
    })

    return temp
}

function create(persons, object) {
    if (!Array.isArray(persons)) return `You must insert an array as first input`
    if (typeof object !== 'object') return `You must insert an object as second input`
    if (!object.hasOwnProperty('uid')) return `Your second input must has uid property`
    let checkPersons = persons.find(person => {
        return person.uid === object.uid
    })
    if (checkPersons) return `This person is already exists`
    
    persons.push(object)
    return object.uid
}

function update(persons, object) {
    if (!Array.isArray(persons)) return `You must insert an array as first input`
    if (typeof object !== 'object') return `You must insert an object as second input`
    if (!object.hasOwnProperty('uid')) return `Your second input must has uid property`
    let findPerson = persons.find(person => {
        return person.uid === object.uid
    })
    if (!findPerson) return `This person isn't exists`

    findPerson.firstName = object.firstName
    findPerson.lastName = object.lastName
    findPerson.position = object.position
    findPerson.city = object.city
    return object.uid
}

function remove(persons, uid) {
    if (!Array.isArray(persons)) return `You must insert an array as first input`
    let findIndex = null
    for (const index in persons) {
        if (persons[index].uid === uid) findIndex = index
    }
    if (!findIndex) return `This person isn't exists`
    
    persons.splice(findIndex, 1)
    return `The person with uid: ${uid} deleted successfully.`
}