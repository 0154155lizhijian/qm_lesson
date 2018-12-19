function* listPeople(){
    let i = 0;
    console.log(i)
    yield i;
    i++;console.log(i)
    yield i;
    i++;console.log(i)
    yield i;
    console.log(i)
}
const people = listPeople();
while (!people.next().done) {
    people.next()
}