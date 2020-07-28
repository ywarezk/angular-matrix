/**
 * what is isomorphic code
 */



if (typeof document === 'undefined') {
  console.log('node does not have a document');
} else {
  document.getElementById('button').addEventListener('click', () => {
    console.log('hello world');
  });
}



