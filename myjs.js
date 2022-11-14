$(document).ready(function(){
    //Скрыть PopUp при загрузке страницы    
    PopUpHide();
});

//Функция отображения PopUp
function PopUpShow(){
    let stateObj = {
        index: "bar",
    }
    console.log("hi");
    history.pushState(null, 'page 2', 'bar.html');
    console.log("hi2");
    $("#popup1").show();
}

window.addEventListener('popstate', function(){
     PopUpHide();
})

// let b = document.getElementById("b1");
// if(b) {
//     b.addEventListener("click", function(){
//         let stateObj = {
//             index: "bar",
//         }
//         console.log("hi");
//         history.pushState(null, 'page 2', 'bar.html');
//         window.addEventListener('popstate', function(){
//             PopUpShow();
//         })
//     });
// }

// b.addEventListener('click', () => {
//     window.history.pushState(
//       {},
//       'form',
//       'form.html'
//     )
//     PopUpShow()
//   })

//Функция скрытия PopUp
function PopUpHide(){
    $("#popup1").hide();
}

saveButton.addEventListener('click', function () {
    window.localStorage.setItem('value', area.value);
    window.localStorage.setItem('timestamp', (new Date()).getTime());
   }, false);
   textarea.value = window.localStorage.getItem('value');

formcarry({
    form: "pSaR66un7",
    // id or the class name of the form element, only form element allowed
    // works with css selectors
    // # <= for id
    // . <= for class
    element: "#my-formcarry",
    extraData: {
      // add whatever you want
      screenSize: window.screen.width + " " +window.screen.height,
      language: window.navigator.language,
    },
    // Success callback, you can show alert messages
    // or redirect the user in this function
    onSuccess: function(response){
      alert(Данные успешно отправлены!)
    },
    // Error callback, a good place to show errors 🗿
    onError: function(error){
      alert(Поверьте данные еще раз, найдена ошибка!)
    }
  });
