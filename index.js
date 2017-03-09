function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  const lis = document.querySelectorAll('.ranked-list li')
  for (let i = 0, l = lis.length; i<l; i++) {
    lis[i].innerHTML = (parseInt(lis[i].innerHTML, 10) + n).toString();
  }
}

function deepestChild(){
  let query = document.querySelector('#grand-node');
  let child = query.children[0];
  while (child) {
    query = child;
    child = query.children[0];
    }
  return query;
}
