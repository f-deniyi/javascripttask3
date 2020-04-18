function yuGiOh(num) {
  var i;
  var arr = [];
  var data;
  for (i = 1; i <= num; i++) {
    if (i % 2 == 0) {
      data = 'yu';
      if (i % 3 == 0) {
        data = 'yu-gi';
      }
      if (i % 5 == 0) {
        data = 'yu-oh'
      }
      if ((i % 3 == 0) && (i % 5 == 0)) {
        data = 'yu-gi-oh';
      }
    }
   else if (i % 3 == 0) {
      data = 'gi';
      if (i % 5 == 0) {
        data = 'gi-oh';
      }
    }
    else if (i % 5 == 0) {
      data = 'oh';
    }
    else {
      data = i;
    }
    arr.push(data);
  }
  console.log(arr);
}
yuGiOh(100);
yuGiOh(60);