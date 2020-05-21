let tweetArea = document.getElementById("tweetArea")
let MAX_TEXT = 140
let remainingLength;
const countLetter = () => {
    console.log("here");
    //1.Get length of the sentence you want to 
    let sentenceLength = document.getElementById("tweetArea").value.length
    console.log(sentenceLength);
    let remainingLength = MAX_TEXT - sentenceLength
    document.getElementById("remainingLetter").innerHTML = remainingLength
    //3.Show the remaining of the characters
    if(remainingLength <10 && remainingLength>0){
        document.getElementById("remainingArea").innerHTML = remainingLength
    } else if(remainingLength <0){
        document.getElementById("remainingArea").innerHTML = remainingLength
    }
}
const pressTweet = () =>{
    // Press tweet and the tweet will pop up in the box
    document.getElementById("tweetBox").innerHTML += `<div class="media">
    <img src="..." class="mr-3" alt="...">
    <div class="media-body">
      <h5 class="mt-0">Media heading</h5>
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
    </div>
  </div>`
    resetText();
}

//[ ] Upon tweeting, the characters remaining text should reset back to 140, and the field should be cleared.
const resetText = () =>{
    document.getElementById("remainingArea").innerHTML = MAX_TEXT
    document.getElementById("tweetArea").value = " "
    console.log(tweetArea);
}

//[ ] The application should disallow text of greater than 140 characters.
const disallowText = () =>{
    if(remainingLength<= 0){
        return false
    }
}


//[ ] The user should be able to "Retweet". Clicking Retweet immediately inserts a copy of that tweet below the original tweet.
const retweet = () => {
    document.getElementById("tweetBox")
}

const loadPage = () => {
    countLetter()
}
document.getElementById("tweetButton").addEventListener("click",pressTweet)
document.getElementById("retweet").addEventListener("click",retweet)