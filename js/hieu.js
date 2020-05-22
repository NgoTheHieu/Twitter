let tweetArea = document.getElementById("tweetArea")
let MAX_LETTER = 140
let remainingLength;
let tweetList = [];
let num = 0;
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
    // Press tweet and the tweet will pop up in the box
    let tweet = {
        //userName: document.getElementById("usernameInput").value,
        id: num,
        contents: document.getElementById("input").value,
        isRetweet: false,
        parents: null,
      };
      if(tweet.contents == ""){
          alert("Invalid Input")
      } else if(tweet.contents != ""){
        num++
        tweetList.unshift(tweet);
          console.log(tweet);
       updateList();
      resetText();
      }
      
}

const updateList = () => {
    let html ="";
    for(i = 0; i< tweetList.length; i++){
        html += `<div class="border rounded border-info m-5 ">

        <div class="media">
            <div class="m-3"><img src="https://www.whitehouse.gov/wp-content/uploads/2017/11/President-Trump-Official-Portrait-1024x1297.jpg" width="75px" class="mr-3" alt="..."></div>
            <div class="media-body m-3">
              <h5 class="mt-0">@TheRealDonaldTrump</h5>
              ${tweetList[i].contents}
            </div>
                
                
          </div>
          <div class="">
            
              <div class=" ml-5 row spaceB mb-5">
            <button type="button" class="btn" data-toggle="button" aria-pressed="false">
                Like
                </button>
            <button type="button" class="btn btn-info " onclick="comment()">Comment</button>
            <button type="button" class="btn " onclick="retweet()">Retweet</button>
            <button type="button" class="btn btn-info mr-5" onclick='deleteItem(${i})'>Delete</button>
            </div>
        </div>
    </div>
    <div id="commentBox${i}"></div>`;
    }
    document.getElementById('tweetBox').innerHTML = html
}
//[ ] Comment 
const comment = () => {
    var txt;
    var commentMessage = prompt("Enter your comment");
    for(i = 0; i< tweetList.length; i++){
        if(commentMessage == ""){
            alert("Invalid Input");
            updateList();
        } else{
            document.getElementById(`commentBox${i}`).innerHTML += `<div class="jumbotron">
            <div class="border rounded border-info mr-5 " style="margin-left:200px;">
        
                <div class="media">
                    <div class="m-3"><img src="https://www.whitehouse.gov/wp-content/uploads/2017/11/President-Trump-Official-Portrait-1024x1297.jpg" width="75px" class="mr-3" alt="..."></div>
                    <div class="media-body m-3">
                      <h5 class="mt-0">@TheRealDonaldTrump</h5>
                      ${commentMessage}
                    </div>
                        
                        
                  </div>
                  <div class="">
                    
                      <div class=" ml-5 row spaceB mb-5">
                    <button type="button" class="btn" data-toggle="button" aria-pressed="false">
                        Like
                        </button>
                    <button type="button" class="btn btn-info mr-5" onclick='deleteItem(${i})'>Delete</button>
                    </div>
                </div>
            </div>
        </div>`
    }
    
    }
   
    
    
}
//[ ] Upon tweeting, the characters remaining text should reset back to 140, and the field should be cleared.
const resetText = () =>{
    document.getElementById("input").value = null
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
    };
    // original.children.push(num) this is for parents reference
    original.isRetweet = true;
    //3. add to tweet list
    tweetList.push(retweetObj);
    //4.render
    updateList();
}
const render = () => {
    document.getElementById("tweetBox").innerHTML += `<div class="border border-info ml-5 mr-5 ">

    <div class="media">
        <div class="m-3"><img src="https://www.whitehouse.gov/wp-content/uploads/2017/11/President-Trump-Official-Portrait-1024x1297.jpg" width="75px" class="mr-3" alt="..."></div>
        <div class="media-body m-3">
          <h5 class="mt-0">Media heading</h5>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </div>
            
            
      </div>
      <div class="">
        
          <div class=" ml-5 row spaceB mb-5">
        <button type="button" class="btn" data-toggle="button" aria-pressed="false">
            Like
            </button>
        <button type="button" class="btn btn-info ">Delete</button>
        </div>
    </div> s
</div>`
}

const deleteItem = (i) =>{
    tweetList.splice(i,1)
    updateList()
}
/*[ ] Users can mention other users. Any string that starts with @username will be highlighted in blue.
[ ] The user can click on a hashtag, and only other tweets with that hashtag are shown.
[ ] When the user deletes a tweet, all retweets should be deleted.
[ ] Any tweet with an image URL will have the image automatically expanded in the tweet.*/
document.getElementById("tweetButton").addEventListener("click",pressTweet)
document.getElementById("retweet").addEventListener("click",retweet)
//document.getElementById("deleteButton").addEventListener("click",delete)
tweetArea.addEventListener("input", countLetter);