const user = prompt("아이디 입력");
user.length < 4 || user.length > 16
  ? alert("길이 바꿔")
  : !(
      user.includes("!") ||
      user.includes("@") ||
      user.includes("&") ||
      user.includes("#")
    )
  ? alert("특수문자 넣어라")
  : user.slice(-1) == user.slice(-1).toUpperCase()
  ? alert("완성")
  : alert("대문자 넣어라");
