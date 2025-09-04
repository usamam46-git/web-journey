function createCard() {
    //    let ouput=document.getElementById("output");
    let title = document.getElementById("title").value;
    let channelName = document.getElementById("channel").value;
    let views = +document.getElementById("views").value;
    let months = document.getElementById("months").value;
    let duration = document.getElementById("duration").value;
    views = views > 1000000 ? (views / 1000000).toFixed(1) + "M views" : views > 1000 ? (views / 1000).toFixed(1) + "K views" : views + " views";

    let html = `
     <div class="card">
            <div class="img">
                <img src="https://i.ytimg.com/vi/9JaDBYPmiJ0/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLDUUhJPpVHG3CuE1RjKX3Z3q4gF2Q"
                    alt="">
                <div class="duration">${duration}</div>
            </div>
            <div class="content">
                <div class="head">
                   ${title}
                </div>
                <div class="channel">
                    ${channelName}
                </div>
                <div class="duration">
                    ${views} . ${months}
                </div>
            </div>
        </div>`;

    document.querySelector(".container").innerHTML += html;


}