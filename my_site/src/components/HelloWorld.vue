<template>
<div class="hello">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css">
    <transition name="fade">
        <div v-if="showFirst" id="startButton" v-on:click="showSecond = !showSecond; showFirst = !showFirst">
            <div class = "startText">
                
            <div class = "startText1">
                <p>
                    Welcome!
                </p>
            </div>
            <div class="startText2">
                <h5>Actively seeking SDE full-time position</h5>
                <p>Click to Continue</p>
            </div>
            </div>
        </div>
    </transition>


    <transition name="fade">
    <div v-if="showSecond" id="secondScene">
    <h1>Hello This is Xiaotian Zou</h1>
    <div>
        <img  id="avatar" :src="require('../assets/me2.png')"  alt="linkedin">
    </div>
    <div class="selfIntro" v-if="isEnglish">
        <p class="selfIntroText">
            I'm Xiaotian Zou, a second year Master's student majoring in computer science. Currently actively applying for a software engineer position.
        </p>
        <p class="selfIntroText">
            Graduated from Sun Yat-sen(ZhongShan) University as a bachelor of software engineering at the age of 20, then came to the US to study computer science in the University of California,
            Davis.
        </p>
        <p class="selfIntroText">
            Have abundant knowledge and experience in both software development and machine learning.
        </p>
        <p class="selfIntroText">
            Love cooking, hiking, movies and math.
        </p>
        <div class="lists">
            <ul class="list-group" float="left" display="inline-block">
            <li class="list-group-item list-group-item-info">Proficiently Used Languges</li>
            <li class="list-group-item list-group-item-light">Python - 4 years</li>
            <li class="list-group-item list-group-item-light">C++ - 3 years</li>
            <li class="list-group-item list-group-item-light">JavaScript - 3 years</li>
            <li class="list-group-item list-group-item-light">C# - 6 months</li>
            <li class="list-group-item list-group-item-light">Java - 4 months</li>
            <li class="list-group-item list-group-item-light">R - 4 months</li>
        </ul>

        <ul class="list-group" float="right" display="inline-block">
            <li class="list-group-item list-group-item-info">Experience with Frameworks</li>
            <li class="list-group-item list-group-item-light">Vue.js - 1.5 year</li>
            <li class="list-group-item list-group-item-light">Express.js - 9 months</li>
            <li class="list-group-item list-group-item-light">Django - 3 months</li>
            <li class="list-group-item list-group-item-light">Tensorflow - 3 years</li>
        </ul>

        <ul class="list-group" float="right" display="inline-block">
            <li class="list-group-item list-group-item-info">Recently Used Systems</li>
            <li class="list-group-item list-group-item-light">Centos, Ubuntu</li>
            <li class="list-group-item list-group-item-light">MacOs</li>
            <li class="list-group-item list-group-item-light">Windows 10</li>
        </ul>

        <ul class="list-group" float="right" display="inline-block">
            <li class="list-group-item list-group-item-danger">Previous Projects Covered</li>
            <li class="list-group-item list-group-item-light">Full-stack Development</li>
            <li class="list-group-item list-group-item-light">Back-end Development</li>
            <li class="list-group-item list-group-item-light">Front-end Development</li>
            <li class="list-group-item list-group-item-light">Windows 10 App development</li>
            <li class="list-group-item list-group-item-light">Biology - machine learning combined</li>
            <li class="list-group-item list-group-item-light">Natural Language Processing</li>
            <li class="list-group-item list-group-item-light">Quantitative trading</li>
        </ul>
        </div>
    </div>
    
    <div class="selfIntro" v-else>
        
    </div>
    <br>
    <b-button v-b-toggle.sidebar-1>More About Me</b-button>
    <b-sidebar id="sidebar-1" title="Websites">
        <div>
            <b-button v-on:click="visitLinkedin" variant="outline-light">
                <p font-size="50px" class="linkIntro">Linkedin</p>
                <img :src="require('../assets/linkedin.png')"  alt="linkedin" scale="0.5">
            </b-button>
            <b-button class="resumeIcon" v-on:click="visitResume" variant="outline-light">
                <p font-size="50px" class="linkIntro">Resume</p>
                <img :src="require('../assets/resumeIcon.png')"  alt="Resume" scale="0.1" width="60%" height="60%">
            </b-button>
        </div>
    </b-sidebar>
    
    </div>
    </transition>
    
</div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {
    name: 'HelloWorld',
    props: {
        msg: String
    },
    data() {
        return {
            showSecond: false,
            showFirst: true,
            isEnglish: true,
        }
    },
    mounted() {
            // setInterval(function () {
            //     this.showSecond = !this.showSecond;
            // }, 1000)
    },
    
    methods: {
        
        visitLinkedin: function() {
            window.open("https://www.linkedin.com/in/xiaotian-zou-1367591b7/")
        },
        visitResume: function() {
            window.open("https://github.com/XiaotianZou/Resume/blob/master/RESUME.pdf")
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>

.selfIntroText {
    font-size: 15pt;
}

.lists {
  display: flex;
  justify-content: center;
}



.list-group-item-light {
    color: darkslategrey;
}

.startText {
    margin-top: 8%;
}

.startText1 {
    font-size: 80pt;
    display: flex;
    justify-content: center;
    align-items: center;
}

.startText1 {
    display: flex;
    justify-content: center;
    align-items: center;
}

#startButton {
    position:fixed;
    padding:0;
    margin:0;
    top:0;
    left:0;

    width: 100%;
    height: 100%;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

#avatar {
    border-radius: 50%;
    width: 8%;
    
}

.resumeIcon {
    width: 30%;
    height: 30%;
}

.linkIntro {
    margin: 0px;
}

.hello {
    margin: 10px;
}

h3 {
    margin: 40px 0 0;
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
</style>
