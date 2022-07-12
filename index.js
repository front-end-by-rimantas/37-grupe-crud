// CRUD

import { UsersDatabase } from "./UsersDatabase.js";

console.clear();

const db = new UsersDatabase();

const [createErr1, createMsg1] = db.create({ email: 'a@a.a', pass: 'aaa' });
if (createErr1) {
    console.error(new Error(createMsg1));
}
console.log('createMsg1:', createMsg1);

const [createErr2, createMsg2] = db.create({ email: 'b@b.b', pass: 'bbb' });
if (createErr2) {
    console.error(new Error(createMsg2));
}
console.log('createMsg2:', createMsg2);

const [createErr3, createMsg3] = db.create({ email: 'c@c.c', pass: 'ccc' });
if (createErr3) {
    console.error(new Error(createMsg3));
}
console.log('createMsg3:', createMsg3);

// ############################################################

const [readErr1, readMsg1] = db.read(0);
if (readErr1) {
    console.error(new Error(readMsg1));
}
console.log('readMsg1:', readMsg1);

const [readErr9, readMsg9] = db.read(9);
if (readErr9) {
    // console.log('------------');
    // console.error(new Error(readMsg9));
    // console.log('------------');
}
console.log('readMsg9:', readMsg9);

const [updateErr1, updateMsg1] = db.update();
// if (updateErr1) {
//     console.error(new Error(updateMsg1));
// }
console.log('updateMsg1:', updateMsg1);

const [updateErr2, updateMsg2] = db.update(1, { email: 'bb@bb.bb' });
if (updateErr2) {
    console.error(new Error(updateMsg2));
}
console.log('updateMsg2:', updateMsg2);

const [updateErr3, updateMsg3] = db.update(2, { pass: 'cccccc' });
if (updateErr3) {
    console.error(new Error(updateMsg3));
}
console.log('updateMsg3:', updateMsg3);

const [updateErr4, updateMsg4] = db.update(0, { email: 'dd@dd.dd', pass: 'dddddd' });
if (updateErr4) {
    console.error(new Error(updateMsg4));
}
console.log('updateMsg4:', updateMsg4);

const [readAfterUpdateErr1, readAfterUpdateMsg1] = db.read(0);
if (readAfterUpdateErr1) {
    console.error(new Error(readAfterUpdateMsg1));
}
console.log('readUpdate1:', readAfterUpdateMsg1);

const [readAfterUpdateErr2, readAfterUpdateMsg2] = db.read(1);
if (readAfterUpdateErr2) {
    console.error(new Error(readAfterUpdateMsg2));
}
console.log('readUpdate2:', readAfterUpdateMsg2);

const [readAfterUpdateErr3, readAfterUpdateMsg3] = db.read(2);
if (readAfterUpdateErr3) {
    console.error(new Error(readAfterUpdateMsg3));
}
console.log('readUpdate3:', readAfterUpdateMsg3);

// ##################################################

const [deleteErr1, deleteMsg1] = db.delete(0);
if (deleteErr1) {
    console.error(new Error(deleteMsg1));
}
console.log('delete1:', deleteMsg1);

const [readAfterDeleteErr1, readAfterDeleteMsg1] = db.read(0);
if (readAfterDeleteErr1) {
    console.error(new Error(readAfterDeleteMsg1));
}
console.log('readDelete1:', readAfterDeleteMsg1);

console.log(db.list);