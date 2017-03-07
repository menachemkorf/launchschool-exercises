var i = 0;
while (i < 10) {
  if (i % 3 === 0) {
    console.log(i); // 0 infinite loop
  } else {
    i += 1;
  }
}