{
  const regex =  /[\u0600-\u06FF]/;
  const observable = new MutationObserver(e =>   changeDir());
  observable.observe(document.querySelector('title'),{childList: true});

  changeDir();

function changeDir(){
  if(regex.test(document.querySelector('title').innerHTML)){
    document.dir = "rtl";
  }else{
    document.dir = "ltr";
  }
}
}