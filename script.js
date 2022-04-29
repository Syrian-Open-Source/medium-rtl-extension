{
  const title =decodeURI(location.href);
  const regex =  /[\u0600-\u06FF]/;

  if(regex.test(title)){
    document.dir = "rtl";
  }
}