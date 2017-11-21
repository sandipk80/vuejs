<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <hr>

        <vudal name="vdplayer">
            <div class="header">
                Watch Channel {{channelId}}
            </div>
            <div class="content">
                <div id="myDiv">This text will be replaced with a player.</div>
            </div>
            <div class="actions">
                <div class="ui cancel button" v-on:click="closeModal">Close</div>
            </div>
        </vudal>
        
        <!--modal name="vdplayer">
            <div id="myDiv">This text will be replaced with a player.</div>
        </modal-->

        <div class="column is-12">
            <ul id="channels-list">
                <li v-for="channel in channels">
                    <button class="button is-primary" type="button" v-on:click="openVideoModal(channel.id,channel.url)">Watch Channel{{ channel.id }}</button>
                </li>
            </ul>
        </div>
 
    </div>
</template>

<script>
//var jwplayer = require('https://jwpsrv.com/library/XXzG4ndHEeS3EA6sC0aurw.js');

export default {
    name: 'WatchChannel',
    //components: {Vudal},
    data: () => ({
        url: '',
        msg:'Watch channel links',
        videoUrl: '',
        channelId: '',
        channels: [
            { id: '1', url: 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8' },
            { id: '2', url: 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8' }
        ]
    }),
    methods: {
        show () {
            this.$modal.show('');
        },
        hide () {
            this.$modal.hide('');
        },
        openVideoModal: function (id,url) {
            //alert(url);
            this.videoUrl = url;
            this.channelId = id;
            this.$modal.show('vdplayer');
            //this.$modals.vdplayer.$show()
            jwplayer("myDiv").setup({
                file: url,
                image: "",
                height: 360,
                width: 640
            });
            
        },
        closeModal: function(){
            this.$modal.hide('vdplayer');
            //this.$modals.hideAll()
        }
    }
};


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.message{color: red;text-align:left;}
.label{float:left}
.is-danger{text-align:left;color:red;width: 100%;float: left;}
input[type=text],[type=email] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
}
.button{padding:10px;float: left;}
</style>
