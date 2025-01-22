const youtube = {
  ID: "nick",
  subscribeChannel: [],
  likeChannel: [],

  subscribe: function (a) {
    this.subscribeChannel.push(a);
    console.log(this.subscribeChannel);
    console.log(`현재 구독채널 개수는 ${this.subscribeChannel.length}`);
  },
  like: function (b) {
    this.likeChannelChannel.push(b);
  },
};

youtube.subscribe("바보");
youtube.subscribe("똥개");
youtube.subscribe("멍청이");
