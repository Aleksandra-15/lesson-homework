//?Події клавіатури
document.addEventListener("keydown", (e) => {
  console.log("keydown:", e);
  console.log("key:", e.key);
  console.log("code:", e.code);
});

document.addEventListener("keyup", (e) => {
  console.log("keyup:", e);
});

//клавіші модифікатори
document.addEventListener("keydown", (e) => {
  if ((e.ctrlKey || e.metaKey) && e.code === "KeyS") {
    console.log("ctrl + s or command + s" );
  }
});
