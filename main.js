let tweetArea = document.getElementById("textArea")
let maxLetter = 140;
let tweetList = []

let countClick = 0;
const countLetter = () =>{
    console.log("limit char: ")
    
    //1. get the length of sentence you typed in textarea
    let lengthSentence = tweetArea.value.length
    console.log("length is: ", lengthSentence)
    //2. maxLetter - length
    let remain = maxLetter - lengthSentence
    //3. show the remain number of char
    if(remain <0){
        document.getElementById("remain").innerHTML = `${remain} left`
        document.getElementById("remain").style.color = 'red'
        // disalowText == true
    }
    else{
        document.getElementById("remain").innerHTML = `${remain} left`
        document.getElementById("remain").style.color = 'black'
    }
}

const post = () =>{
  let tweet = {
    contents: document.getElementById('textArea').value,
    isDone: false
  }
  tweetList.unshift(tweet)
  updateList(tweetList)
}

const updateList = ()=>{
  let html ="";
    for(i = 0; i< tweetList.length; i++){
        html += `<li id="${i}"> ${tweetList[i].contents} 
         <a href='#' onclick='remove(${i})'>Del</a> 
        <a href='#'  id="likeOrNot${i}" onclick='toggle(${i})'><i class="fa fa-heart"></i></a> </li>\n`;
    }
    document.getElementById('tweetArea').innerHTML = html
}
const reTweet =() =>{
  
  //1.get original tweet (the tweet u clicked)
  //2.copy that tweet
  //3.add to tweet list
}

let remove = (i) =>{
   
  tweetList.splice(i,1)
  updateList()
}


toggle = (i) =>{

  tweetList[i].isDone = !(tweetList[i].isDone)

  if(tweetList[i].isDone){
    
      document.getElementById(`likeOrNot${i}`).innerHTML = `<i class="fa fa-heart"></i>`
      document.getElementById(`likeOrNot${i}`).style.color = `red`
      
  }
  else{

      document.getElementById(`likeOrNot${i}`).innerHTML = `<i class="fa fa-heart"></i>`
      document.getElementById(`likeOrNot${i}`).style.color = `black`
      
  }
}



tweetArea.addEventListener("input",countLetter)


