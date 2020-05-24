let tweetArea = document.getElementById("tweetArea")
let MAX_LETTER = 140
let remainingLength;
let tweetList = [];
let hashTagHTML = ``
let num = 0;
let username = "TheRealDonaldTrump"
let thisIsARetweet = "";
let tweetHashtag = []
let tweetUsername = []
let tweetJoin = tweetUsername.join(" ")
const userName = () => {
    username = document.getElementById("usernameBox").value
    resetText();
    return username;
}
const countLetter = () => {
    // 1. get the length of sentence you type into textarea 
  let lengthOfSentence = tweetArea.value.length;

  // 2. MAX_LETTER - the length
  let remain = MAX_LETTER - lengthOfSentence;
  // 3. show the remain number of char
  if (remain < 0) {
    document.getElementById("remain").innerHTML = `${remain} left`;
    document.getElementById("remain").style.color = "red";
  } else {
    document.getElementById("remain").innerHTML = `${remain} left`;
    document.getElementById("remain").style.color = "black";
  }
}
const pressTweet = () =>{
    console.log(num)
    // Press tweet and the tweet will pop up in the box
    let tweet = {
        //userName: document.getElementById("usernameInput").value,
        id: num,
        contents: document.getElementById("input").value,
        isRetweet: false,
        parents: null,
        hashtag: [],
        usernameTag: [],
        comment: ``,
      };
      
    // when username start with @ print blue
      
      tweetArray = tweet.contents.split(" ")
      for(i = 0; i< tweetArray.length; i++){
          if(tweetArray[i].startsWith("@") == true ){
            tweetUsername.push(tweetArray[i]);
            tweet.usernameTag.push(tweetArray[i]);
          };
          if(tweetArray[i].startsWith("#") == true ){
            tweetHashtag.push(tweetArray[i]);
            tweet.hashtag.push(tweetArray[i]);
            
          }
        }
    for(i=0;i<tweet.hashtag.length;i++){
        hashTagHTML += `<a href="#">${tweet.hashtag[i]}</a>`
    }
      if(tweet.contents == ""){
          alert("Invalid Input")
      } else if(tweet.contents != ""){
        num++
        tweetList.unshift(tweet);
          console.log(tweet);
       updateList(tweetList);
       tweetUsername = [];
       tweetHashtag = [];
      resetText();
      }
      
}

const updateList = (item) => {
    
    let html ="";
    for(i = 0; i< item.length; i++){
        html += `<div class="border rounded border-info m-5 ">

        <div class="media">
            <div class="m-3"><img src="https://www.whitehouse.gov/wp-content/uploads/2017/11/President-Trump-Official-Portrait-1024x1297.jpg" width="75px" class="mr-3" alt="..."></div>
            <div class="media-body m-3">
              <h5 class="mt-0">@${username}</h5>
              <div id="isRetweet">Is this a retweet : ${item[i].isRetweet}</div>
              <a href="#"onclick="updateHashTagList(${item[i].hashtag})" id="hashTagBox${i}">${item[i].hashtag}</a>
              <div id="usernameBox" style="color:blue;">${item[i].usernameTag}</div>${item[i].contents}
            </div>
                
                
          </div>
          <div class="">
            
              <div class=" ml-5 row spaceB mb-5">
            <button type="button" class="btn" data-toggle="button" aria-pressed="false">
                Like
                </button>
            <button type="button" class="btn btn-info " onclick="comment(${i})">Comment</button>
            <button type="button" class="btn " onclick="retweet(${tweetList[i].id})">Retweet</button>
            <button type="button" class="btn btn-info mr-5" onclick='deleteItem(${i})'>Delete</button>
            </div>
        </div>
    </div>
    <div id="commentBox${i}">${tweetList[i].comment}</div>
    
    <div id="retweetBox${i}"></div>`;
    }
    document.getElementById('tweetBox').innerHTML = html
    
    
    hashTagHTML = ``;
}
//[ ] Comment 
const comment = (item) => {
    var txt;
    var commentMessage = prompt("Enter your comment");
    for(i = 0; i< tweetList.length; i++){
        if(commentMessage == ""){
            alert("Invalid Input");
            updateList(tweetList);
        } else{

            tweetList[item].comment += `<div class="jumbotron">
            <div class="border rounded border-info mr-5 " style="margin-left:200px;">
        
                <div class="media">
                    <div class="m-3"><img src="https://www.whitehouse.gov/wp-content/uploads/2017/11/President-Trump-Official-Portrait-1024x1297.jpg" width="75px" class="mr-3" alt="..."></div>
                    <div class="media-body m-3">
                      <h5 class="mt-0">@TheRealDonaldTrump</h5>
                      <div class="usernameBox"></div>${commentMessage}
                    </div>
                        
                        
                  </div>
                  <div class="">
                    
                      <div class=" ml-5 row spaceB mb-5">
                    <button type="button" class="btn" data-toggle="button" aria-pressed="false">
                        Like
                        </button>
                    </div>
                </div>
            </div>
        </div>`
    }
    document.getElementById(`commentBox${i}`).innerHTML = tweetList[item].comment
    updateList();
    
    }
   
    
    
}
//[ ] Upon tweeting, the characters remaining text should reset back to 140, and the field should be cleared.
const resetText = () =>{
    document.getElementById("input").value = null
    document.getElementById("usernameBox").value = null
    console.log(tweetArea);
}
//[ ] The application should disallow text of greater than 140 characters.
const disallowText = () =>{
    if(remainingLength<= 0){
        return false
    }
}


//[ ] The user should be able to "Retweet". Clicking Retweet immediately inserts a copy of that tweet below the original tweet.
const retweet = (id) => {
    const original = tweetList.find((item) => item.id == id)


    //2. copy that tweet

    const retweetObj = {
        id: num,
        contents: original.contents,
        isRetweet: true,
        parents: original.id,
        usernameTag: original.usernameTag,
        hashtag: original.hashtag,
        comment: ``,
    };
    // original.children.push(num) this is for parents reference
    original.isRetweet = false;
    //3. add to tweet list
    tweetList.unshift(retweetObj);
    //4.render
    updateList(tweetList);
}

const deleteComment =  (i) =>{

}
const deleteItem = (i) =>{
    
    tweetList.splice(i,1)
    updateList(tweetList)
}
const loadPage = () =>{
    // Press tweet and the tweet will pop up in the box
    let tweet = {
        //userName: document.getElementById("usernameInput").value,
        id: num,
        contents: "North Korea's Kim has agreed to let North Koreans compete in NBA",
        isRetweet: false,
        parents: null,
        usernameTag: ["@TheRealKimJongUn"],
        hashtag: ["#MAGA","#KimJongUn"],
        comment: ``,
      };
      
        num++
        tweetList.unshift(tweet);
      updateList(tweetList);
     tweet = {
            //userName: document.getElementById("usernameInput").value,
            id: num,
            contents: "North Korea's Kim has agreed to let North Koreans compete in NBA",
            isRetweet: false,
            parents: null,
            usernameTag: ["@TheRealKimJongUn"],
            hashtag: ["#MAGA"],
            comment: ``,
          };
          num++
    tweetList.unshift(tweet);
        console.log(tweet);
        console.log(num)
       updateList(tweetList);
      resetText();
      
}

loadPage();
console.log(tweetList);
//Updating hashtag list
const updateHashtagList = (item) => {
    for(i=0;i<tweetList;i++){
        for(z=0;z<tweetList[i].hashtag;z++){
            if(tweetList[i].hashtag == item){
                tweetHashtag.push(tweetList[i])
            }
        }
    }
    updateList(tweetHashtag);
}
/*[ ] Users can mention other users. Any string that starts with @username will be highlighted in blue.
[ ] The user can click on a hashtag, and only other tweets with that hashtag are shown.
[ ] When the user deletes a tweet, all retweets should be deleted.
[ ] Any tweet with an image URL will have the image automatically expanded in the tweet.*/
document.getElementById("tweetButton").addEventListener("click",pressTweet)
document.getElementById("retweet").addEventListener("click",retweet)
document.getElementById("usernameButton").addEventListener("click",userName)
//document.getElementById("deleteButton").addEventListener("click",delete)
//tweetArea.addEventListener("input", countLetter);
