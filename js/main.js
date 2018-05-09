function writeCode(prefix, code, callback){
    let n = 0
    let editor = document.querySelector('#editor')
    let styleTag = document.querySelector('#styleTag')
    let mp3 = document.querySelector('audio')

    let  timer = setInterval(()=>{
        n+=1
        editor.innerHTML = Prism.highlight(prefix + code.substring(0, n), Prism.languages.css)
        styleTag.innerHTML = prefix + code.substring(0, n)
        editor.scrollTop = editor.scrollHeight
        if(n>=code.length){
            clearInterval(timer)
            callback&&callback()
        }
    },100)
}

function createPaper (callback){
    let paper = document.createElement('pre')
    paper.id = 'paper'
    document.body.appendChild(paper)
    callback&&callback()
}

function writeMarkDown(text,callback){
    let n = 0
    let paper = document.querySelector('#paper')
    let timer = setInterval(function(){
        n+=1
        paper.innerHTML = text.substring(0,n)
        paper.scrollTop = paper.scrollHeight
        if(n>=text.length){
            clearInterval(timer)
            callback&&callback()
        }
    },50)
}

let css1 = `/*
 * 面试官你好，我是XXX
 * 只用文字作做我介绍太单调了
 * 我就用代码来介绍吧
 */

/* 首先我要给自己准备一个高大上的编辑器 */
#editor {
    border: 1px solid #aaa;
    width: 45%;
    height: 90%;
    padding: 20px;

}
/* 给编辑器一个亮丽的背景色 */
#editor {
    background: #eee;
}
/* 给代码加点高亮吧！*/
.token.selector{
    color: #690;
}
.token.punctuation {
    color: #999;
}
.token.comment {
    color: #aaa;
}
.token.property{
    color: #905;
}
/* 加点动画效果 */
#editor {
    transform: rotateZ(-360deg);
    animation: breath 0.5s infinite alternate-reverse;
}
/* 接下来要准备一个白板 */
`
let css2 = `#paper {
    border: 1px solid #aaa;
    width: 45%;
    height: 90%;
    padding: 20px;
    background-color: #eee;
    animation: breath 0.5s infinite alternate-reverse;
}

/* 现在开始介绍我自己，请看右边 */
` 

let md = `
# 自我介绍

我叫 XXX
1990 年 1 月出生
XXX 学校毕业
自学前端半年
希望应聘前端开发岗位

# 技能介绍

熟悉 JavaScript CSS

# 项目介绍

1. XXX 轮播
2. XXX 简历
3. XXX 画板

# 联系方式

- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx

# 联系方式

- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx

# 联系方式

- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx

# 联系方式

- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx

# 联系方式

- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx

# 联系方式

- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx
`

writeCode('',css1,function(){
    createPaper(function(){
        writeCode(css1,css2,function(){
            writeMarkDown(md,function(){

            })
        })
    })
})
