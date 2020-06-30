var helloworldtext = document.getElementById("helloworldtext");

function toggleTextCursor()
{
  if (helloworldtext.style.color == "white")
  {
    helloworldtext.style.color = "black";
  }
  else
  {
    helloworldtext.style.color = "white";
  }
}

setInterval(toggleTextCursor, 500);
