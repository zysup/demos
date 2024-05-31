if (Math.random() > 0.5) {
  import("./1.js").then(({ aaa, bbb }) => {
    console.log(aaa, bbb);
  });
} else {
  console.log("qwe ");
}

// console.log(import.meta)
// let resolve = import.meta.resolve('./1.js')
// console.log('resolve', resolve)
